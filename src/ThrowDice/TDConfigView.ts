// 配置界面
class TDConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private bgInput: Laya.TextInput; // 输入框
    private picInput: Laya.TextInput; // 输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.bgInput = configBox.getChildByName("bgInput") as Laya.TextInput;
        this.picInput = configBox.getChildByName("picInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        let text = ThrowDice.gameConfig.pics.join(",");
        this.bgInput.text = ThrowDice.gameConfig.bg;
        this.picInput.text = text;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        ThrowDice.throwDiceMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        let bg = this.bgInput.text;
        let texts = this.picInput.text.split(",");
        if(texts.length !== 6) {
            ThrowDice.throwDiceMain.showTip("底图数只能为6个！");
            return;
        }
        ThrowDice.gameConfig.bg = bg;
        ThrowDice.gameConfig.pics = texts;
        ThrowDice.throwDiceMain.changeBg(bg);
        ThrowDice.throwDiceMain.showTip("提交成功！");
        this.hide();
    }
}