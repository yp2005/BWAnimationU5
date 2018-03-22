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
// 泡泡
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble(word) {
        var _this = _super.call(this) || this;
        _this.clicked = false; // 是否点击动画播放中
        _this.word.text = word;
        // 设置单词字号
        _this.word.fontSize = FishAndWord.gameConfig.fontSize;
        return _this;
    }
    // 被点击停止晃动，抖动
    Bubble.prototype.touch = function () {
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
    Bubble.prototype.shake1 = function () {
        if (!this.clicked) {
            this.initY = this.y;
            this.on(Laya.Event.CLICK, this, this.touch);
            this.curAni = Laya.Tween.to(this, { y: this.initY - 10 }, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    };
    Bubble.prototype.shake2 = function () {
        if (!this.clicked) {
            this.curAni = Laya.Tween.to(this, { y: this.initY }, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    };
    return Bubble;
}(ui.BubbleUI));
//# sourceMappingURL=Bubble.js.map