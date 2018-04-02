// 游戏主界面
class MulTouchMain extends ui.MulTouchUI {
    private configView: MTConfigView; // 配置页
    public speed: number = 0; // 转速
    public mustStop: boolean = false;

    constructor() {
        super(); 
        this.configView = new MTConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(MulTouch.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
        this.speak.on(Laya.Event.CLICK,this,this.speakWord);
    }

    public speakWord(){
        if(!MulTouch.gameChecking){
            let word = MulTouch.allWords[(MulTouch.soundRandom[MulTouch.wordContext]-1)];
            console.log("sound:::"+word);
            Laya.SoundManager.playSound("res/audio/multouch"+word+".m4a", 1);
            MulTouch.gameChecking = true;
            MulTouch.mulTouchMain.speak.skin = "MulTouch/sound-disabled.png";
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
        if(!MulTouch.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }
}