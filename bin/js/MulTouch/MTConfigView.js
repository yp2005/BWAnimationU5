// 配置界面
var MTConfigView = /** @class */ (function () {
    function MTConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.leftInput = configBox.getChildByName("leftInput");
        this.rightInput = configBox.getChildByName("rightInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    MTConfigView.prototype.init = function () {
        this.leftInput.text = MulTouch.gameConfig.leftWords.join(",");
        this.rightInput.text = MulTouch.gameConfig.rightWords.join(",");
    };
    // 显示配置
    MTConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    MTConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    MTConfigView.prototype.submit = function () {
        var _map = {};
        var leftTexts = this.leftInput.text.split(",");
        var rightTexts = this.rightInput.text.split(",");
        var leftLength = leftTexts.length, rightLength = rightTexts.length;
        if (leftLength < 1 || leftLength > 7 || rightLength < 1 || rightLength > 7) {
            MulTouch.mulTouchMain.showTip("左右两边的单词数量必须都在1-7之间！");
            return;
        }
        var isEmpty = false;
        for (var i = 0; i < leftTexts.length; i++) {
            if (leftTexts[i] == '' || rightTexts[i] == '') {
                isEmpty = true;
                break;
            }
        }
        if (isEmpty) {
            MulTouch.mulTouchMain.showTip("单词不能为空");
            return;
        }
        MulTouch.gameConfig.leftWords = leftTexts;
        MulTouch.gameConfig.rightWords = rightTexts;
        MulTouch.init();
        MulTouch.mulTouchMain.showTip("提交成功！");
        this.hide();
    };
    return MTConfigView;
}());
//# sourceMappingURL=MTConfigView.js.map