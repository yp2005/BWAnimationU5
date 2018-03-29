var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 鱼
var Fish1 = /** @class */ (function (_super) {
    __extends(Fish1, _super);
    function Fish1(word) {
        var _this = _super.call(this) || this;
        _this.clicked = false; // 是否点击动画播放中
        _this.word.text = word;
        _this.word.fontSize = FishAndWord.gameConfig.fontSize;
        // 根据单词字号和单词长度计算单词和单词背景图的大小，设置居中显示
        _this.word.height = _this.word.fontSize + 5;
        _this.word.width = _this.word.fontSize / 2 * _this.word.text.length + 20;
        _this.word.x = (_this.width - _this.word.width) / 2;
        _this.word.y = (_this.height - _this.word.height) / 2 - 3;
        _this.wordBg.width = _this.word.width > 55 ? _this.word.width : 55;
        _this.wordBg.height = _this.word.height > 35 ? _this.word.fontSize : 30;
        _this.wordBg.centerX = 0;
        _this.wordBg.centerY = 0;
        return _this;
    }
    // 被点击停止晃动，抖动
    Fish1.prototype.touch = function () {
        // 停止晃动
        if (this.curAni) {
            this.curAni.clear();
        }
        this.y = this.initY;
        this.clicked = true;
        this.off(Laya.Event.CLICK, this, this.touch);
        // 播放音效
        Laya.SoundManager.playSound("res/audio/hited.mp3", 1);
        // 抖动
        Laya.Tween.to(this, { y: this.initY - 10 }, 50, null, Laya.Handler.create(this, function () {
            Laya.Tween.to(this, { y: this.initY }, 50, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, { y: this.initY - 10 }, 50, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(this, { y: this.initY }, 50, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(this, { y: this.initY - 10 }, 50, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this, { y: this.initY }, 50, null, Laya.Handler.create(this, function () {
                                this.clicked = false;
                                this.shake1();
                            }));
                        }));
                    }));
                }));
            }));
        }));
    };
    // 晃动
    Fish1.prototype.shake1 = function () {
        if (!this.clicked) {
            this.initY = this.y;
            this.on(Laya.Event.CLICK, this, this.touch);
            this.curAni = Laya.Tween.to(this, { y: this.initY - 10 }, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    };
    Fish1.prototype.shake2 = function () {
        if (!this.clicked) {
            this.curAni = Laya.Tween.to(this, { y: this.initY }, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    };
    return Fish1;
}(ui.Fish1UI));
//# sourceMappingURL=Fish1.js.map