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
            console.log("sound:::"+"res/audio/multouch/"+word+".mp3");
            Laya.SoundManager.playSound("res/audio/multouch/"+word+".mp3", 1);
            MulTouch.gameChecking = true;
            MulTouch.mulTouchMain.speak.skin = "MulTouch/sound-disabled.png";
            MulTouch.wordContext++;

            MulTouch.leftimageOk = false;
            MulTouch.leftwordOk = false;
            MulTouch.rightwordOk = false;
            MulTouch.rightimageOk = false;
                    // let addheight = 20 * picture.height / picture.width;
                    // picture.width = picture.width+20;
                    // picture.height = picture.height + addheight;
                    // picture.x = picture.x - 10;
                    // picture.y = picture.y - addheight/2;
            for(var i = 0;i<MulTouch.mulTouchMain.mainbox.numChildren;i++){
                let img = MulTouch.mulTouchMain.mainbox.getChildAt(i) as Laya.Image;
                
                // if((img.x !== 50) || (img.x !== 280) ||(img.x != 562) ||(img.x != 792){

                // }
                if(![50, 280, 562,792].includes(img.x)){
                    let addheight = 20 * img.height / img.width;
                    img.width = img.width-20;
                    img.height = img.height - addheight;
                    img.x = img.x + 10;
                    img.y = img.y + addheight/2;
                }
            }
            Laya.timer.once(1000,this,function(){
                // 播放到最后一个单词音频的时候replay亮起，播放再也不能点了；
                if(MulTouch.soundRandom.length == MulTouch.wordContext){
                    MulTouch.gameChecking = true;
                    MulTouch.mulTouchMain.replayBtn.skin = "common/replay-abled.png";
                }else{
                    MulTouch.gameChecking = false;
                    MulTouch.mulTouchMain.speak.skin = "MulTouch/sound.png";
                }
            });
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