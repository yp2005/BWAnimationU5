// 气球爆炸消失
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class BalloonOpposites {
    public static balloonOppositesMain: BalloonOppositesMain; // 拍气球主界面
    public static currentBallName: string = ''; // 当前翻转的气球name
    public static currentBallWord: string = ''; // 当前翻转的气球word
    public static ballWordMap: any; // 反义词对应关系
    public static gameConfig: any; // 游戏配置
    public static gameChecking: boolean = false; // 正在验证对错
    public static leftPos:Array<any>;
    public static rightPos:Array<any>;

    private middleY:number = 400;
    private leftX1:number = 250; 
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                type: "balloon",
                typeNum: 14,
                leftWords: ["sad", "young", "ugly", "big", "empty", "good", "low"],
                rightWords: ["happy", "old", "beautiful", "small", "full", "bad", "high"]
            };
        }
        BalloonOpposites.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/BalloonOpposites.atlas", type: Laya.Loader.ATLAS},
            {url: "BalloonOpposites/bg.jpg", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        BalloonOpposites.leftPos = [
            {x:100,y:379},
            {x:186,y:182},
            {x:254,y:353},
            {x:19,y:207},
            {x:217,y:546},
            {x:34,y:548},
            {x:66,y:31},
        ];
        BalloonOpposites.rightPos = [
            {x:762,y:359},
            {x:643,y:189},
            {x:611,y:373},
            {x:818,y:176},
            {x:633,y:550},
            {x:825,y:541},
            {x:732,y:16},
        ];
        let text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function() {
            BalloonOpposites.balloonOppositesMain = new BalloonOppositesMain();
            BalloonOpposites.balloonOppositesMain.setting.zOrder = 10;
            BalloonOpposites.balloonOppositesMain.tip.zOrder = 10;
            BalloonOpposites.balloonOppositesMain.configBox.zOrder = 10;
            BalloonOpposites.balloonOppositesMain.replayBtn.zOrder = 0;
            BalloonOpposites.balloonOppositesMain.replayText.zOrder = 0;
            BalloonOpposites.balloonOppositesMain.ballbox.zOrder = 1;
            BalloonOpposites.balloonOppositesMain.replayBtn.on(Laya.Event.CLICK, this, function() {
                if(BalloonOpposites.balloonOppositesMain.replayBtn.skin.indexOf("disabled") != -1) {
                    return;
                }
                BalloonOpposites.balloonOppositesMain.replayBtn.skin = "common/replay-disabled.png";
                BalloonOpposites.balloonOppositesMain.replayBtn.zOrder = 0;
                BalloonOpposites.balloonOppositesMain.replayText.zOrder = 0;
                BalloonOpposites.init();
            });
            Laya.stage.addChild(BalloonOpposites.balloonOppositesMain);
            BalloonOpposites.init();
        });
    }

    private static initOpposites(){
        // 初始化反义词对应关系
        BalloonOpposites.ballWordMap = {};
        for(var i =0;i<BalloonOpposites.gameConfig.leftWords.length;i++){
            BalloonOpposites.ballWordMap[BalloonOpposites.gameConfig.leftWords[i]] = BalloonOpposites.gameConfig.rightWords[i];
            BalloonOpposites.ballWordMap[BalloonOpposites.gameConfig.rightWords[i]] = BalloonOpposites.gameConfig.leftWords[i];
        }
    }

    // 初始化
    public static init() {
        BalloonOpposites.initOpposites();
        BalloonOpposites.initSideBall('left');
        BalloonOpposites.initSideBall('right');
        BalloonOpposites.gameChecking = false;
    }

    private static initSideBall(side:string){
        let length = BalloonOpposites.gameConfig.leftWords.length;
        let randArr = BalloonOpposites.getRandomArr(length);
        let typeRan = BalloonOpposites.getRandomArr(BalloonOpposites.gameConfig.typeNum);
        for(let i = 0;i< length;i++) {
            let randNum = randArr[i];
            let _word = (side === 'left') ? BalloonOpposites.gameConfig.leftWords[randNum-1] 
                                                : BalloonOpposites.gameConfig.rightWords[randNum-1];
                                                
            let _pos = (side === 'left') ? BalloonOpposites.leftPos[i] : BalloonOpposites.rightPos[i];
                                                
            let randType = (randNum-1) % BalloonOpposites.gameConfig.typeNum;
            let ball = new BOBalloon(BalloonOpposites.gameConfig.type,typeRan[randType],_word,side+'-'+(i+1)+'-0');
            ball.setPos(_pos.x,_pos.y);
            ball.ball0.on(Laya.Event.CLICK,this,this.ballTap,[ball]);
            // ball.zOrder = 1;
            BalloonOpposites.balloonOppositesMain.ballbox.addChild(ball);
        }

        // for(let i = 0;i< 7;i++) {
        //     let randNum = randArr[i];
        //     let ball0 = BalloonOpposites.balloonOppositesMain.getChildByName(side+'-'+(i+1)+'-0') as Laya.Image;
        //     let ball1 = BalloonOpposites.balloonOppositesMain.getChildByName(side+'-'+(i+1)+'-1') as Laya.Image;
        //     // 配置到
        //     if(randNum){
        //         // console.log(side+'-'+(i+1)+'-0');
        //         let _word = (side === 'left') ? BalloonOpposites.gameConfig.leftWords[randNum-1] 
        //                                         : BalloonOpposites.gameConfig.rightWords[randNum-1];
        //         ball0.visible = true;
        //         ball1.visible = false;
        //         let wordtxt = ball1.getChildByName('wordtxt') as Laya.Text;
        //         wordtxt.text = _word;
                
        //         ball0.on(Laya.Event.CLICK,this,this.ballTap,[ball0.name, wordtxt.text]);
        //     }else{
        //         //未配置，该隐藏
        //         ball0.visible = false;
        //         ball1.visible = false;
        //     }

        //     // 改需求了，约等于重做，唉。。
        //     ball0.visible = false;
        //     ball1.visible = false;
        // }
    }

    private static ballTap(ball:BOBalloon){
        let name = ball.name;
        let word = ball.word.text;

        if(BalloonOpposites.gameChecking) return;
        // console.log(BalloonOpposites.currentBallName+'-----'+name);
        let nameSplit = name.split('-');
        let name1 = nameSplit[0]+'-'+nameSplit[1]+'-'+'1';
        let ball0 = ball.ball0;
        let ball1 = ball.ball1;
        let wordbg = ball.wordbg;
            ball0.visible = false;
            ball1.visible = true;
            wordbg.visible = true;
        if(!BalloonOpposites.currentBallName){
            BalloonOpposites.currentBallName = name;
            BalloonOpposites.currentBallWord = word;
            Laya.SoundManager.playSound("res/audio/bo-click.mp3", 1);
        }else{
            // 如果是同一侧的气球被点中，无反应
            if(BalloonOpposites.currentBallName.indexOf(nameSplit[0]) != -1){
                ball0.visible = true;
                ball1.visible = false;
                wordbg.visible = false;
                return;
            }

            BalloonOpposites.gameChecking = true;
                // Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);

            // console.log('word::::'+BalloonOpposites.currentBallWord+'-----'+word);
            if(BalloonOpposites.ballWordMap[word] === BalloonOpposites.currentBallWord){
                //TODO 正确
                Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                Laya.timer.once(2000, this, function(){
                    let _nameSplit = BalloonOpposites.currentBallName.split('-');
                    let _name1 = _nameSplit[0]+'-'+_nameSplit[1]+'-'+'1';
                    let _ball = BalloonOpposites.findBall(BalloonOpposites.currentBallName);
                    BalloonOpposites.balloonOppositesMain.ballbox.removeChild(_ball);
                    BalloonOpposites.balloonOppositesMain.ballbox.removeChild(ball);

                    // let _ball0 = BalloonOpposites.balloonOppositesMain.getChildByName(BalloonOpposites.currentBallName) as Laya.Image;
                    // let _ball1 = BalloonOpposites.balloonOppositesMain.getChildByName(_name1) as Laya.Image;
                    // _ball0.visible = false;
                    // _ball1.visible = false;
                    // ball0.visible = false;
                    // ball1.visible = false;
                    
                    BalloonOpposites.currentBallName = '';
                    BalloonOpposites.currentBallWord = '';
                    BalloonOpposites.gameChecking = false;
                    if(BalloonOpposites.checkOver()){
                        BalloonOpposites.balloonOppositesMain.replayBtn.zOrder = 100;
                        BalloonOpposites.balloonOppositesMain.replayText.zOrder = 100;
                        BalloonOpposites.balloonOppositesMain.replayBtn.skin = "common/replay-abled.png";
                    }
                });
            }else{
                BalloonOpposites.shake(ball);
                Laya.timer.once(2000, this, function(){
                    ball0.visible = true;
                    ball1.visible = false;
                    wordbg.visible = false;
                    BalloonOpposites.gameChecking = false;
                });
            }
        }
    }

    private static checkOver(){
        return BalloonOpposites.balloonOppositesMain.ballbox.numChildren == 0;
        // let isOver = true;
        // for(let i = 0;i< 7;i++) {
        //     let ball0 = BalloonOpposites.balloonOppositesMain.getChildByName('left-'+(i+1)+'-0') as Laya.Image;
        //     let ball1 = BalloonOpposites.balloonOppositesMain.getChildByName('left-'+(i+1)+'-1') as Laya.Image;
        //     // 左侧所有气球都隐藏了。游戏结束
        //     if(ball0.visible || ball1.visible){
        //         isOver = false;
        //         break;
        //     }
        // }
        // return isOver;
    }

    private static findBall(name:string){
        let ball = null;
        for(var i = 0;i<BalloonOpposites.balloonOppositesMain.ballbox.numChildren;i++){
            let _ball = BalloonOpposites.balloonOppositesMain.ballbox.getChildAt(i);
            if(_ball.name == name){
                ball = _ball;
                break;
            }
        }
        return ball;
    }
    
    // 返回随机数组
    private static getRandomArr(length:number = 0){
        let arr = [];
        for(var i = 0;i<length;i++){
            arr.push(i+1);
        }
        return arr.sort((a,b)=>{
            return Math.random()>.5 ? -1 : 1
        });
    }

    // 图片晃动
    private static shake(picture:BOBalloon) {
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
