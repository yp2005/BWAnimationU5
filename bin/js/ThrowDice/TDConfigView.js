// 配置界面
var TDConfigView = /** @class */ (function () {
    function TDConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.bgInput = configBox.getChildByName("bgInput");
        this.picInput = configBox.getChildByName("picInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    TDConfigView.prototype.init = function () {
        var text = ThrowDice.gameConfig.pics.join(",");
        this.bgInput.text = ThrowDice.gameConfig.bg;
        this.picInput.text = text;
    };
    // 显示配置
    TDConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        ThrowDice.throwDiceMain.addChild(this.configBox);
    };
    // 隐藏配置
    TDConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    TDConfigView.prototype.submit = function () {
        var bg = this.bgInput.text;
        var texts = this.picInput.text.split(",");
        if (texts.length !== 6) {
            ThrowDice.throwDiceMain.showTip("底图数只能为6个！");
            return;
        }
        ThrowDice.gameConfig.bg = bg;
        ThrowDice.gameConfig.pics = texts;
        ThrowDice.init();
        ThrowDice.throwDiceMain.showTip("提交成功！");
        this.hide();
    };
    return TDConfigView;
}());
//# sourceMappingURL=TDConfigView.js.map