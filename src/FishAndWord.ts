// 触摸小鱼游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class FishAndWord {
    public static fishAndWordMain: FishAndWordMain; // 触摸小鱼游戏主界面
    public static gameConfig: any; // 游戏配置
    // 单词位置集合，用于随机位置
    public static wordPositon: any[] = [{x: 62,y: 82}, {x: 90,y: 289}, {x: 56,y: 482}, {x: 298,y: 137}, {x: 265,y: 287},
                                        {x: 321,y: 433}, {x: 274,y: 586}, {x: 520,y: 148}, {x: 486,y: 307}, {x: 490,y: 522},
                                        {x: 690,y: 216}, {x: 653,y: 378}, {x: 701,y: 519}, {x: 799,y: 70}, {x: 867,y: 248},
                                        {x: 853,y: 440}];
    // 单词位置集合1，用于随机位置，长泡泡使用
    public static wordPositon1: any[] = [{x: 54,y: 123}, {x: 380,y: 174}, {x: 735,y: 129}, {x: 15,y: 266}, {x: 353,y: 315},
                                         {x: 724,y: 351}, {x: 96,y: 467}, {x: 435,y: 449}, {x: 748,y: 498}, {x: 348,y: 572}];
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                //hasTitle: true, // 是否有游戏标题
                backgroundImg: "bg-2.png", // 游戏背景图
                type: "bubble", // 单词背景图类型：fish、bubble、shell
                words: ["a","b","c","d"],
                fontSize: 30 // 字号，数字越大字越大
            };
        }
        FishAndWord.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/FishAndWord.atlas", type: Laya.Loader.ATLAS},
            {url: "FishAndWord/bg-2.png", type: Laya.Loader.IMAGE},
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
            FishAndWord.fishAndWordMain = new FishAndWordMain();
            Laya.stage.addChild(FishAndWord.fishAndWordMain);
            FishAndWord.fishAndWordMain.initWords(); 
        });
    }
}
