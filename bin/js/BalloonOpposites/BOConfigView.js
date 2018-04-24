// 配置界面
var BOConfigView = /** @class */ (function () {
    function BOConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.leftInput = configBox.getChildByName("leftInput");
        this.rightInput = configBox.getChildByName("rightInput");
        this.bgInput = configBox.getChildByName("bgInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    BOConfigView.prototype.init = function () {
        this.leftInput.text = BalloonOpposites.gameConfig.leftWords.join(",");
        this.rightInput.text = BalloonOpposites.gameConfig.rightWords.join(",");
        this.bgInput.text = BalloonOpposites.gameConfig.type + "-" + BalloonOpposites.gameConfig.typeNum;
    };
    // 显示配置
    BOConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        BalloonOpposites.balloonOppositesMain.addChild(this.configBox);
    };
    // 隐藏配置
    BOConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    BOConfigView.prototype.submit = function () {
        var _map = {};
        var leftTexts = this.leftInput.text.split(",");
        var rightTexts = this.rightInput.text.split(",");
        var typeTexts = this.bgInput.text.split("-");
        var leftLength = leftTexts.length, rightLength = rightTexts.length;
        if (leftLength < 1 || leftLength > 7 || rightLength < 1 || rightLength > 7) {
            BalloonOpposites.balloonOppositesMain.showTip("左右两边的单词数量必须都在1-7之间！");
            return;
        }
        if (leftTexts.length != rightTexts.length) {
            BalloonOpposites.balloonOppositesMain.showTip("左右两边的单词必须一一对应，互为相反！");
            return;
        }
        var isExit = false, isEmpty = false;
        for (var i = 0; i < leftTexts.length; i++) {
            if (leftTexts[i] == '' || rightTexts[i] == '') {
                isEmpty = true;
                break;
            }
            if (_map[leftTexts[i]]) {
                isExit = true;
                break;
            }
            else {
                _map[leftTexts[i]] = rightTexts[i];
            }
            if (_map[rightTexts[i]]) {
                isExit = true;
                break;
            }
            else {
                _map[rightTexts[i]] = leftTexts[i];
            }
        }
        if (isEmpty) {
            BalloonOpposites.balloonOppositesMain.showTip("单词不能为空");
            return;
        }
        if (isExit) {
            BalloonOpposites.balloonOppositesMain.showTip("单词重复！");
            return;
        }
        var type = typeTexts[0] || "balloon";
        var num = typeTexts[0] || "1";
        BalloonOpposites.ballWordMap = _map;
        BalloonOpposites.gameConfig.type = type;
        BalloonOpposites.gameConfig.typeNum = parseInt(num);
        BalloonOpposites.gameConfig.leftWords = leftTexts;
        BalloonOpposites.gameConfig.rightWords = rightTexts;
        BalloonOpposites.init();
        BalloonOpposites.balloonOppositesMain.showTip("提交成功！");
        this.hide();
    };
    return BOConfigView;
}());
//# sourceMappingURL=BOConfigView.js.map