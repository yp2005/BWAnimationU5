// 游戏主界面
class HitBalloonMain extends ui.HitBalloonUI {
    private balloons: Balloon[]; // 所有的气球
    private pictures: Picture[]; // 所有的图片
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    private configView: HBConfigView; // 配置页

    constructor() {
        super(); 
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
        this.configView = new HBConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(HitBalloon.gameConfig.gameModel) {
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
        if(!HitBalloon.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 游戏结束
    public gameOver() {
        // 显示well done文字效果
        this.wellDone.y = this.wellDoneY + this.wellDone.height;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        this.wellDone.removeSelf();
        this.addChild(this.wellDone);
        Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
   
    }

    // 重置游戏为初始状态
    private reset() {
        this.wellDone.visible = false;
        for(let balloon of this.balloons) {
            balloon.removeSelf();
            balloon.destroy();
        }
        for(let picture of this.pictures) {
            picture.removeSelf();
            picture.destroy();
        }
        HitBalloon.hitBalloonMain.replayBtn.visible = true;
        HitBalloon.finishedWordsNumber = 0;
        this.showSetting(true);
    }

    // 将游戏元素添加到游戏主页面
    public addElement(balloons: Balloon[], pictures: Picture[]) {
        this.balloons = balloons;
        this.pictures = pictures;
        let balloonWidth: number = 1024 / this.balloons.length;
        let topPicNumber: number = Math.floor(this.pictures.length / 2);
        let picWidthTop: number = 1024 / topPicNumber;
        let picWidthBottom: number = 1024 / (this.pictures.length - topPicNumber);
        let indexes: number[] = new Array<number>();
        for(let i = 0; i < this.balloons.length; i++) {
            indexes.push(i);
        }
        for(let balloon of this.balloons) { // 添加所有气球
            let i: number = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
            let index = indexes[i];
            indexes.splice(i, 1);
            if(index >= 6) {
                balloon.picture.skin = "HitBalloon/balloon-" + (index - 5) + ".png";
            }
            else {
                balloon.picture.skin = "HitBalloon/balloon-" + (index + 1)+ ".png";
            }
            balloon.x = index * balloonWidth + (balloonWidth - balloon.width) / 2;
            balloon.y = 330;
            // 根据气球个数设置单词字号
            balloon.word.width = balloonWidth;
            balloon.word.x = (128 - balloonWidth) / 2;
            if(this.balloons.length < 8) {
                balloon.word.fontSize = 40;
            }
            else {
                balloon.word.fontSize = 30;
            }
            this.addChild(balloon);
        }
        indexes = new Array<number>();
        for(let i = 0; i < this.pictures.length; i++) {
            indexes.push(i);
        }
        for(let picture of this.pictures) { // 添加所有图片
            let i: number = Math.floor(Math.random() * indexes.length); // 给图片一个随机的位置
            let index = indexes[i];
            indexes.splice(i, 1);
            if(index < topPicNumber) {
                picture.x = index * picWidthTop + (picWidthTop - picture.width) / 2;
                picture.y = 110;
                picture.position = "top";
            }
            else {
                picture.x = (index - topPicNumber) * picWidthBottom + (picWidthBottom - picture.width) / 2;
                picture.y = 564;
                picture.position = "bottom";
            }
            this.addChild(picture);
            index++;
        }
    }

    // 获取气球数量
    public getBalloonsNumber(): number {
        return this.balloons.length;
    }

}