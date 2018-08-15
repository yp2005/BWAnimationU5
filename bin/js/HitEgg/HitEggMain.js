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
var HitEggMain = /** @class */ (function (_super) {
    __extends(HitEggMain, _super);
    function HitEggMain() {
        var _this = _super.call(this) || this;
        _this.configView = new HEConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (HitEgg.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        return _this;
    }
    // 显示提示
    HitEggMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        this.tip.removeSelf();
        this.addChild(this.tip);
        Laya.timer.once(1500, this, this.hideTip);
    };
    HitEggMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    HitEggMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    HitEggMain.prototype.showSetting = function (state) {
        if (!HitEgg.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 重置游戏为初始状态
    HitEggMain.prototype.reset = function () {
        for (var _i = 0, _a = this.eggs; _i < _a.length; _i++) {
            var egg = _a[_i];
            egg.removeSelf();
            egg.destroy();
        }
        HitEgg.hitedNum = 0;
    };
    // 将游戏元素添加到游戏主页面
    HitEggMain.prototype.addElement = function (eggs) {
        this.eggs = eggs;
        // 随机3/10的鸡蛋有小鸡
        var hasChickNum = Math.round(eggs.length * 3 / 10);
        var hasChickIndex = new Array();
        var indexes = new Array();
        for (var i = 0; i < eggs.length; i++) {
            indexes.push(i);
        }
        for (var i = 0; i < hasChickNum; i++) {
            var i_1 = Math.floor(Math.random() * indexes.length);
            var index = indexes[i_1];
            indexes.splice(i_1, 1);
            eggs[index].hasChick = true;
        }
        indexes = new Array();
        for (var i = 0; i < eggs.length; i++) {
            indexes.push(i);
        }
        // 根据蛋的数量进行布局分配，为每个蛋随机一个位置
        if (eggs.length <= 2) {
            for (var _i = 0, eggs_1 = eggs; _i < eggs_1.length; _i++) {
                var egg = eggs_1[_i];
                var i = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                var index = indexes[i];
                indexes.splice(i, 1);
                egg.x = 1024 / eggs.length * index + (1024 / eggs.length - egg.width) / 2;
                egg.y = (768 - egg.height) / 2;
                this.addChild(egg);
            }
        }
        else if (eggs.length > 2 && eggs.length <= 6) {
            var line1Num = Math.floor(eggs.length / 2);
            var line2Num = eggs.length - line1Num;
            var line1Width = 1024 / line1Num;
            var line2Width = 1024 / line2Num;
            for (var _a = 0, eggs_2 = eggs; _a < eggs_2.length; _a++) {
                var egg = eggs_2[_a];
                var i = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                var index = indexes[i];
                indexes.splice(i, 1);
                if (index + 1 > line1Num) {
                    egg.x = line2Width * (index - line1Num) + (line2Width - egg.width) / 2;
                    egg.y = 384 + (384 - egg.height) / 2;
                }
                else {
                    egg.x = line1Width * index + (line1Width - egg.width) / 2;
                    egg.y = (384 - egg.height) / 2;
                }
                this.addChild(egg);
            }
        }
        else {
            var line1Num = Math.floor(eggs.length / 3);
            var line3Num = Math.floor((eggs.length - line1Num) / 2);
            var line2Num = eggs.length - line1Num - line3Num;
            var line1Width = 1024 / line1Num;
            var line2Width = 1024 / line2Num;
            var line3Width = 1024 / line3Num;
            var lineHeight = 256;
            var upHeight = 30;
            for (var _b = 0, eggs_3 = eggs; _b < eggs_3.length; _b++) {
                var egg = eggs_3[_b];
                var i = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                var index = indexes[i];
                indexes.splice(i, 1);
                if (index + 1 <= line1Num) {
                    egg.x = line1Width * index + (line1Width - egg.width) / 2;
                    // if(line1Num == 4 && index == 0) {
                    //     egg.x += 50;
                    // }
                    egg.y = (lineHeight - egg.height) / 2 + 30;
                }
                else if (index + 1 > line1Num && index + 1 <= line1Num + line2Num) {
                    egg.x = line2Width * (index - line1Num) + (line2Width - egg.width) / 2;
                    egg.y = lineHeight - upHeight + (lineHeight - egg.height) / 2 + 15;
                }
                else {
                    egg.x = line3Width * (index - line1Num - line2Num) + (line3Width - egg.width) / 2;
                    egg.y = (lineHeight - upHeight) * 2 + (lineHeight - egg.height) / 2;
                    // if(line3Num >= 3 && index == eggs.length - 1) {
                    //     egg.y -= 20;
                    // }
                }
                this.addChild(egg);
            }
        }
    };
    return HitEggMain;
}(ui.HitEggUI));
//# sourceMappingURL=HitEggMain.js.map