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
// 蛋
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg(word) {
        var _this = _super.call(this) || this;
        _this.hasChick = false;
        _this.word.text = word;
        // 设置单词字号和单词背景图
        _this.word.fontSize = HitEgg.gameConfig.fontSize;
        _this.word.height = _this.word.fontSize + 5;
        _this.word.width = _this.word.fontSize / 3 * 2 * _this.word.text.length + 20;
        _this.word.x = (_this.width - _this.word.width) / 2;
        _this.wordBg.width = _this.word.width > 138 ? _this.word.width : 138;
        _this.wordBg.height = _this.word.height > 48 ? _this.word.fontSize : 48;
        _this.wordBg.x = (_this.width - _this.wordBg.width) / 2;
        _this.wordBg.y = 160;
        _this.word.y = 160 + (_this.wordBg.height - _this.word.height) / 2 - 2;
        // 初始化蛋的显示元素
        _this.picture.visible = true;
        _this.wordBg.visible = false;
        _this.word.visible = false;
        _this.eggBroken.visible = false;
        _this.hammer.visible = false;
        _this.picture.on(Laya.Event.CLICK, _this, _this.hit);
        return _this;
    }
    // 被砸
    Egg.prototype.hit = function () {
        this.picture.off(Laya.Event.CLICK, this, this.hit);
        this.hammer.visible = true;
        // 播放捶打动画
        this.hammer.play(0, false);
        Laya.SoundManager.playSound("res/audio/hit-egg.mp3", 1);
        Laya.timer.once(100, this, function () {
            this.word.visible = true;
            this.wordBg.visible = true;
            this.picture.visible = false;
            this.eggBroken.visible = true;
            this.eggBroken.play(0, false, this.hasChick ? "broken1" : "broken2");
            Laya.SoundManager.playSound("res/audio/egg-broken.mp3", 1);
            Laya.timer.once(200, this, function () {
                this.picture.skin = "HitEgg/" + (this.hasChick ? "egg-broken-chick-3.png" : "egg-broken-nochick-3.png");
                this.picture.visible = true;
                this.eggBroken.visible = false;
                Laya.timer.once(200, this, function () {
                    this.hammer.visible = false;
                });
                HitEgg.hitedNum++;
                if (HitEgg.hitedNum >= HitEgg.hitEggMain.eggs.length) {
                    HitEgg.hitEggMain.replayBtn.skin = "common/replay-abled.png";
                    HitEgg.hitEggMain.replayBtn.removeSelf();
                    HitEgg.hitEggMain.addChild(HitEgg.hitEggMain.replayBtn);
                    HitEgg.hitEggMain.replayText.removeSelf();
                    HitEgg.hitEggMain.addChild(HitEgg.hitEggMain.replayText);
                }
            });
        });
    };
    return Egg;
}(ui.EggUI));
//# sourceMappingURL=Egg.js.map