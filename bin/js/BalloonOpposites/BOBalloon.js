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
// 气球类
var BOBalloon = /** @class */ (function (_super) {
    __extends(BOBalloon, _super);
    function BOBalloon(side, num, word) {
        var _this = _super.call(this) || this;
        _this.ballword.text = word;
        _this.ball0.skin = "BalloonOpposites/" + side + "-" + num + "-0.png";
        _this.ball1.skin = "BalloonOpposites/" + side + "-" + num + "-1.png";
        _this.ball0.visible = true;
        _this.ball1.visible = false;
        _this.on(Laya.Event.CLICK, _this, _this.ballTap);
        return _this;
    }
    // 气球受到拍打
    BOBalloon.prototype.ballTap = function () {
        this.ball0.visible = false;
        this.ball1.visible = true;
    };
    // 显示爆炸效果图片
    BOBalloon.prototype.showBlast = function () {
        // this.picture.visible = false;
        // this.blastImg.visible = true;
        // Laya.SoundManager.playSound("res/audio/blast.mp3", 1);
        // Laya.timer.once(300, this, this.showWord);
    };
    // 显示单词
    BOBalloon.prototype.showWord = function () {
        // this.blastImg.visible = false;
        // this.word.visible = true;
        // this.state = 0;
    };
    // 晃动气球
    BOBalloon.prototype.doShake = function () {
        // this.shake.play(0, true);
    };
    return BOBalloon;
}(ui.BOBalloonUI));
//# sourceMappingURL=BOBalloon.js.map