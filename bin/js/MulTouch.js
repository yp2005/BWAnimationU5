// 气球爆炸消失
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var MulTouch = /** @class */ (function () {
    function MulTouch(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                leftWords: ["tigger", "monkey", "snake", "hippo", "crocodile", "elephant", "giraffe"],
                rightWords: ["tigers", "monkeys", "snakes", "hippos", "crocodiles", "elephants", "giraffes"]
            };
        }
        MulTouch.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/MulTouch.atlas", type: Laya.Loader.ATLAS },
            { url: "MulTouch/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    MulTouch.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            MulTouch.mulTouchMain = new MulTouchMain();
            MulTouch.mulTouchMain.replayBtn.on(Laya.Event.CLICK, this, function () {
                if (MulTouch.mulTouchMain.replayBtn.skin.indexOf("disabled") != -1) {
                    return;
                }
                MulTouch.mulTouchMain.replayBtn.skin = "common/replay-disabled.png";
                MulTouch.init();
            });
            Laya.stage.addChild(MulTouch.mulTouchMain);
            MulTouch.init();
        });
    };
    // 初始化
    MulTouch.init = function () {
        MulTouch.wordContext = 0;
        MulTouch.gameChecking = false;
        MulTouch.mulTouchMain.mainbox.removeChildren();
        MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
        MulTouch.mulTouchMain.replayBtn.skin = "common/replay-disabled.png";
        this.initWords();
    };
    // 初始化单词
    MulTouch.initWords = function () {
        MulTouch.allWords = [];
        var totalY = 600;
        var leftLength = MulTouch.gameConfig.leftWords.length;
        var rightLength = MulTouch.gameConfig.rightWords.length;
        var leftHeight = totalY / leftLength;
        var rightHeight = totalY / rightLength;
        var textImgRandom = MulTouch.getRandomArr(4);
        // 初始化左边
        var arr = MulTouch.getRandomArr(leftLength);
        var arr2 = MulTouch.getRandomArr(leftLength);
        for (var i = 0; i < leftLength; i++) {
            var img = new Laya.Image("MulTouch/" + MulTouch.gameConfig.leftWords[arr[i] - 1] + ".png");
            img.x = 50;
            // img.x = 836;
            img.y = leftHeight * i + (leftHeight - img.height) / 2;
            img.autoSize = true;
            img.on(Laya.Event.CLICK, this, this.touchImage, [img, false]);
            var textimg = new Laya.Image("MulTouch/text" + textImgRandom[0] + ".png");
            textimg.x = 280;
            textimg.y = leftHeight * i + (leftHeight - textimg.height) / 2;
            textimg.autoSize = true;
            var text = new Laya.Text();
            text.text = MulTouch.gameConfig.leftWords[arr2[i] - 1];
            text.width = 160;
            text.align = "center";
            text.valign = "top";
            text.color = "#fff";
            text.fontSize = 30;
            text.x = 6;
            text.y = 15;
            textimg.addChild(text);
            textimg.on(Laya.Event.CLICK, this, this.touchImage, [textimg, true]);
            MulTouch.mulTouchMain.mainbox.addChild(img);
            MulTouch.mulTouchMain.mainbox.addChild(textimg);
            // MulTouch.allWords.push(MulTouch.gameConfig.leftWords[i]);
            if (!MulTouch.allWords.includes(MulTouch.gameConfig.leftWords[i])) {
                MulTouch.allWords.push(MulTouch.gameConfig.leftWords[i]);
            }
        }
        // 初始化右边
        arr = MulTouch.getRandomArr(rightLength);
        arr2 = MulTouch.getRandomArr(rightLength);
        for (var i = 0; i < rightLength; i++) {
            var img = new Laya.Image("MulTouch/" + MulTouch.gameConfig.rightWords[arr[i] - 1] + ".png");
            img.x = 50 + 512;
            img.y = rightHeight * i + (rightHeight - img.height) / 2;
            img.autoSize = true;
            img.on(Laya.Event.CLICK, this, this.touchImage, [img, false]);
            var textimg = new Laya.Image("MulTouch/text" + textImgRandom[1] + ".png");
            textimg.x = 280 + 512;
            textimg.y = rightHeight * i + (rightHeight - textimg.height) / 2;
            textimg.autoSize = true;
            var text = new Laya.Text();
            text.text = MulTouch.gameConfig.rightWords[arr2[i] - 1];
            text.width = 160;
            text.align = "center";
            text.valign = "top";
            text.color = "#fff";
            text.fontSize = 30;
            text.x = 6;
            text.y = 15;
            textimg.addChild(text);
            textimg.on(Laya.Event.CLICK, this, this.touchImage, [textimg, true]);
            MulTouch.mulTouchMain.mainbox.addChild(img);
            MulTouch.mulTouchMain.mainbox.addChild(textimg);
            // MulTouch.allWords.push(MulTouch.gameConfig.rightWords[i]);
            if (!MulTouch.allWords.includes(MulTouch.gameConfig.rightWords[i])) {
                MulTouch.allWords.push(MulTouch.gameConfig.rightWords[i]);
            }
        }
        MulTouch.soundRandom = MulTouch.getRandomArr(MulTouch.allWords.length);
    };
    MulTouch.touchImage = function (picture, isword) {
        // if(!MulTouch.gameChecking) return;
        var word = MulTouch.allWords[(MulTouch.soundRandom[MulTouch.wordContext - 1] - 1)];
        var _word = "";
        if (isword) {
            var text = picture.getChildAt(0);
            _word = text.text;
        }
        else {
            var skinsplit = picture.skin.split("/");
            var png = skinsplit[skinsplit.length - 1];
            _word = png.substring(0, png.length - 4);
            // console.log("_word:::"+_word);
        }
        if (word == _word) {
            if (picture.x < 500) {
                // 左边
                if (isword && !this.leftwordOk) {
                    Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                    var addheight = 20 * picture.height / picture.width;
                    picture.width = picture.width + 20;
                    picture.height = picture.height + addheight;
                    picture.x = picture.x - 10;
                    picture.y = picture.y - addheight / 2;
                    this.currentLeftWord = picture;
                    this.leftwordOk = true;
                }
                if (!isword && !this.leftimageOk) {
                    Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                    var addheight = 20 * picture.height / picture.width;
                    picture.width = picture.width + 20;
                    picture.height = picture.height + addheight;
                    picture.x = picture.x - 10;
                    picture.y = picture.y - addheight / 2;
                    this.currentLeftImage = picture;
                    this.leftimageOk = true;
                }
            }
            else {
                // 右边
                if (isword && !this.rightwordOk) {
                    Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                    picture.width = picture.width + 20;
                    var addheight = 20 * picture.height / picture.width;
                    picture.height = picture.height + addheight;
                    picture.x = picture.x - 10;
                    picture.y = picture.y - addheight / 2;
                    this.currentRightWord = picture;
                    this.rightwordOk = true;
                }
                if (!isword && !this.rightimageOk) {
                    Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                    picture.width = picture.width + 20;
                    var addheight = 20 * picture.height / picture.width;
                    picture.height = picture.height + addheight;
                    picture.x = picture.x - 10;
                    picture.y = picture.y - addheight / 2;
                    this.currentRightImage = picture;
                    this.rightimageOk = true;
                }
            }
            if (this.leftwordOk && this.leftimageOk) {
                this.currentLeftImage.removeSelf();
                this.currentLeftWord.removeSelf();
                // MulTouch.wordContext++;
                // MulTouch.gameChecking = false;
                // MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
                this.leftwordOk = false;
                this.leftimageOk = false;
            }
            if (this.rightwordOk && this.rightimageOk) {
                this.currentRightImage.removeSelf();
                this.currentRightWord.removeSelf();
                // MulTouch.wordContext++;
                // MulTouch.gameChecking = false;
                // MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
                this.rightwordOk = false;
                this.rightimageOk = false;
            }
            // if(MulTouch.soundRandom.length == MulTouch.wordContext){
            //     MulTouch.mulTouchMain.replayBtn.skin = "common/replay-abled.png";
            // }
        }
        else {
            this.shake(picture);
        }
    };
    // 返回随机数组
    MulTouch.getRandomArr = function (length) {
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
    MulTouch.shake = function (picture) {
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
    MulTouch.gameChecking = false; // 正在验证对错
    MulTouch.leftWords = [];
    MulTouch.rightWords = [];
    MulTouch.allDom = [];
    MulTouch.allWords = [];
    MulTouch.soundRandom = [];
    MulTouch.wordContext = 0;
    MulTouch.leftwordOk = false;
    MulTouch.leftimageOk = false;
    MulTouch.rightwordOk = false;
    MulTouch.rightimageOk = false;
    return MulTouch;
}());
//# sourceMappingURL=MulTouch.js.map