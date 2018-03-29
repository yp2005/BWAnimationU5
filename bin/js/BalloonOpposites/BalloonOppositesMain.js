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
var BalloonOppositesMain = /** @class */ (function (_super) {
    __extends(BalloonOppositesMain, _super);
    function BalloonOppositesMain() {
        var _this = _super.call(this) || this;
        _this.configView = new BOConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (BalloonOpposites.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        return _this;
    }
    // 显示提示
    BalloonOppositesMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(2000, this, this.hideTip);
    };
    BalloonOppositesMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    BalloonOppositesMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    BalloonOppositesMain.prototype.showSetting = function (state) {
        if (!BalloonOpposites.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    return BalloonOppositesMain;
}(ui.BalloonOppositesUI));
//# sourceMappingURL=BalloonOppositesMain.js.map