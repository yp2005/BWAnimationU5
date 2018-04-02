// 砸蛋游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitEgg = /** @class */ (function () {
    function HitEgg(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                fontSize: 30,
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitEgg.atlas", type: Laya.Loader.ATLAS },
            { url: "HitEgg/mainBG.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitEgg.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            HitEgg.hitEggMain = new HitEggMain();
            HitEgg.hitEggMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(HitEgg.hitEggMain);
            this.init();
        });
    };
    // 游戏开始
    HitEgg.prototype.restart = function () {
        if (HitEgg.hitEggMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        HitEgg.hitEggMain.replayBtn.skin = "common/replay-disabled.png";
        HitEgg.hitEggMain.reset();
        this.init();
    };
    // 初始化
    HitEgg.prototype.init = function () {
        // 根据配置的单词，生成所有的蛋
        var eggs = new Array();
        for (var _i = 0, _a = HitEgg.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            var egg = new Egg(word);
            eggs.push(egg);
        }
        // 将蛋添加到游戏页面上
        HitEgg.hitEggMain.addElement(eggs);
    };
    HitEgg.hitedNum = 0;
    return HitEgg;
}());
//# sourceMappingURL=HitEgg.js.map