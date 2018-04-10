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
// 游戏主界面
var MulTouchMain = /** @class */ (function (_super) {
    __extends(MulTouchMain, _super);
    function MulTouchMain() {
        var _this = _super.call(this) || this;
        _this.speed = 0; // 转速
        _this.mustStop = false;
        _this.configView = new MTConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (MulTouch.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        _this.speak.on(Laya.Event.CLICK, _this, _this.speakWord);
        return _this;
    }
    MulTouchMain.prototype.speakWord = function () {
        if (!MulTouch.gameChecking) {
            var word = MulTouch.allWords[(MulTouch.soundRandom[MulTouch.wordContext] - 1)];
            console.log("sound:::" + word);
            Laya.SoundManager.playSound("res/audio/multouch" + word + ".mp3", 1);
            MulTouch.gameChecking = true;
            MulTouch.mulTouchMain.speak.skin = "MulTouch/sound-disabled.png";
        }
    };
    // 显示提示
    MulTouchMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(2000, this, this.hideTip);
    };
    MulTouchMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    MulTouchMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    MulTouchMain.prototype.showSetting = function (state) {
        if (!MulTouch.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    return MulTouchMain;
}(ui.MulTouchUI));
//# sourceMappingURL=MulTouchMain.js.map