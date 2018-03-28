// 游戏主界面
class HitBalloonDisappearMain extends ui.HitBalloonDisappearUI {
    private balloons: BalloonDisappear[]; // 所有的气球
    private pictures: Picture[]; // 所有的图片
    private configView: HBDConfigView; // 配置页

    constructor() {
        super(); 
        this.configView = new HBDConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(HitBalloonDisappear.gameConfig.gameModel) {
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
        if(!HitBalloonDisappear.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 重置游戏为初始状态
    public reset() {
        for(let balloon of this.balloons) {
            balloon.removeSelf();
            balloon.destroy();
        }
        for(let picture of this.pictures) {
            picture.removeSelf();
            picture.destroy();
        }
        HitBalloonDisappear.finishedWordsNumber = 0;
    }

    // 将游戏元素添加到游戏主页面
    public addElement(balloons: BalloonDisappear[], pictures: Picture[]) {
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
                balloon.picture.skin = "HitBalloonDisappear/balloon-" + (index - 5) + ".png";
            }
            else {
                balloon.picture.skin = "HitBalloonDisappear/balloon-" + (index + 1)+ ".png";
            }
            balloon.x = index * balloonWidth + (balloonWidth - balloon.width) / 2;
            balloon.y = 340;
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
                picture.y = 530;
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