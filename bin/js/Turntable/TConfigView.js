// 配置界面
var TConfigView = /** @class */ (function () {
    function TConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.wordInput = configBox.getChildByName("wordInput");
        this.picInput = configBox.getChildByName("picInput");
        this.fontInput = configBox.getChildByName("fontInput");
        this.bgInput = configBox.getChildByName("bgInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    TConfigView.prototype.init = function () {
        this.wordInput.text = Turntable.gameConfig.words.join(",");
        this.picInput.text = Turntable.gameConfig.pics.join(",");
        this.fontInput.text = Turntable.gameConfig.fontSize;
        this.bgInput.text = Turntable.gameConfig.bg;
    };
    // 显示配置
    TConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    TConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    TConfigView.prototype.submit = function () {
        var _map = {};
        var words = this.wordInput.text.split(",");
        var pics = this.picInput.text.split(",");
        var fontSize = this.fontInput.text;
        var bg = this.bgInput.text;
        var leftLength = words.length, rightLength = pics.length;
        var total = leftLength + rightLength;
        if (!/\d+/.test(fontSize)) {
            Turntable.turntableMain.showTip("字号必须为正整数！");
            return;
        }
        if (total == 4 || total == 6 || total == 8 || total == 10) {
            Turntable.gameConfig.words = words;
            Turntable.gameConfig.pics = pics;
            Turntable.gameConfig.fontSize = fontSize;
            Turntable.gameConfig.bg = bg;
            Turntable.turntableMain.showTip("提交成功！");
            this.hide();
            Turntable.init();
        }
        else {
            Turntable.turntableMain.showTip("单词与图片数量之和必须是4，6，8，10之中的一个！");
        }
    };
    return TConfigView;
}());
//# sourceMappingURL=TConfigView.js.map