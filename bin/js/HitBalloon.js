// 气球爆炸消失
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitBalloon = /** @class */ (function () {
    function HitBalloon(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                words: [
                    { word: "horse", picture: "horse.png" },
                    { word: "dog", picture: "dog.png" },
                    { word: "fish", picture: "fish.png" },
                    { word: "cat", picture: "cat.png" },
                    { word: "mouse", picture: "mouse.png" },
                    { word: "bird", picture: "bird.png" }
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitBalloon.atlas", type: Laya.Loader.ATLAS },
            { url: "HitBalloon/mainBG.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitBalloon.prototype.onload = function () {
        HitBalloon.hitBalloonMain = new HitBalloonMain();
        HitBalloon.hitBalloonMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitBalloon.hitBalloonMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitBalloon.hitBalloonMain);
        HitBalloon.hitBalloonMain.replayBtn.visible = false;
    };
    // 游戏开始
    HitBalloon.prototype.gameStart = function () {
        HitBalloon.hitBalloonMain.showSetting(false);
        HitBalloon.hitBalloonMain.replayBtn.visible = false;
        HitBalloon.hitBalloonMain.startBtn.visible = false;
        this.init();
    };
    // 初始化
    HitBalloon.prototype.init = function () {
        var balloons = new Array();
        var pictures = new Array();
        for (var _i = 0, _a = HitBalloon.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            var balloon = new Balloon(word.word);
            balloons.push(balloon);
            var picture = new Picture(word.word, word.picture);
            pictures.push(picture);
        }
        HitBalloon.hitBalloonMain.addElement(balloons, pictures);
    };
    HitBalloon.finishedWordsNumber = 0;
    return HitBalloon;
}());
//# sourceMappingURL=HitBalloon.js.map