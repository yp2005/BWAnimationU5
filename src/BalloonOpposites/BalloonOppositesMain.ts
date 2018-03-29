// 游戏主界面
class BalloonOppositesMain extends ui.BalloonOppositesUI {
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    private configView: BOConfigView; // 配置页

    constructor() {
        super(); 
        this.configView = new BOConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(BalloonOpposites.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

     // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(2000, this, this.hideTip);
    }

    private hideTip() {
        this.tip.visible = false;
    }

    // 显示游戏配置页面 
    private showConfigView() {
        this.configView.show();
    }

    // 设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!BalloonOpposites.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }
}