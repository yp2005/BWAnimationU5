// 配置界面
var HEConfigView = /** @class */ (function () {
    function HEConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.fontSize = configBox.getChildByName("fontSize");
        this.word = configBox.getChildByName("textInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    HEConfigView.prototype.init = function () {
        this.fontSize.text = HitEgg.gameConfig.fontSize || 30;
        var text = "";
        for (var _i = 0, _a = HitEgg.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            if (text == "") {
                text = word;
            }
            else {
                text += "," + word;
            }
        }
        this.word.text = text;
    };
    // 显示配置
    HEConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        HitEgg.hitEggMain.addChild(this.configBox);
    };
    // 隐藏配置
    HEConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    HEConfigView.prototype.submit = function () {
        if (!this.fontSize.text) {
            HitEgg.hitEggMain.showTip("请输入字号！");
            return;
        }
        if (!this.word.text) {
            HitEgg.hitEggMain.showTip("请输入单词！");
            return;
        }
        if (!/^\d+$/.test(this.fontSize.text)) {
            HitEgg.hitEggMain.showTip("字号须为正整数！");
            return;
        }
        var texts = this.word.text.split(",");
        if (texts.length < 1 || texts.length > 12) {
            HitEgg.hitEggMain.showTip("单词个数在1-12之间！");
            return;
        }
        var words = [];
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var text = texts_1[_i];
            words.push(text);
        }
        HitEgg.gameConfig = {
            gameModel: false,
            fontSize: parseInt(this.fontSize.text),
            words: words
        };
        HitEgg.hitEggMain.showTip("提交成功！");
        this.hide();
    };
    return HEConfigView;
}());
//# sourceMappingURL=HEConfigView.js.map