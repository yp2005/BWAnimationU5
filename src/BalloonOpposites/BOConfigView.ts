// 配置界面
class BOConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private leftInput: Laya.TextInput; // 输入框
    private rightInput: Laya.TextInput; // 输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.leftInput = configBox.getChildByName("leftInput") as Laya.TextInput;
        this.rightInput = configBox.getChildByName("rightInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        this.leftInput.text = BalloonOpposites.gameConfig.leftWords.join(",");
        this.rightInput.text = BalloonOpposites.gameConfig.rightWords.join(",");
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
        let leftTexts = this.leftInput.text.split(",");
        let rightTexts = this.rightInput.text.split(",");
        let leftLength = leftTexts.length,rightLength = rightTexts.length;
        if(leftLength <1 || leftLength > 7 || rightLength <1 || rightLength > 7){
            BalloonOpposites.balloonOppositesMain.showTip("左右两边的单词数量必须都在1-7之间！");
            return;
        }
        if(leftTexts.length != rightTexts.length){
            BalloonOpposites.balloonOppositesMain.showTip("左右两边的单词必须一一对应，互为相反！");
            return;
        }

        let isExit = false;
        for(let i = 0; i < leftTexts.length; i++){
            if(_map[leftTexts[i]]){
                isExit = true;
                break;
            }else{
                _map[leftTexts[i]] = rightTexts[i];
            }

            if(_map[rightTexts[i]]){
                isExit = true;
                break;
            }else{
                _map[rightTexts[i]] = leftTexts[i];
            }
        }
        if(isExit){
            BalloonOpposites.balloonOppositesMain.showTip("单词重复！");
            return;
        }
        BalloonOpposites.ballWordMap = _map;

        BalloonOpposites.gameConfig.leftWords = leftTexts;
        BalloonOpposites.gameConfig.rightWords = rightTexts;
        BalloonOpposites.balloonOppositesMain.showTip("提交成功！");
        this.hide();
    }
}