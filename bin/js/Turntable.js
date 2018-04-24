// 气球爆炸消失
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var Turntable = /** @class */ (function () {
    function Turntable(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                words: ["sad", "young", "ugly", "big", "empty", "good", "low"],
                pics: ["bomb.png"],
                fontSize: "35"
            };
        }
        Turntable.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Turntable.atlas", type: Laya.Loader.ATLAS },
            { url: "Turntable/bg.jpg", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    Turntable.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            Turntable.turntableMain = new TurntableMain();
            Turntable.turntableMain.replayBtn.on(Laya.Event.CLICK, this, function () {
                if (Turntable.turntableMain.replayBtn.skin.indexOf("disabled") != -1) {
                    return;
                }
                Turntable.turntableMain.replayBtn.skin = "common/replay-disabled.png";
                Turntable.init();
            });
            Laya.stage.addChild(Turntable.turntableMain);
            Turntable.init();
        });
    };
    // 初始化
    Turntable.init = function () {
        this.initTable();
        Turntable.gameChecking = false;
        Turntable.turntableMain.table.visible = true;
        Turntable.turntableMain.stop.visible = true;
        // Turntable.turntableMain.startTable();
    };
    Turntable.initTable = function () {
        Turntable.turntableMain.table.rotation = 0;
        // 清空
        Turntable.turntableMain.table.removeChildren(0, Turntable.turntableMain.table.numChildren);
        var wordLength = Turntable.gameConfig.words.length;
        var picLength = Turntable.gameConfig.pics.length;
        var totalLength = wordLength + picLength;
        Turntable.randomTurn = Turntable.getRandomArr(totalLength);
        Turntable.currentTurn = 0;
        console.log(JSON.stringify(Turntable.randomTurn));
        Turntable.turntableMain.table.skin = 'Turntable/table' + totalLength + '.png';
        var randArr = Turntable.getRandomArr(totalLength);
        for (var i = 0; i < randArr.length; i++) {
            var _child = null;
            // 单词
            if (i < wordLength) {
                _child = new Laya.Text();
                _child.font = 'FF';
                _child.width = 134;
                _child.height = 44;
                _child.fontSize = parseInt(Turntable.gameConfig.fontSize);
                _child.bold = true;
                _child.align = 'center';
                _child.pivotX = 67;
                // _child.pivotX = 22;
                _child.text = Turntable.gameConfig.words[i];
            }
            else {
                _child = new Laya.Image("Turntable/" + Turntable.gameConfig.pics[i - wordLength]);
                _child.pivotX = _child.width / 2;
            }
            var randi = randArr[i] - 1;
            _child.rotation = (360 / totalLength) * randi;
            _child.x = 302 + Math.sin((2 * Math.PI) * (randi / totalLength)) * 250;
            _child.y = 301 - Math.cos((2 * Math.PI) * (randi / totalLength)) * 250;
            Turntable.turntableMain.table.addChild(_child);
        }
    };
    // 返回随机数组
    Turntable.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    Turntable.gameChecking = false; // 正在转
    Turntable.currentTurn = 0; // 当前转到第几个数
    Turntable.randomTurn = []; // 转盘转中顺序
    return Turntable;
}());
//# sourceMappingURL=Turntable.js.map