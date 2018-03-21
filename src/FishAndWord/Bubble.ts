// 泡泡
class Bubble extends ui.BubbleUI {
    public initY: number; // 初始的Y值
    private curAni: Laya.Tween; // 当前正在播放的动画
    private clicked: boolean = false; // 是否点击动画播放中
    constructor(word: string) {
        super();  
        this.word.text = word;
        this.word.fontSize = FishAndWord.gameConfig.fontSize;
    }

    // 被点击
    private touch() {
        if(this.curAni) {
            this.curAni.clear();
        }
        this.y = this.initY;
        this.clicked = true;
        this.off(Laya.Event.CLICK, this, this.touch);
        Laya.SoundManager.playSound("res/audio/hited.mp3", 1);
        Laya.Tween.to(this, {y: this.initY - 10}, 50, null, Laya.Handler.create(this, function() {
            Laya.Tween.to(this, {y: this.initY}, 50, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this, {y: this.initY - 10}, 50, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this, {y: this.initY}, 50, null, Laya.Handler.create(this, function() {
                        Laya.Tween.to(this, {y: this.initY - 10},50, null, Laya.Handler.create(this, function() {
                            Laya.Tween.to(this, {y: this.initY}, 50, null, Laya.Handler.create(this, function() {
                                this.clicked = false;
                                this.shake1();
                            }));
                        }));
                    }));
                }));
            }));
        }));
    }

    // 晃动
    public shake1() {
        if(!this.clicked) {
            this.initY = this.y;
            this.on(Laya.Event.CLICK, this, this.touch);
            this.curAni = Laya.Tween.to(this, {y: this.initY - 10}, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    }

    private shake2() {
        if(!this.clicked) {
            this.curAni = Laya.Tween.to(this, {y: this.initY}, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    }
}