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
var ThrowDiceMain = /** @class */ (function (_super) {
    __extends(ThrowDiceMain, _super);
    function ThrowDiceMain() {
        var _this = _super.call(this) || this;
        // this.wellDone.visible = false;
        // this.wellDoneY = this.wellDone.y;
        // this.wellDoneX = this.wellDone.x;
        _this.configView = new TDConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (ThrowDice.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        return _this;
    }
    ThrowDiceMain.prototype.changeBg = function (bg) {
        this.gameBg.skin = "ThrowDice/" + bg;
    };
    ThrowDiceMain.prototype.changePics = function (pics) {
        // for(var i = 0;i<6;i++){
        //     let pic = ThrowDice.throwDiceMain.getChildByName('pic'+(i+1)) as Laya.Image;
        //     // pic.skin = "ThrowDice/bg2.png";
        //     pic.skin = "ThrowDice/"+pics[i];
        // }
        this.pic1.skin = "ThrowDice/" + pics[0];
        this.pic1.skin = "ThrowDice/" + pics[1];
        this.pic1.skin = "ThrowDice/" + pics[2];
        this.pic1.skin = "ThrowDice/" + pics[3];
        this.pic1.skin = "ThrowDice/" + pics[4];
        this.pic1.skin = "ThrowDice/" + pics[5];
    };
    ThrowDiceMain.prototype.changeStatus = function (isVisible) {
        for (var i = 0; i < 6; i++) {
            // let pic = ThrowDice.throwDiceMain.getChildByName('pic'+(i+1)) as Laya.Image;
            // pic.visible = isVisible;
            var mask = ThrowDice.throwDiceMain.getChildByName('mask' + (i + 1));
            mask.visible = false;
        }
        // this.pic1.visible = 
    };
    // 显示提示
    ThrowDiceMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    ThrowDiceMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    ThrowDiceMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    ThrowDiceMain.prototype.showSetting = function (state) {
        if (!ThrowDice.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 游戏结束
    ThrowDiceMain.prototype.gameOver = function () {
        // 显示well done文字效果
        // this.wellDone.y = this.wellDoneY + this.wellDone.height;
        // this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        // this.wellDone.scale(0, 0);
        // this.wellDone.visible = true;
        // this.wellDone.removeSelf();
        // this.addChild(this.wellDone);
        // Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
    };
    // 重置游戏为初始状态
    ThrowDiceMain.prototype.reset = function () {
        // this.wellDone.visible = false;
        // for(let balloon of this.balloons) {
        //     balloon.removeSelf();
        //     balloon.destroy();
        // }
        // for(let picture of this.pictures) {
        //     picture.removeSelf();
        //     picture.destroy();
        // }
        // HitBalloon.hitBalloonMain.replayBtn.visible = true;
        // HitBalloon.finishedWordsNumber = 0;
        // this.showSetting(true);
    };
    return ThrowDiceMain;
}(ui.ThrowDiceUI));
//# sourceMappingURL=ThrowDiceMain.js.map