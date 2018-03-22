// 配置界面
var TDConfigView = /** @class */ (function () {
    function TDConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    TDConfigView.prototype.init = function () {
        var text = "";
        for (var _i = 0, _a = HitBalloon.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            if (text == "") {
                text = word.word + ":" + word.picture;
            }
            else {
                text += "," + word.word + ":" + word.picture;
            }
        }
        this.textInput.text = text;
    };
    // 显示配置
    TDConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    TDConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    TDConfigView.prototype.submit = function () {
        var texts = this.textInput.text.split(",");
        if (texts.length < 1 || texts.length > 8) {
            HitBalloon.hitBalloonMain.showTip("单词个数在1-8之间！");
            return;
        }
        var words = [];
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var text = texts_1[_i];
            var textSp = text.split(":");
            if (text == "" || textSp.length != 2 || textSp[0] == "" || textSp[1] == "") {
                HitBalloon.hitBalloonMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            words.push({
                word: textSp[0],
                picture: textSp[1]
            });
        }
        HitBalloon.gameConfig.words = words;
        HitBalloon.hitBalloonMain.showTip("提交成功！");
        this.hide();
    };
    return TDConfigView;
}());
//# sourceMappingURL=TDConfigView.js.map