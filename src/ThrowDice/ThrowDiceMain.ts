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

    // 游戏结束
    public gameOver() {
        // 显示well done文字效果
        // this.wellDone.y = this.wellDoneY + this.wellDone.height;
        // this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        // this.wellDone.scale(0, 0);
        // this.wellDone.visible = true;
        // this.wellDone.removeSelf();
        // this.addChild(this.wellDone);
        // Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
   
    }

    // 重置游戏为初始状态
    private reset() {
        // this.wellDone.visible = false;
        // for(let balloon of this.balloons) {
        //     balloon.removeSelf();
        //     balloon.destroy();
        // }
        // for(let picture of this.pictures) {
        //     picture.removeSelf();
        //     picture.destroy();
        // }
        // HitBalloon.hitBalloonMain.replayBtn.visible = true;
        // HitBalloon.finishedWordsNumber = 0;
        // this.showSetting(true);
    }
}