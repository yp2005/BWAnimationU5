// 配置界面
class TConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private wordInput: Laya.TextInput; // 输入框
    private picInput: Laya.TextInput; // 输入框
    private fontInput: Laya.TextInput; // 输入框
    private bgInput: Laya.TextInput; // 输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.wordInput = configBox.getChildByName("wordInput") as Laya.TextInput;
        this.picInput = configBox.getChildByName("picInput") as Laya.TextInput;
        this.fontInput = configBox.getChildByName("fontInput") as Laya.TextInput;
        this.bgInput = configBox.getChildByName("bgInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        this.wordInput.text = Turntable.gameConfig.words.join(",");
        this.picInput.text = Turntable.gameConfig.pics.join(",");
        this.fontInput.text = Turntable.gameConfig.fontSize;
        this.bgInput.text = Turntable.gameConfig.bg;
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
        let _map = {};
        let words = this.wordInput.text.split(",");
        let pics = this.picInput.text.split(",");
        let fontSize = this.fontInput.text;
        let bg = this.bgInput.text;
        let leftLength = words.length,rightLength = pics.length;
        let total = leftLength + rightLength;
        if(!/\d+/.test(fontSize)) {
            Turntable.turntableMain.showTip("字号必须为正整数！");
            return;
        }
        if(total == 4 ||total == 6 ||total == 8 || total == 10){
            Turntable.gameConfig.words = words;
            Turntable.gameConfig.pics = pics;
            Turntable.gameConfig.fontSize = fontSize;
            Turntable.gameConfig.bg = bg;
            Turntable.turntableMain.showTip("提交成功！");
            this.hide();
            Turntable.init();
        }else{
            Turntable.turntableMain.showTip("单词与图片数量之和必须是4，6，8，10之中的一个！");
        }
    }
}