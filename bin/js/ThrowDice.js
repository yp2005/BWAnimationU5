// 气球爆炸消失
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var ThrowDice = /** @class */ (function () {
    function ThrowDice(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                bg: "bg1.png",
                pics: ["pic-1-1.png", "pic-1-2.png", "pic-1-3.png", "pic-1-4.png", "pic-1-5.png", "pic-1-6.png"]
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ThrowDice.atlas", type: Laya.Loader.ATLAS },
            { url: "ThrowDice/bg1.png", type: Laya.Loader.IMAGE },
            { url: "ThrowDice/bg2.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    ThrowDice.prototype.onload = function () {
        ThrowDice.throwDiceMain = new ThrowDiceMain();
        ThrowDice.throwDiceMain.replayBtn.on(Laya.Event.CLICK, this, function () {
            if (ThrowDice.throwDiceMain.replayBtn.skin.indexOf("disabled") != -1) {
                return;
            }
            ThrowDice.throwDiceMain.replayBtn.skin = "common/replay-disabled.png";
            ThrowDice.init();
        });
        Laya.stage.addChild(ThrowDice.throwDiceMain);
        ThrowDice.currentDice = new Dice();
        ThrowDice.currentDice.visible = false;
        ThrowDice.currentDice.pos(510, 400);
        Laya.stage.addChild(ThrowDice.currentDice);
        ThrowDice.currentDice.body.on(Laya.Event.CLICK, this, this.doThrow);
        // ThrowDice.throwDiceMain.changeStatus(false);
        ThrowDice.init();
    };
    ThrowDice.prototype.doThrow = function () {
        if (ThrowDice.diceNum !== 6) {
            ThrowDice.currentDice.body.off(Laya.Event.CLICK, this, this.doThrow);
            ThrowDice.currentDice.playAction('dice_throw');
            Laya.SoundManager.playSound("res/audio/dice.mp3", 1);
            Laya.timer.once(2000, this, function () {
                ThrowDice.currentDice.playAction('dice_' + ThrowDice.diceArr[ThrowDice.diceNum]);
                var mask = ThrowDice.throwDiceMain.getChildByName('mask' + ThrowDice.diceArr[ThrowDice.diceNum]);
                mask.visible = false;
                ThrowDice.diceNum++;
                if (ThrowDice.diceNum == 6) {
                    ThrowDice.throwDiceMain.replayBtn.skin = "common/replay-abled.png";
                }
                ThrowDice.currentDice.body.on(Laya.Event.CLICK, this, this.doThrow);
            });
        }
    };
    // 初始化
    ThrowDice.init = function () {
        ThrowDice.throwDiceMain.changeBg(ThrowDice.gameConfig.bg);
        ThrowDice.throwDiceMain.changePics(ThrowDice.gameConfig.pics);
        if (ThrowDice.gameConfig.bg === 'bg2.png') {
            ThrowDice.currentDice.pos(310, 400);
        }
        else {
            ThrowDice.currentDice.pos(510, 400);
        }
        ThrowDice.throwDiceMain.changeStatus(true);
        ThrowDice.diceArr = ThrowDice.getRandomArr(6);
        ThrowDice.diceNum = 0;
        ThrowDice.gameChecking = false;
        ThrowDice.currentDice.visible = true;
    };
    // 返回随机数组
    ThrowDice.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    ThrowDice.gameChecking = false; // 正在验证对错
    ThrowDice.diceArr = [];
    ThrowDice.diceNum = 0; // 当前第几次
    return ThrowDice;
}());
//# sourceMappingURL=ThrowDice.js.map