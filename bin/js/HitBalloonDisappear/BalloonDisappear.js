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
var BalloonDisappear = /** @class */ (function (_super) {
    __extends(BalloonDisappear, _super);
    function BalloonDisappear(word) {
        var _this = _super.call(this) || this;
        _this.linedNumber = 0; // 单词已连线图片数量
        _this.word.text = word;
        _this.word.visible = false;
        _this.blastImg.visible = false;
        _this.picture.on(Laya.Event.CLICK, _this, _this.hit);
        Laya.timer.once(Math.floor(Math.random() * 1000), _this, _this.doShake);
        return _this;
    }
    // 消失
    BalloonDisappear.prototype.disappear = function () {
        Laya.Tween.to(this.word, { alpha: 0 }, 500);
    };
    // 气球受到拍打
    BalloonDisappear.prototype.hit = function () {
        // 如果有气球已经炸开还没完成图片连线，不炸开气球
        if (HitBalloonDisappear.currentBalloon && HitBalloonDisappear.currentBalloon.state == 0) {
            return;
        }
        this.picture.off(Laya.Event.CLICK, this, this.hit);
        HitBalloonDisappear.currentBalloon = this;
        // 停止气球晃动，炸开气球显示单词
        this.shake.stop();
        this.blast.play(0, false);
        Laya.timer.once(1200, this, this.showBlast);
    };
    // 显示爆炸效果图片
    BalloonDisappear.prototype.showBlast = function () {
        this.picture.visible = false;
        this.blastImg.visible = true;
        Laya.SoundManager.playSound("res/audio/blast.mp3", 1);
        Laya.timer.once(300, this, this.showWord);
    };
    // 显示单词
    BalloonDisappear.prototype.showWord = function () {
        this.blastImg.visible = false;
        this.word.visible = true;
        this.state = 0;
    };
    // 晃动气球
    BalloonDisappear.prototype.doShake = function () {
        this.shake.play(0, true);
    };
    return BalloonDisappear;
}(ui.BalloonDisappearUI));
//# sourceMappingURL=BalloonDisappear.js.map