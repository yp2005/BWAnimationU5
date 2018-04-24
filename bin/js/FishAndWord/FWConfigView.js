// 配置界面
var FWConfigView = /** @class */ (function () {
    function FWConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.backgroundImg = configBox.getChildByName("backgroundImg");
        this.type = configBox.getChildByName("type");
        this.fontSize = configBox.getChildByName("fontSize");
        this.word = configBox.getChildByName("word");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    FWConfigView.prototype.init = function () {
        this.backgroundImg.text = FishAndWord.gameConfig.backgroundImg;
        this.type.text = FishAndWord.gameConfig.type;
        this.fontSize.text = FishAndWord.gameConfig.fontSize;
        var text = "";
        for (var _i = 0, _a = FishAndWord.gameConfig.words; _i < _a.length; _i++) {
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
    FWConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        FishAndWord.fishAndWordMain.addChild(this.configBox);
    };
    // 隐藏配置
    FWConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    FWConfigView.prototype.submit = function () {
        if (!this.backgroundImg.text || !this.type.text || !this.fontSize.text || !this.word.text) {
            FishAndWord.fishAndWordMain.showTip("你还有配置项未填写！");
            return;
        }
        if (!/^\d+$/.test(this.fontSize.text)) {
            FishAndWord.fishAndWordMain.showTip("字号必须为正整数！");
            return;
        }
        var texts = this.word.text.split(",");
        if (texts.length < 1 || texts.length > 16) {
            FishAndWord.fishAndWordMain.showTip("单词个数在1-8之间！");
            return;
        }
        var words = [];
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var text = texts_1[_i];
            if (text == "") {
                FishAndWord.fishAndWordMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            words.push(text);
        }
        FishAndWord.gameConfig = {
            gameModel: false,
            backgroundImg: this.backgroundImg.text,
            type: this.type.text,
            words: words,
            fontSize: parseInt(this.fontSize.text)
        };
        FishAndWord.fishAndWordMain.bg.skin = "FishAndWord/" + FishAndWord.gameConfig.backgroundImg;
        FishAndWord.fishAndWordMain.showTip("提交成功！");
        FishAndWord.fishAndWordMain.reset();
        FishAndWord.fishAndWordMain.initWords();
        this.hide();
    };
    return FWConfigView;
}());
//# sourceMappingURL=FWConfigView.js.map