// 配置界面
class HEConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private fontSize: Laya.TextInput; // 单词输入框
    private word: Laya.TextInput; // 单词输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.fontSize = configBox.getChildByName("fontSize") as Laya.TextInput;
        this.word = configBox.getChildByName("textInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        this.fontSize.text = HitEgg.gameConfig.fontSize || 30;
        let text = "";
        for(let word of HitEgg.gameConfig.words) {
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
        if(!this.fontSize.text) {
            HitEgg.hitEggMain.showTip("请输入字号！");
            return;
        }
        if(!this.word.text) {
            HitEgg.hitEggMain.showTip("请输入单词！");
            return;
        }
        if(!/^\d+$/.test(this.fontSize.text)) {
            HitEgg.hitEggMain.showTip("字号须为正整数！");
            return;
        }
        let texts = this.word.text.split(",");
        if(texts.length < 1 || texts.length > 12) {
            HitEgg.hitEggMain.showTip("单词个数在1-12之间！");
            return;
        }
        let words = [];
        for(let text of texts) {
            words.push(text);
        }
        HitEgg.gameConfig = {
            gameModel: false,
            fontSize: parseInt(this.fontSize.text), 
            words: words
        };
        HitEgg.hitEggMain.showTip("提交成功！");
        this.hide();
    }
}