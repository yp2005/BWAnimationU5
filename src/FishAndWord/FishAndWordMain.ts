// 游戏主界面
class FishAndWordMain extends ui.FishAndWordUI {
    private configView: FWConfigView; // 配置页
    private fishImg: string = "fish-1.png"; // 鱼的图片
    // 泡泡图片
    private bubbleImg: string[] = ["bubble-1.png", "bubble-2.png", "bubble-3.png", "bubble-4.png"];
    // 贝壳图片
    private shellImg: string[] = ["shell-1.png", "shell-1-big.png", "shell-2.png", "shell-2-big.png", "shell-3.png", "shell-3-big.png", "shell-4.png", "shell-5.png"];
    constructor() {
        super(); 
  
        this.configView = new FWConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(FishAndWord.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
        this.bg.skin = "FishAndWord/" + FishAndWord.gameConfig.backgroundImg;
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
        if(!FishAndWord.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 将游戏元素添加到游戏主页面
    public addElement(fish?: Fish1[], bubbles?: Bubble[], shells?: Shell[]) {
        let words: any[];
        if(fish) {
            words = fish;
        }
        else if(bubbles) {
            words = bubbles;
        }
        else if(shells) {
            words = shells;
        }
        let indexes: number[] = new Array<number>();
        for(let i = 0; i < 16; i++) {
            indexes.push(i);
        }
        for(let word of words) {
            let i: number = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
            let index = indexes[i];
            indexes.splice(i, 1);
            
            // 设置单词在有界面的位置
            word.x = FishAndWord.wordPositon[index].x;
            word.y = FishAndWord.wordPositon[index].y;
            // 让延迟0-1秒随机时间开始晃动
            Laya.timer.once(Math.floor(Math.random() * 1000), word, word.shake1);
            
            // 不同类型的单词背景图片需要不同的设置
            if(FishAndWord.gameConfig.type == "fish") {
                word.picture.skin = "FishAndWord/" + this.fishImg;
            }
            else if(FishAndWord.gameConfig.type == "bubble") {
                word.picture.skin = "FishAndWord/" + this.bubbleImg[Math.floor(Math.random() * this.bubbleImg.length)];
            }
            else if(FishAndWord.gameConfig.type == "shell") {
                let pic = this.shellImg[Math.floor(Math.random() * this.shellImg.length)];
                 word.picture.skin = "FishAndWord/" + pic;
                 // 贝壳图片有大有小，设置居中
                 word.picture.centerX = 0;
                 word.picture.centerY = 0;
                 // 大图片和小图片使用不同的包围单词的圆圈图
                 if(pic.indexOf("big") != -1) {
                     word.wordBg.visible = false;
                 }
                 else {
                     word.wordBgBig.visible = false;
                 }
            }
            this.addChild(word);
        }
    }

}