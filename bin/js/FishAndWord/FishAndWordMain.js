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
var FishAndWordMain = /** @class */ (function (_super) {
    __extends(FishAndWordMain, _super);
    function FishAndWordMain() {
        var _this = _super.call(this) || this;
        _this.fishImg = "fish-1.png"; // 鱼的图片
        // 泡泡图片
        _this.bubbleImg = ["bubble-1.png", "bubble-2.png", "bubble-3.png", "bubble-4.png"];
        // 贝壳图片
        _this.shellImg = ["shell-1.png", "shell-1-big.png", "shell-2.png", "shell-2-big.png", "shell-3.png", "shell-3-big.png", "shell-4.png", "shell-5.png"];
        _this.configView = new FWConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (FishAndWord.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        _this.bg.skin = "FishAndWord/" + FishAndWord.gameConfig.backgroundImg;
        return _this;
    }
    // 显示提示
    FishAndWordMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    FishAndWordMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    FishAndWordMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    FishAndWordMain.prototype.showSetting = function (state) {
        if (!FishAndWord.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 将游戏元素添加到游戏主页面
    FishAndWordMain.prototype.addElement = function (fish, bubbles, shells) {
        var words;
        if (fish) {
            words = fish;
        }
        else if (bubbles) {
            words = bubbles;
        }
        else if (shells) {
            words = shells;
        }
        var indexes = new Array();
        for (var i = 0; i < 16; i++) {
            indexes.push(i);
        }
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            var i = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
            var index = indexes[i];
            indexes.splice(i, 1);
            // 设置单词在有界面的位置
            word.x = FishAndWord.wordPositon[index].x;
            word.y = FishAndWord.wordPositon[index].y;
            // 让延迟0-1秒随机时间开始晃动
            Laya.timer.once(Math.floor(Math.random() * 1000), word, word.shake1);
            // 不同类型的单词背景图片需要不同的设置
            if (FishAndWord.gameConfig.type == "fish") {
                word.picture.skin = "FishAndWord/" + this.fishImg;
            }
            else if (FishAndWord.gameConfig.type == "bubble") {
                word.picture.skin = "FishAndWord/" + this.bubbleImg[Math.floor(Math.random() * this.bubbleImg.length)];
            }
            else if (FishAndWord.gameConfig.type == "shell") {
                var pic = this.shellImg[Math.floor(Math.random() * this.shellImg.length)];
                word.picture.skin = "FishAndWord/" + pic;
                // 贝壳图片有大有小，设置居中
                word.picture.centerX = 0;
                word.picture.centerY = 0;
                // 大图片和小图片使用不同的包围单词的圆圈图
                if (pic.indexOf("big") != -1) {
                    word.wordBg.visible = false;
                }
                else {
                    word.wordBgBig.visible = false;
                }
            }
            this.addChild(word);
        }
    };
    return FishAndWordMain;
}(ui.FishAndWordUI));
//# sourceMappingURL=FishAndWordMain.js.map