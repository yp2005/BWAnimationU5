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
var BOBalloon = /** @class */ (function (_super) {
    __extends(BOBalloon, _super);
    function BOBalloon(type, num, word, name) {
        if (type === void 0) { type = "balloon"; }
        if (num === void 0) { num = 1; }
        if (word === void 0) { word = "text"; }
        var _this = _super.call(this) || this;
        _this.name = name;
        // this.ball0.skin = "BalloonOpposites/balloon-2-0.png";
        // this.ball1.skin = "BalloonOpposites/balloon-2-1.png";
        _this.ball0.skin = "BalloonOpposites/" + type + "-" + num + "-0.png";
        _this.ball1.skin = "BalloonOpposites/" + type + "-" + num + "-1.png";
        _this.word.text = word;
        if (word.length > 7) {
            _this.wordbg.width = 150;
            _this.word.width = 145;
        }
        _this.ball1.visible = false;
        _this.wordbg.visible = false;
        return _this;
        // this.word.visible = false;
        // this.ball0.on(Laya.Event.CLICK, this, this.hit);
        // test
        // this.ball0.on(Laya.Event.ERROR,this,this.error);
        // this.ball0.on(Laya.Event.LOADED,this,this.loaded);
    }
    BOBalloon.prototype.error = function () {
        console.log("error::" + this.ball0.skin);
    };
    BOBalloon.prototype.loaded = function () {
        console.log("loaded::" + this.ball0.skin);
    };
    BOBalloon.prototype.setPos = function (x, y) {
        this.pos(x, y);
        this.initY = y;
        // 让延迟0-1秒随机时间开始晃动
        Laya.timer.once(Math.random() * 1000, this, this.shake1);
    };
    // 被砸
    BOBalloon.prototype.hit = function () {
        this.ball0.visible = false;
        this.ball1.visible = true;
        this.wordbg.visible = true;
        // this.word.visible = true;
    };
    // 晃动
    BOBalloon.prototype.shake1 = function () {
        Laya.Tween.to(this, { y: this.initY - 10 }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake2));
    };
    BOBalloon.prototype.shake2 = function () {
        Laya.Tween.to(this, { y: this.initY }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake1));
    };
    return BOBalloon;
}(ui.BOBalloonUI));
//# sourceMappingURL=BOBalloon.js.map