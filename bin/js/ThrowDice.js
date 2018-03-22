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
        ThrowDice.throwDiceMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        ThrowDice.throwDiceMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(ThrowDice.throwDiceMain);
        ThrowDice.throwDiceMain.replayBtn.visible = false;
        ThrowDice.currentDice = new Dice();
        ThrowDice.currentDice.visible = false;
        ThrowDice.currentDice.pos(510, 400);
        Laya.stage.addChild(ThrowDice.currentDice);
        ThrowDice.currentDice.body.on(Laya.Event.CLICK, this, this.doThrow);
    };
    ThrowDice.prototype.doThrow = function () {
        if (ThrowDice.diceNum !== 6) {
            ThrowDice.currentDice.playAction('dice_throw');
            Laya.timer.once(2000, this, function () {
                ThrowDice.currentDice.playAction('dice_' + ThrowDice.diceArr[ThrowDice.diceNum]);
                var mask = ThrowDice.throwDiceMain.getChildByName('mask' + ThrowDice.diceArr[ThrowDice.diceNum]);
                mask.visible = false;
                ThrowDice.diceNum++;
            });
        }
    };
    // 游戏开始
    ThrowDice.prototype.gameStart = function () {
        ThrowDice.throwDiceMain.showSetting(false);
        ThrowDice.throwDiceMain.replayBtn.visible = false;
        ThrowDice.throwDiceMain.startBtn.visible = false;
        this.init();
    };
    // 初始化
    ThrowDice.prototype.init = function () {
        ThrowDice.diceArr = this.getRandomArr(6);
        ThrowDice.diceNum = 0;
        ThrowDice.gameChecking = false;
        ThrowDice.currentDice.visible = true;
    };
    // 返回随机数组
    ThrowDice.prototype.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    // 图片晃动
    ThrowDice.prototype.shake = function (picture) {
        Laya.SoundManager.playSound("res/audio/bo-fail.mp3", 1);
        var _x = picture.x;
        Laya.Tween.to(picture, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(picture, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(picture, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(picture, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(picture, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(picture, { x: _x }, 50, Laya.Ease.elasticInOut);
                        }));
                    }));
                }));
            }));
        }));
    };
    ThrowDice.gameChecking = false; // 正在验证对错
    ThrowDice.diceArr = [];
    ThrowDice.diceNum = 0; // 当前第几次
    return ThrowDice;
}());
//# sourceMappingURL=ThrowDice.js.map