// 游戏主界面
class ThrowDiceMain extends ui.ThrowDiceUI {
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    private configView: TDConfigView; // 配置页

    constructor() {
        super(); 
        // this.wellDone.visible = false;
        // this.wellDoneY = this.wellDone.y;
        // this.wellDoneX = this.wellDone.x;
        this.configView = new TDConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(ThrowDice.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

    public changeBg(bg:string){
        this.gameBg.skin = "ThrowDice/"+bg;
    }

    public changePics(pics:Array<string>){
        // for(var i = 0;i<6;i++){
        //     let pic = ThrowDice.throwDiceMain.getChildByName('pic'+(i+1)) as Laya.Image;
        //     // pic.skin = "ThrowDice/bg2.png";
        //     pic.skin = "ThrowDice/"+pics[i];
        // }
        this.pic1.skin =  "ThrowDice/"+pics[0];
        this.pic1.skin =  "ThrowDice/"+pics[1];
        this.pic1.skin =  "ThrowDice/"+pics[2];
        this.pic1.skin =  "ThrowDice/"+pics[3];
        this.pic1.skin =  "ThrowDice/"+pics[4];
        this.pic1.skin =  "ThrowDice/"+pics[5];
    }

    public changeStatus(isVisible:boolean){
        for(var i = 0;i<6;i++){
            // let pic = ThrowDice.throwDiceMain.getChildByName('pic'+(i+1)) as Laya.Image;
            // pic.visible = isVisible;
            let mask = ThrowDice.throwDiceMain.getChildByName('mask'+(i+1)) as Laya.Image;
            mask.visible = isVisible;
        }
        this.pic1.visible = isVisible;
        this.pic2.visible = isVisible;
        this.pic3.visible = isVisible;
        this.pic4.visible = isVisible;
        this.pic5.visible = isVisible;
        this.pic6.visible = isVisible;
    }

     // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
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
        if(!ThrowDice.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }
}