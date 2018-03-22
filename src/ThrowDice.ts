// 气球爆炸消失
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class ThrowDice {
    public static throwDiceMain: ThrowDiceMain; // 主界面
    public static currentDice: Dice; // 
    public static gameConfig: any; // 游戏配置
    public static gameChecking: boolean = false; // 正在验证对错
    public static diceArr: any = [];
    public static diceNum: number = 0; // 当前第几次
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                leftWords: ["sad", "young", "ugly", "big", "empty", "good", "low"],
                rightWords: ["happy", "old", "beautiful", "small", "full", "bad", "high"]
            };
        }
        ThrowDice.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/ThrowDice.atlas", type: Laya.Loader.ATLAS},
            {url: "ThrowDice/bg1.png", type: Laya.Loader.IMAGE},
            {url: "ThrowDice/bg2.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        ThrowDice.throwDiceMain = new ThrowDiceMain();
        ThrowDice.throwDiceMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        ThrowDice.throwDiceMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(ThrowDice.throwDiceMain);
        ThrowDice.throwDiceMain.replayBtn.visible = false;

        ThrowDice.currentDice = new Dice();
        ThrowDice.currentDice.visible = false;
        ThrowDice.currentDice.pos(510,400);

        Laya.stage.addChild(ThrowDice.currentDice);
        
        ThrowDice.currentDice.body.on(Laya.Event.CLICK,this,this.doThrow);
    }

    doThrow(){
        if(ThrowDice.diceNum !== 6){
            ThrowDice.currentDice.playAction('dice_throw');
            Laya.SoundManager.playSound("res/audio/dice.mp3", 1);
            Laya.timer.once(2000,this,function(){
                ThrowDice.currentDice.playAction('dice_'+ThrowDice.diceArr[ThrowDice.diceNum]);
                let mask = ThrowDice.throwDiceMain.getChildByName('mask'+ThrowDice.diceArr[ThrowDice.diceNum]) as Laya.Image;
                mask.visible = false;
                ThrowDice.diceNum++;
            })
        }
    }

    // 游戏开始
    private gameStart() {
        ThrowDice.throwDiceMain.showSetting(false);
        ThrowDice.throwDiceMain.replayBtn.visible = false;
        ThrowDice.throwDiceMain.startBtn.visible = false;
        this.init();  
    }

    // 初始化
    private init() {
        ThrowDice.diceArr = this.getRandomArr(6);
        ThrowDice.diceNum = 0;
        ThrowDice.gameChecking = false;
        ThrowDice.currentDice.visible = true;
    }
    
    // 返回随机数组
    public getRandomArr(length:number = 0){
        let arr = [];
        for(var i = 0;i<length;i++){
            arr.push(i+1);
        }
        return arr.sort((a,b)=>{
            return Math.random()>.5 ? -1 : 1
        });
    }

    // 图片晃动
    private shake(picture:Laya.Image) {
        Laya.SoundManager.playSound("res/audio/bo-fail.mp3", 1);
        let _x = picture.x;
        Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
            Laya.Tween.to(picture, {x:_x+15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                    Laya.Tween.to(picture, {x:_x+15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                        Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                            Laya.Tween.to(picture, {x:_x}, 50, Laya.Ease.elasticInOut)
                        }))
                    } ))
                }))
            }))
        }));
    }
}
