// 气球类
class Picture extends ui.PictureUI {
    private word: string;
    public position: string; // 位置 top、bottom
    constructor(word: string, pic: string) {
        super();
        this.word = word;
        this.picture.skin = "HitBalloon/" + pic;
        // 设置图片位置
        this.picture.x = (204 - this.picture.width) / 2;
        this.picture.y = 204 - this.picture.height - 22;
        this.on(Laya.Event.CLICK, this, this.match);
    }

    // 单词和图片匹配
    private match() {
        // 如果有气球炸开并且单词未匹配才进行配对
        if(HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0) {
            if(this.word == HitBalloon.currentBalloon.word.text) { // 图片和炸开的单词配对成功
                // 播放匹配成功音效
                Laya.SoundManager.playSound("res/audio/success.mp3", 1);
                // 图片和气球消失
                HitBalloon.currentBalloon.disappear();
                this.disappear();
                HitBalloon.currentBalloon.state = 1;
                HitBalloon.finishedWordsNumber++;
                // 所有单词都完成配对，结束游戏
                if(HitBalloon.finishedWordsNumber == HitBalloon.hitBalloonMain.getBalloonsNumber()) {
                    Laya.timer.once(2000, this, this.gameOver);
                }   
            }
            else { // 配对不成功
                // 播放匹配不成功音效
                Laya.SoundManager.playSound("res/audio/fail.mp3", 1);
                // 图片晃动
                this.shake();
            } 
        }
    }

    // 消失
    private disappear() {
        Laya.Tween.to(this, {alpha: 0}, 500);
    }

    // 游戏结束
    private gameOver() {
        HitBalloon.hitBalloonMain.gameOver();
    }

    // 图片晃动
    private shake() {
        Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
            Laya.Tween.to(this.picture, {skewX:15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                    Laya.Tween.to(this.picture, {skewX:15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                        Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                            Laya.Tween.to(this.picture, {skewX:0}, 50, Laya.Ease.elasticInOut)
                        }))
                    } ))
                }))
            }))
        })); 
    }
}