// 骰子类
class Dice  extends Laya.Sprite {
    //定义身体
    public body:Laya.Animation;
    //当前动作
    public action:string = "";
    //是否缓存了动画
    private static cached :boolean;
    constructor() {
        super();
        this.init();
    }

    public init():void{
        if(!Dice.cached){
            Dice.cached = true;
            //缓存摇动画
            Laya.Animation.createFrames(["ThrowDice/dice-move-1.png","ThrowDice/dice-move-2.png","ThrowDice/dice-move-3.png",
                        "ThrowDice/dice-move-4.png","ThrowDice/dice-move-6.png","ThrowDice/dice-move-5.png"],"dice_throw");
            // Laya.Animation.createFrames(["ThrowDice/dice-move-1.png","ThrowDice/dice-move-3.png","ThrowDice/dice-move-6.png"],"dice_throw");
            
            //缓存选中动画
            Laya.Animation.createFrames(["ThrowDice/dice-face-1.png"],"dice_1");
            Laya.Animation.createFrames(["ThrowDice/dice-face-2.png"],"dice_2");
            Laya.Animation.createFrames(["ThrowDice/dice-face-3.png"],"dice_3");
            Laya.Animation.createFrames(["ThrowDice/dice-face-4.png"],"dice_4");
            Laya.Animation.createFrames(["ThrowDice/dice-face-5.png"],"dice_5");
            Laya.Animation.createFrames(["ThrowDice/dice-face-6.png"],"dice_6");
        }

        if(!this.body){
            this.body = new Laya.Animation();
            this.body.interval = 100;
            this.body.width = 150;
            this.body.height =150;
            this.addChild(this.body);

            //添加动画播放完成事件
            this.body.on(Laya.Event.COMPLETE,this,this.onPlayComplete);
        }

        //默认循环移动动画
        this.playAction("dice_6");
    }

    // 动画完毕回调
    onPlayComplete():void{
        
    }

    // 执行指定动画
    playAction(action:string):void{
        //记录当前的播放动画类型
        this.action = action;

        //根据不同的动画类型播放动画;
        this.body.play(0,true,action);
        //获取动画大小的区域
        var bound:Laya.Rectangle = this.body.getBounds();
        //设置居中
        this.body.pos(-bound.width/2,-bound.height/2);
    }
}