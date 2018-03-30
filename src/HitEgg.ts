// 砸蛋游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitEgg {
    public static hitEggMain: HitEggMain; // 砸蛋游戏主界面
    public static gameConfig: any; // 游戏配置
    public static hitedNum: number = 0;
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                fontSize: 30, // 字号
                words: ["word", "good", "apple"]  
            };
        }
        HitEgg.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/HitEgg.atlas", type: Laya.Loader.ATLAS},
            {url: "HitEgg/mainBG.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        let text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
       Laya.timer.once(100, this, function() {
            HitEgg.hitEggMain = new HitEggMain();
            HitEgg.hitEggMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(HitEgg.hitEggMain);
            this.init(); 
       });
    }

    // 游戏开始
    private restart() {
        if(HitEgg.hitEggMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        HitEgg.hitEggMain.replayBtn.skin = "common/replay-disabled.png";
        HitEgg.hitEggMain.reset();
        this.init();
    }

    // 初始化
    private init() {
        // 根据配置的单词，生成所有的蛋
        let eggs: Egg[] = new Array<Egg>();
        for(let word of HitEgg.gameConfig.words) {
            let egg = new Egg(word);
            eggs.push(egg);
        }
        // 将蛋添加到游戏页面上
        HitEgg.hitEggMain.addElement(eggs);
    }
}
