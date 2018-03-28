// 鱼
class Fish1 extends ui.Fish1UI {
    public initY: number; // 初始的Y值
    private curAni: Laya.Tween; // 当前正在播放的动画
    private clicked: boolean = false; // 是否点击动画播放中
    constructor(word: string) {
        super();  
        this.word.text = word;
        this.word.fontSize = FishAndWord.gameConfig.fontSize;
        // 根据单词字号和单词长度计算单词和单词背景图的大小，设置居中显示
        this.word.height = this.word.fontSize + 5;
        this.word.width = this.word.fontSize / 2 * this.word.text.length + 20;
        this.word.x = (this.width - this.word.width) / 2;
        this.word.y = (this.height - this.word.height) / 2 - 3;
        this.wordBg.width = this.word.width > 55 ? this.word.width : 55;
        this.wordBg.height = this.word.height > 35 ? this.word.fontSize : 30;
        this.wordBg.centerX = 0;
        this.wordBg.centerY = 0;
    }

    // 被点击停止晃动，抖动
    private touch() {
        // 停止晃动
        if(this.curAni) {
            this.curAni.clear();
        }
        this.y = this.initY;
        this.clicked = true;
        this.off(Laya.Event.CLICK, this, this.touch);
        // 播放音效
        Laya.SoundManager.playSound("res/audio/hited.mp3", 1);
        // 抖动
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