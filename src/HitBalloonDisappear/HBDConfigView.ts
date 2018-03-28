// 配置界面
class HBDConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private textInput: Laya.TextInput; // 输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        let text = "";
        for(let word of HitBalloonDisappear.gameConfig.words) {
            if(text == "") {
                text = word.word + ":" + word.picture;
            }
            else {
                text += "," + word.word + ":" + word.picture;
            }  
        }
        this.textInput.text = text;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        HitBalloonDisappear.hitBalloonDisappearMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        let texts = this.textInput.text.split(",");
        if(texts.length < 1 || texts.length > 8) {
            HitBalloonDisappear.hitBalloonDisappearMain.showTip("单词个数在1-8之间！");
            return;
        }
        let words = [];
        for(let text of texts) {
            let textSp = text.split(":");
            if(text == "" || textSp.length != 2 || textSp[0] == "" || textSp[1] == "") {
                 HitBalloonDisappear.hitBalloonDisappearMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            words.push({
                word: textSp[0],
                picture: textSp[1]
            });
        }
        HitBalloonDisappear.gameConfig.words = words;
        HitBalloonDisappear.hitBalloonDisappearMain.showTip("提交成功！");
        this.hide();
    }
}