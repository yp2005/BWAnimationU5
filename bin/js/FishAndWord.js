// 触摸小鱼游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var FishAndWord = /** @class */ (function () {
    function FishAndWord(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                //hasTitle: true, // 是否有游戏标题
                backgroundImg: "bg-2.png",
                type: "bubble",
                words: ["a", "b", "c", "d"],
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/FishAndWord.atlas", type: Laya.Loader.ATLAS },
            { url: "FishAndWord/bg-2.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    FishAndWord.prototype.onload = function () {
        FishAndWord.fishAndWordMain = new FishAndWordMain();
        FishAndWord.fishAndWordMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(FishAndWord.fishAndWordMain);
    };
    // 游戏开始
    FishAndWord.prototype.gameStart = function () {
        FishAndWord.fishAndWordMain.showSetting(false);
        FishAndWord.fishAndWordMain.startBtn.visible = false;
        this.init();
    };
    // 初始化
    FishAndWord.prototype.init = function () {
        // 根据类型不同使用不同的单词背景图
        if (FishAndWord.gameConfig.type == "fish") {
            var fish = new Array();
            for (var _i = 0, _a = FishAndWord.gameConfig.words; _i < _a.length; _i++) {
                var word = _a[_i];
                var f = new Fish1(word);
                fish.push(f);
            }
            FishAndWord.fishAndWordMain.addElement(fish);
        }
        else if (FishAndWord.gameConfig.type == "bubble") {
            var bubbles = new Array();
            for (var _b = 0, _c = FishAndWord.gameConfig.words; _b < _c.length; _b++) {
                var word = _c[_b];
                var bubble = new Bubble(word);
                bubbles.push(bubble);
            }
            FishAndWord.fishAndWordMain.addElement(null, bubbles);
        }
        else if (FishAndWord.gameConfig.type == "shell") {
            var shells = new Array();
            for (var _d = 0, _e = FishAndWord.gameConfig.words; _d < _e.length; _d++) {
                var word = _e[_d];
                var shell = new Shell(word);
                shells.push(shell);
            }
            FishAndWord.fishAndWordMain.addElement(null, null, shells);
        }
    };
    FishAndWord.wordPositon = [{ x: 62, y: 82 }, { x: 90, y: 289 }, { x: 56, y: 482 }, { x: 298, y: 137 }, { x: 265, y: 287 },
        { x: 321, y: 433 }, { x: 274, y: 586 }, { x: 520, y: 148 }, { x: 486, y: 307 }, { x: 490, y: 522 },
        { x: 690, y: 216 }, { x: 653, y: 378 }, { x: 701, y: 519 }, { x: 799, y: 70 }, { x: 867, y: 248 },
        { x: 853, y: 440 }];
    return FishAndWord;
}());
//# sourceMappingURL=FishAndWord.js.map