// 游戏主界面
class TurntableMain extends ui.TurntableUI {
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    private configView: TConfigView; // 配置页
    public speed: number = 0; // 转速
    public mustStop: boolean = false;

    constructor() {
        super(); 
        this.configView = new TConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(Turntable.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
        // Laya.timer.frameLoop(1, this,this.turn);
        this.table.on(Laya.Event.CLICK,this,this.startTurn);
        // this.stop.on(Laya.Event.CLICK,this,this.stopTable);
    }

    private startTurn(){
        let wordLength = Turntable.gameConfig.words.length;
        let picLength = Turntable.gameConfig.pics.length;
        let totalLength = wordLength+picLength;
        if(Turntable.currentTurn<totalLength && !Turntable.gameChecking){
            Laya.SoundManager.playSound("res/audio/turnTable.wav", 1);
            
            let _index = Turntable.randomTurn[Turntable.currentTurn];
            let _rotation =1800 * _index + (_index * 360) / totalLength;
            Laya.Tween.to(this.table,{rotation:_rotation},3500,Laya.Ease.quartOut);
            Laya.timer.once(3500,this,function(){
                Turntable.currentTurn++;
                if(Turntable.currentTurn == totalLength){
                    Turntable.turntableMain.replayBtn.skin = "common/replay-abled.png";
                }
            })
        }
    }

    // public startTable(){
    //     let wordLength = Turntable.gameConfig.words.length;
    //     let picLength = Turntable.gameConfig.pics.length;
    //     let totalLength = wordLength+picLength;
    //     if(Turntable.currentTurn<totalLength && !Turntable.gameChecking){
    //         Laya.SoundManager.playSound("res/audio/turnTable.wav", 1);
    //         this.upSpeed();
    //     }
    // }

    // public stopTable(){
    //     this.downSpeed();
    // }

    // private upSpeed(){
    //     if(this.speed<20){
    //         this.speed++;
    //         Laya.timer.once(5,this,this.upSpeed);
    //     }else{
    //         Laya.timer.once(3000,this,this.stopTable);
    //     }
    // }

    // private downSpeed(){
    //     if(this.speed>0){
    //         if(this.speed == 1){
    //             this.setStop(true);
    //         }else{
    //             this.speed = this.speed - 1;
    //         }
    //         Laya.timer.once(100,this,this.downSpeed);
    //     }
    // }

    // private setStop(must:boolean){
    //     this.mustStop = must;
    // }

    // public turn(){
    //     // 125
    //     if(this.mustStop){
    //         let wordLength = Turntable.gameConfig.words.length;
    //         let picLength = Turntable.gameConfig.pics.length;
    //         let totalLength = wordLength+picLength;
    //         let _rotation = ((Turntable.randomTurn[Turntable.currentTurn]-1) * 360) / totalLength;
    //         if((this.table.rotation - _rotation)%360 < 10){
    //             console.log(Turntable.randomTurn[Turntable.currentTurn]+'---'+totalLength+'---'+_rotation);
    //             this.setStop(false);
    //             this.speed=0;
    //             Turntable.currentTurn++;
    //             if(Turntable.currentTurn == totalLength){
    //                 Turntable.turntableMain.replayBtn.skin = "common/replay-abled.png";
    //             }
    //         }
    //     }
    //     this.table.rotation += this.speed;
    // }

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
        if(!Turntable.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    public init(){
        this.table.visible = false;
        this.stop.visible = false;
    }
}