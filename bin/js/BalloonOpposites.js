// 气球爆炸消失
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var BalloonOpposites = /** @class */ (function () {
    function BalloonOpposites(config) {
        this.middleY = 400;
        this.leftX1 = 250;
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/BalloonOpposites.atlas", type: Laya.Loader.ATLAS },
            { url: "BalloonOpposites/bg.jpg", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    BalloonOpposites.prototype.onload = function () {
        BalloonOpposites.balloonOppositesMain = new BalloonOppositesMain();
        BalloonOpposites.balloonOppositesMain.replayBtn.on(Laya.Event.CLICK, this, function () {
            if (BalloonOpposites.balloonOppositesMain.replayBtn.skin.indexOf("disabled") != -1) {
                return;
            }
            BalloonOpposites.balloonOppositesMain.replayBtn.skin = "common/replay-disabled.png";
            BalloonOpposites.init();
        });
        Laya.stage.addChild(BalloonOpposites.balloonOppositesMain);
        BalloonOpposites.init();
    };
    BalloonOpposites.initOpposites = function () {
        // 初始化反义词对应关系
        BalloonOpposites.ballWordMap = {};
        for (var i = 0; i < BalloonOpposites.gameConfig.leftWords.length; i++) {
            BalloonOpposites.ballWordMap[BalloonOpposites.gameConfig.leftWords[i]] = BalloonOpposites.gameConfig.rightWords[i];
            BalloonOpposites.ballWordMap[BalloonOpposites.gameConfig.rightWords[i]] = BalloonOpposites.gameConfig.leftWords[i];
        }
    };
    // 初始化
    BalloonOpposites.init = function () {
        BalloonOpposites.initOpposites();
        BalloonOpposites.initSideBall('left');
        BalloonOpposites.initSideBall('right');
        BalloonOpposites.gameChecking = false;
    };
    BalloonOpposites.initSideBall = function (side) {
        var length = BalloonOpposites.gameConfig.leftWords.length;
        var randArr = BalloonOpposites.getRandomArr(length);
        // for(let i = 0;i< BalloonOpposites.gameConfig.leftWords.length;i++) {
        for (var i = 0; i < 7; i++) {
            var randNum = randArr[i];
            var ball0 = BalloonOpposites.balloonOppositesMain.getChildByName(side + '-' + (i + 1) + '-0');
            var ball1 = BalloonOpposites.balloonOppositesMain.getChildByName(side + '-' + (i + 1) + '-1');
            // 配置到
            if (randNum) {
                // console.log(side+'-'+(i+1)+'-0');
                var _word = (side === 'left') ? BalloonOpposites.gameConfig.leftWords[randNum - 1]
                    : BalloonOpposites.gameConfig.rightWords[randNum - 1];
                ball0.visible = true;
                ball1.visible = false;
                var wordtxt = ball1.getChildByName('wordtxt');
                wordtxt.text = _word;
                ball0.on(Laya.Event.CLICK, this, this.ballTap, [ball0.name, wordtxt.text]);
            }
            else {
                //未配置，该隐藏
                ball0.visible = false;
                ball1.visible = false;
            }
        }
    };
    BalloonOpposites.ballTap = function (name, word) {
        if (BalloonOpposites.gameChecking)
            return;
        // console.log(BalloonOpposites.currentBallName+'-----'+name);
        var nameSplit = name.split('-');
        var name1 = nameSplit[0] + '-' + nameSplit[1] + '-' + '1';
        var ball0 = BalloonOpposites.balloonOppositesMain.getChildByName(name);
        var ball1 = BalloonOpposites.balloonOppositesMain.getChildByName(name1);
        ball0.visible = false;
        ball1.visible = true;
        if (!BalloonOpposites.currentBallName) {
            BalloonOpposites.currentBallName = name;
            BalloonOpposites.currentBallWord = word;
        }
        else {
            // 如果是同一侧的气球被点中，无反应
            if (BalloonOpposites.currentBallName.indexOf(nameSplit[0]) != -1) {
                ball0.visible = true;
                ball1.visible = false;
                return;
            }
            BalloonOpposites.gameChecking = true;
            Laya.SoundManager.playSound("res/audio/bo-click.mp3", 1);
            // console.log('word::::'+BalloonOpposites.currentBallWord+'-----'+word);
            if (BalloonOpposites.ballWordMap[word] === BalloonOpposites.currentBallWord) {
                //TODO 正确
                Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                Laya.timer.once(2000, this, function () {
                    var _nameSplit = BalloonOpposites.currentBallName.split('-');
                    var _name1 = _nameSplit[0] + '-' + _nameSplit[1] + '-' + '1';
                    var _ball0 = BalloonOpposites.balloonOppositesMain.getChildByName(BalloonOpposites.currentBallName);
                    var _ball1 = BalloonOpposites.balloonOppositesMain.getChildByName(_name1);
                    _ball0.visible = false;
                    _ball1.visible = false;
                    ball0.visible = false;
                    ball1.visible = false;
                    BalloonOpposites.currentBallName = '';
                    BalloonOpposites.currentBallWord = '';
                    BalloonOpposites.gameChecking = false;
                    if (BalloonOpposites.checkOver()) {
                        BalloonOpposites.balloonOppositesMain.replayBtn.skin = "common/replay-abled.png";
                    }
                });
            }
            else {
                BalloonOpposites.shake(ball1);
                Laya.timer.once(2000, this, function () {
                    ball0.visible = true;
                    ball1.visible = false;
                    BalloonOpposites.gameChecking = false;
                });
            }
        }
    };
    BalloonOpposites.checkOver = function () {
        var isOver = true;
        for (var i = 0; i < 7; i++) {
            var ball0 = BalloonOpposites.balloonOppositesMain.getChildByName('left-' + (i + 1) + '-0');
            var ball1 = BalloonOpposites.balloonOppositesMain.getChildByName('left-' + (i + 1) + '-1');
            // 左侧所有气球都隐藏了。游戏结束
            if (ball0.visible || ball1.visible) {
                isOver = false;
                break;
            }
        }
        return isOver;
    };
    // 返回随机数组
    BalloonOpposites.getRandomArr = function (length) {
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
    BalloonOpposites.shake = function (picture) {
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
    BalloonOpposites.currentBallName = ''; // 当前翻转的气球name
    BalloonOpposites.currentBallWord = ''; // 当前翻转的气球word
    BalloonOpposites.gameChecking = false; // 正在验证对错
    return BalloonOpposites;
}());
//# sourceMappingURL=BalloonOpposites.js.map