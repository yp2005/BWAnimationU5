// 配置界面
class FWConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private backgroundImg: Laya.TextInput; // 背景图输入框
    private type: Laya.TextInput; // 类型输入框
    private fontSize: Laya.TextInput; // 字号输入框
    private word: Laya.TextInput; // 单词输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.backgroundImg = configBox.getChildByName("backgroundImg") as Laya.TextInput;
        this.type = configBox.getChildByName("type") as Laya.TextInput;
        this.fontSize = configBox.getChildByName("fontSize") as Laya.TextInput;
        this.word = configBox.getChildByName("word") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        this.backgroundImg.text = FishAndWord.gameConfig.backgroundImg;
        this.type.text = FishAndWord.gameConfig.type;
        this.fontSize.text = FishAndWord.gameConfig.fontSize;
        let text = "";
        for(let word of FishAndWord.gameConfig.words) {
            if(text == "") {
                text = word;
            }
            else {
                text += "," + word;
            }  
        }
        this.word.text = text;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        if(!this.backgroundImg.text || !this.type.text || !this.fontSize.text || !this.word.text) {
            FishAndWord.fishAndWordMain.showTip("你还有配置项未填写！");
            return;
        }
        if(!/\d+/.test(this.fontSize.text)) {
            FishAndWord.fishAndWordMain.showTip("字号必须为正整数！");
            return;
        }
        let texts = this.word.text.split(",");
        if(texts.length < 1 || texts.length > 16) {
            FishAndWord.fishAndWordMain.showTip("单词个数在1-8之间！");
            return;
        }
        let words = [];
        for(let text of texts) {
            if(text == "") {
                 FishAndWord.fishAndWordMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            words.push(text);
        }
        FishAndWord.gameConfig = {
            gameModel: false,
            backgroundImg: this.backgroundImg.text,
            type: this.type.text, 
            words: words,
            fontSize: parseInt(this.fontSize.text) 
        };
        FishAndWord.fishAndWordMain.bg.skin = "FishAndWord/" + FishAndWord.gameConfig.backgroundImg;
        FishAndWord.fishAndWordMain.showTip("提交成功！");
        this.hide();
    }
}