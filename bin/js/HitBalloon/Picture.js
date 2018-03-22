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
// 图片类
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(word, pic) {
        var _this = _super.call(this) || this;
        _this.word = word;
        _this.picture.skin = "HitBalloon/" + pic;
        // 设置图片位置
        _this.picture.x = (204 - _this.picture.width) / 2;
        _this.picture.y = 204 - _this.picture.height - 22;
        _this.on(Laya.Event.CLICK, _this, _this.match);
        return _this;
    }
    // 单词和图片匹配
    Picture.prototype.match = function () {
        // 如果有气球炸开并且单词未匹配才进行配对
        if (HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0) {
            if (this.word == HitBalloon.currentBalloon.word.text) {
                // 播放匹配成功音效
                Laya.SoundManager.playSound("res/audio/success.mp3", 1);
                // 图片和气球消失
                HitBalloon.currentBalloon.disappear();
                this.disappear();
                HitBalloon.currentBalloon.state = 1;
                HitBalloon.finishedWordsNumber++;
                // 所有单词都完成配对，结束游戏
                if (HitBalloon.finishedWordsNumber == HitBalloon.hitBalloonMain.getBalloonsNumber()) {
                    Laya.timer.once(2000, this, this.gameOver);
                }
            }
            else {
                // 播放匹配不成功音效
                Laya.SoundManager.playSound("res/audio/fail.mp3", 1);
                // 图片晃动
                this.shake();
            }
        }
    };
    // 消失
    Picture.prototype.disappear = function () {
        Laya.Tween.to(this, { alpha: 0 }, 500);
    };
    // 游戏结束
    Picture.prototype.gameOver = function () {
        HitBalloon.hitBalloonMain.gameOver();
    };
    // 图片晃动
    Picture.prototype.shake = function () {
        Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(this.picture, { skewX: 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(this.picture, { skewX: 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this.picture, { skewX: 0 }, 50, Laya.Ease.elasticInOut);
                        }));
                    }));
                }));
            }));
        }));
    };
    return Picture;
}(ui.PictureUI));
//# sourceMappingURL=Picture.js.map