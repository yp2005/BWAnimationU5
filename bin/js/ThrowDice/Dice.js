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
// 骰子类
var Dice = /** @class */ (function (_super) {
    __extends(Dice, _super);
    function Dice() {
        var _this = _super.call(this) || this;
        //当前动作
        _this.action = "";
        _this.init();
        return _this;
    }
    Dice.prototype.init = function () {
        if (!Dice.cached) {
            Dice.cached = true;
            //缓存摇动画
            Laya.Animation.createFrames(["ThrowDice/dice-move-1.png", "ThrowDice/dice-move-2.png", "ThrowDice/dice-move-3.png",
                "ThrowDice/dice-move-4.png", "ThrowDice/dice-move-6.png", "ThrowDice/dice-move-5.png"], "dice_throw");
            // Laya.Animation.createFrames(["ThrowDice/dice-move-1.png","ThrowDice/dice-move-3.png","ThrowDice/dice-move-6.png"],"dice_throw");
            //缓存选中动画
            Laya.Animation.createFrames(["ThrowDice/dice-face-1.png"], "dice_1");
            Laya.Animation.createFrames(["ThrowDice/dice-face-2.png"], "dice_2");
            Laya.Animation.createFrames(["ThrowDice/dice-face-3.png"], "dice_3");
            Laya.Animation.createFrames(["ThrowDice/dice-face-4.png"], "dice_4");
            Laya.Animation.createFrames(["ThrowDice/dice-face-5.png"], "dice_5");
            Laya.Animation.createFrames(["ThrowDice/dice-face-6.png"], "dice_6");
        }
        if (!this.body) {
            this.body = new Laya.Animation();
            this.body.interval = 100;
            this.body.width = 150;
            this.body.height = 150;
            this.addChild(this.body);
            //添加动画播放完成事件
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }
        //默认循环移动动画
        this.playAction("dice_6");
    };
    // 动画完毕回调
    Dice.prototype.onPlayComplete = function () {
    };
    // 执行指定动画
    Dice.prototype.playAction = function (action) {
        //记录当前的播放动画类型
        this.action = action;
        //根据不同的动画类型播放动画;
        this.body.play(0, true, action);
        //获取动画大小的区域
        var bound = this.body.getBounds();
        //设置居中
        this.body.pos(-bound.width / 2, -bound.height / 2);
    };
    return Dice;
}(Laya.Sprite));
//# sourceMappingURL=Dice.js.map