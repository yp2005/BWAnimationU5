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
            console.log("sound:::" + "res/audio/multouch/" + word + ".mp3");
            Laya.SoundManager.playSound("res/audio/multouch/" + word + ".mp3", 1);
            MulTouch.gameChecking = true;
            MulTouch.mulTouchMain.speak.skin = "MulTouch/sound-disabled.png";
            MulTouch.wordContext++;
            MulTouch.leftimageOk = false;
            MulTouch.leftwordOk = false;
            MulTouch.rightwordOk = false;
            MulTouch.rightimageOk = false;
            // let addheight = 20 * picture.height / picture.width;
            // picture.width = picture.width+20;
            // picture.height = picture.height + addheight;
            // picture.x = picture.x - 10;
            // picture.y = picture.y - addheight/2;
            for (var i = 0; i < MulTouch.mulTouchMain.mainbox.numChildren; i++) {
                var img = MulTouch.mulTouchMain.mainbox.getChildAt(i);
                // if((img.x !== 50) || (img.x !== 280) ||(img.x != 562) ||(img.x != 792){
                // }
                if (![50, 280, 562, 792].includes(img.x)) {
                    var addheight = 20 * img.height / img.width;
                    img.width = img.width - 20;
                    img.height = img.height - addheight;
                    img.x = img.x + 10;
                    img.y = img.y + addheight / 2;
                }
            }
            Laya.timer.once(1000, this, function () {
                // 播放到最后一个单词音频的时候replay亮起，播放再也不能点了；
                if (MulTouch.soundRandom.length == MulTouch.wordContext) {
                    MulTouch.gameChecking = true;
                    MulTouch.mulTouchMain.replayBtn.skin = "common/replay-abled.png";
                }
                else {
                    MulTouch.gameChecking = false;
                    MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
                }
            });
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