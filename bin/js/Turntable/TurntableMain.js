var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 游戏主界面
var TurntableMain = /** @class */ (function (_super) {
    __extends(TurntableMain, _super);
    function TurntableMain() {
        var _this = _super.call(this) || this;
        _this.speed = 0; // 转速
        _this.mustStop = false;
        _this.configView = new TConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (Turntable.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        // Laya.timer.frameLoop(1, this,this.turn);
        _this.table.on(Laya.Event.CLICK, _this, _this.startTurn);
        return _this;
        // this.stop.on(Laya.Event.CLICK,this,this.stopTable);
    }
    TurntableMain.prototype.startTurn = function () {
        var wordLength = Turntable.gameConfig.words.length;
        var picLength = Turntable.gameConfig.pics.length;
        var totalLength = wordLength + picLength;
        if (Turntable.currentTurn < totalLength && !Turntable.gameChecking) {
            Laya.SoundManager.playSound("res/audio/turnTable.wav", 1);
            var _index = Turntable.randomTurn[Turntable.currentTurn];
            var _rotation = 1800 * _index + (_index * 360) / totalLength;
            Laya.Tween.to(this.table, { rotation: _rotation }, 3500, Laya.Ease.quartOut);
            Laya.timer.once(3500, this, function () {
                Turntable.currentTurn++;
                if (Turntable.currentTurn == totalLength) {
                    Turntable.turntableMain.replayBtn.skin = "common/replay-abled.png";
                }
            });
        }
    };
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
    TurntableMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(2000, this, this.hideTip);
    };
    TurntableMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    TurntableMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    TurntableMain.prototype.showSetting = function (state) {
        if (!Turntable.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    TurntableMain.prototype.init = function () {
        this.table.visible = false;
        this.stop.visible = false;
    };
    return TurntableMain;
}(ui.TurntableUI));
//# sourceMappingURL=TurntableMain.js.map