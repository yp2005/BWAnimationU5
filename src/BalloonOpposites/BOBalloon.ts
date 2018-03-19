// 气球类
class BOBalloon extends ui.BOBalloonUI {
    public offset: number; // 气球偏移量
    constructor(side: string,num: number,word: string) {
        super();
        this.ballword.text = word;
        this.ball0.skin = "BalloonOpposites/"+side+"-"+num+"-0.png";
        this.ball1.skin = "BalloonOpposites/"+side+"-"+num+"-1.png";
        this.ball0.visible = true;
        this.ball1.visible = false;
        this.on(Laya.Event.CLICK,this,this.ballTap);
    }

    // 气球受到拍打
    private ballTap() {
        this.ball0.visible = false;
        this.ball1.visible = true;
    }

    // 显示爆炸效果图片
    private showBlast() {
        // this.picture.visible = false;
        // this.blastImg.visible = true;
        // Laya.SoundManager.playSound("res/audio/blast.mp3", 1);
        // Laya.timer.once(300, this, this.showWord);
    }

    // 显示单词
    private showWord() {
        // this.blastImg.visible = false;
        // this.word.visible = true;
        // this.state = 0;
    }

    // 晃动气球
    private doShake() {
        // this.shake.play(0, true);
    }
}