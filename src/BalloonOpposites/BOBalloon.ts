class BOBalloon extends ui.BOBalloonUI {
    public name: string;
    public initY: number;
    constructor(type:string = "balloon",num:number = 1,word: string = "text",name: string) {
        super();
        this.name = name;
        this.ball0.skin = "BalloonOpposites/"+type+"-"+num+"-0.png";
        this.ball1.skin = "BalloonOpposites/"+type+"-"+num+"-1.png";
        this.word.text = word;
        if(word.length>7){
            this.wordbg.width = 150;
            this.word.width = 145;
        }
        this.ball1.visible = false;
        this.wordbg.visible = false;
        // this.word.visible = false;
        // this.ball0.on(Laya.Event.CLICK, this, this.hit);
    }

    public setPos(x:number,y:number){
        this.pos(x,y);
        this.initY = y
        // 让延迟0-1秒随机时间开始晃动
        Laya.timer.once(Math.random() * 1000, this, this.shake1);
    }

    // 被砸
    private hit() {
        this.ball0.visible = false;
        this.ball1.visible = true;
        this.wordbg.visible = true;
        // this.word.visible = true;
    }

    // 晃动
    public shake1() {
        Laya.Tween.to(this, {y: this.initY - 10}, Math.random() * 2000+1000, null, Laya.Handler.create(this, this.shake2));
    }

    private shake2() {
        Laya.Tween.to(this, {y: this.initY}, Math.random() * 2000+1000, null, Laya.Handler.create(this, this.shake1));
    }
}