// 气球爆炸消失
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class MulTouch {
    public static mulTouchMain: MulTouchMain; // 主界面
    public static gameConfig: any; // 游戏配置
    public static gameChecking: boolean = false; // 正在验证对错
    public static leftWords: any = [];
    public static rightWords: any = [];
    public static allDom:any = [];
    public static allWords:any = [];
    public static soundRandom:any = [];
    public static wordContext:number = 0;
    private static wordOk:boolean = false;
    private static imageOk:boolean = false;
    private static currentWord:Laya.Image;
    private static currentImage:Laya.Image;
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
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
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/MulTouch.atlas", type: Laya.Loader.ATLAS},
            {url: "MulTouch/bg.png", type: Laya.Loader.IMAGE},
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
            MulTouch.mulTouchMain = new MulTouchMain();
            MulTouch.mulTouchMain.replayBtn.on(Laya.Event.CLICK, this, function() {
                if(MulTouch.mulTouchMain.replayBtn.skin.indexOf("disabled") != -1) {
                    return;
                }
                MulTouch.mulTouchMain.replayBtn.skin = "common/replay-disabled.png";
                MulTouch.init();
            });
            Laya.stage.addChild(MulTouch.mulTouchMain);

            MulTouch.init();
        });
    }

    // 初始化
    public static init() {
        MulTouch.wordContext = 0;
        MulTouch.gameChecking = false;
        MulTouch.mulTouchMain.mainbox.removeChildren();
        MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
        MulTouch.mulTouchMain.replayBtn.skin = "common/replay-disabled.png";

        this.initWords();
    }

    // 初始化单词
    public static initWords() { 
        let totalY = 600;
        let leftLength = MulTouch.gameConfig.leftWords.length;
        let rightLength = MulTouch.gameConfig.rightWords.length;
        let leftHeight = totalY/leftLength;
        let rightHeight = totalY/rightLength;
        let textImgRandom = MulTouch.getRandomArr(4);

        // 初始化左边
        let arr = MulTouch.getRandomArr(leftLength);
        let arr2 = MulTouch.getRandomArr(leftLength);
        for(let i = 0; i< leftLength;i++){
            let img = new Laya.Image("MulTouch/"+MulTouch.gameConfig.leftWords[arr[i]-1]+".png");
            img.x = 50;
            // img.x = 836;
            img.y = leftHeight * i + (leftHeight-img.height)/2;
                img.autoSize = true;
            img.on(Laya.Event.CLICK,this,this.touchImage,[img,false]);

            let textimg = new Laya.Image("MulTouch/text"+textImgRandom[0]+".png");
            textimg.x = 280;
            textimg.y = leftHeight * i + (leftHeight-textimg.height)/2;
                textimg.autoSize = true;
            let text = new Laya.Text();
            text.text = MulTouch.gameConfig.leftWords[arr2[i]-1];
            text.width = 160;
            text.align = "center";
            text.valign = "top";
            text.color = "#fff";
            text.fontSize = 30;
            text.x = 6;
            text.y = 15;
            textimg.addChild(text);
            textimg.on(Laya.Event.CLICK,this,this.touchImage,[textimg,true]);

            MulTouch.mulTouchMain.mainbox.addChild(img);
            MulTouch.mulTouchMain.mainbox.addChild(textimg);
            MulTouch.allWords.push(MulTouch.gameConfig.leftWords[i]);
        }

        // 初始化右边
        arr = MulTouch.getRandomArr(rightLength);
        arr2 = MulTouch.getRandomArr(rightLength);
        for(let i = 0; i< rightLength;i++){
            let img = new Laya.Image("MulTouch/"+MulTouch.gameConfig.rightWords[arr[i]-1]+".png");
            img.x = 50+512;
            img.y = rightHeight * i + (rightHeight-img.height)/2;
                img.autoSize = true;
            img.on(Laya.Event.CLICK,this,this.touchImage,[img,false]);

            let textimg = new Laya.Image("MulTouch/text"+textImgRandom[1]+".png");
            textimg.x = 280+512;
            textimg.y = rightHeight * i + (rightHeight-textimg.height)/2;
                textimg.autoSize = true;
            let text = new Laya.Text();
            text.text = MulTouch.gameConfig.rightWords[arr2[i]-1];
            text.width = 160;
            text.align = "center";
            text.valign = "top";
            text.color = "#fff";
            text.fontSize = 30;
            text.x = 6;
            text.y = 15;
            textimg.addChild(text);
            textimg.on(Laya.Event.CLICK,this,this.touchImage,[textimg,true]);

            MulTouch.mulTouchMain.mainbox.addChild(img);
            MulTouch.mulTouchMain.mainbox.addChild(textimg);
            MulTouch.allWords.push(MulTouch.gameConfig.rightWords[i]);
        }

        MulTouch.soundRandom = MulTouch.getRandomArr(MulTouch.allWords.length);
    }

    private static touchImage(picture:Laya.Image,isword:boolean){
        if(!MulTouch.gameChecking) return;

        let word = MulTouch.allWords[(MulTouch.soundRandom[MulTouch.wordContext]-1)];
        let _word = "";
        if(isword){
            let text = picture.getChildAt(0) as Laya.Text;
            _word = text.text;
        }else{
            let skinsplit = picture.skin.split("/");
            let png = skinsplit[skinsplit.length-1];
            _word = png.substring(0,png.length-4);
            // console.log("_word:::"+_word);
        }

        if(word == _word){
            if(isword && !this.wordOk){
                Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                picture.width = picture.width+20;
                let addheight = 20 * picture.height / picture.width;
                picture.height = picture.height + addheight;
                picture.x = picture.x - 10;
                picture.y = picture.y - addheight/2;
                this.currentWord = picture;
                this.wordOk = true;
            }
            if(!isword && !this.imageOk){
                Laya.SoundManager.playSound("res/audio/bo-success.mp3", 1);
                picture.width = picture.width+20;
                let addheight = 20 * picture.height / picture.width;
                picture.height = picture.height + addheight;
                picture.x = picture.x - 10;
                picture.y = picture.y - addheight/2;
                this.currentImage = picture;
                this.imageOk = true;
            }

            if(this.wordOk && this.imageOk){
                this.currentImage.removeSelf();
                this.currentWord.removeSelf();
                MulTouch.wordContext++;
                MulTouch.gameChecking = false;
                MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
                this.wordOk = false;
                this.imageOk = false;
            }else{
                // MulTouch.gameChecking = true;
                // MulTouch.mulTouchMain.speak.skin = "MulTouch/sound-disabled.png";
            }

            if(MulTouch.soundRandom.length == MulTouch.wordContext){
                MulTouch.mulTouchMain.replayBtn.skin = "common/replay-abled.png";
            }
        }else{
            this.shake(picture);
        }
    }

    // 返回随机数组
    public static getRandomArr(length:number = 0){
        let arr = [];
        for(var i = 0;i<length;i++){
            arr.push(i+1);
        }
        return arr.sort((a,b)=>{
            return Math.random()>.5 ? -1 : 1
        });
    }

    // 图片晃动
    private static shake(picture:Laya.Image) {
        Laya.SoundManager.playSound("res/audio/bo-fail.mp3", 1);
        let _x = picture.x;
        Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
            Laya.Tween.to(picture, {x:_x+15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                    Laya.Tween.to(picture, {x:_x+15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                        Laya.Tween.to(picture, {x:_x-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                            Laya.Tween.to(picture, {x:_x}, 50, Laya.Ease.elasticInOut)
                        }))
                    } ))
                }))
            }))
        }));
    }
}
