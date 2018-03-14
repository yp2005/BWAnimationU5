// 气球爆炸消失
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitBalloon {
    public static hitBalloonMain: HitBalloonMain; // 拍气球主界面
    public static currentBalloon: Balloon; // 当前炸开的气球
    public static finishedWordsNumber: number = 0;
    public static gameConfig: any; // 游戏配置
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                words: [
                    {word: "horse", picture: "horse.png"},
                    {word: "dog", picture: "dog.png"},
                    {word: "fish", picture: "fish.png"},
                    {word: "cat", picture: "cat.png"},
                    {word: "mouse", picture: "mouse.png"},
                    {word: "bird", picture: "bird.png"} 
                ]
            };
        }
        HitBalloon.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/HitBalloon.atlas", type: Laya.Loader.ATLAS},
            {url: "HitBalloon/mainBG.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        HitBalloon.hitBalloonMain = new HitBalloonMain();
        HitBalloon.hitBalloonMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitBalloon.hitBalloonMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitBalloon.hitBalloonMain);
        HitBalloon.hitBalloonMain.replayBtn.visible = false;
    }

    // 游戏开始
    private gameStart() {
        HitBalloon.hitBalloonMain.showSetting(false);
        HitBalloon.hitBalloonMain.replayBtn.visible = false;
        HitBalloon.hitBalloonMain.startBtn.visible = false;
        this.init();  
    }

    // 初始化
    private init() {
        let balloons: Balloon[] = new Array<Balloon>();
        let pictures: Picture[] = new Array<Picture>();
        for(let word of HitBalloon.gameConfig.words) {
            let balloon = new Balloon(word.word);
            balloons.push(balloon);
            let picture = new Picture(word.word, word.picture);
            pictures.push(picture); 
        }
        HitBalloon.hitBalloonMain.addElement(balloons, pictures);
    }
}
