// 游戏主界面
class HitEggMain extends ui.HitEggUI {
    public eggs: Egg[]; // 所有的蛋
    private configView: HEConfigView; // 配置页

    constructor() {
        super(); 
        this.configView = new HEConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(HitEgg.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

     // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        this.tip.removeSelf();
        this.addChild(this.tip);
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
        if(!HitEgg.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 重置游戏为初始状态
    public reset() {
        for(let egg of this.eggs) {
            egg.removeSelf();
            egg.destroy();
        }
        HitEgg.hitedNum = 0;
    }

    // 将游戏元素添加到游戏主页面
    public addElement(eggs: Egg[]) {
        this.eggs = eggs;
        // 随机3/10的鸡蛋有小鸡
        let hasChickNum:number = Math.round(eggs.length * 3 / 10);
        let hasChickIndex: number[] = new Array<number>();
        let indexes: number[] = new Array<number>();
        for(let i = 0; i < eggs.length; i++) {
            indexes.push(i);
        }
        for(let i = 0; i < hasChickNum; i++) {
            let i: number = Math.floor(Math.random() * indexes.length);
            let index = indexes[i];
            indexes.splice(i, 1);
            eggs[index].hasChick = true;
        }
        indexes = new Array<number>();
        for(let i = 0; i < eggs.length; i++) {
            indexes.push(i);
        }
        // 根据蛋的数量进行布局分配，为每个蛋随机一个位置
        if(eggs.length <= 2) {
            for(let egg of eggs) {
                let i: number = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                let index = indexes[i];
                indexes.splice(i, 1);
                egg.x = 1024 / eggs.length * index + (1024 / eggs.length - egg.width) / 2;
                egg.y = (768 - egg.height) / 2;
                this.addChild(egg);
            }
        }  
        else if(eggs.length > 2 && eggs.length <= 6) {
            let line1Num: number = Math.floor(eggs.length / 2);
            let line2Num: number = eggs.length - line1Num; 
            let line1Width = 1024 / line1Num;
            let line2Width = 1024 / line2Num;
            for(let egg of eggs) {
                let i: number = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                let index = indexes[i];
                indexes.splice(i, 1);
                if(index + 1 > line1Num) {
                    egg.x = line2Width * (index - line1Num) + (line2Width - egg.width) / 2;
                    egg.y = 384 + (384 - egg.height) / 2;
                }
                else {
                    egg.x = line1Width * index + (line1Width - egg.width) / 2;
                    egg.y = (384 - egg.height) / 2;
                }
                this.addChild(egg);
            }
        } 
        else {
            let line1Num: number = Math.floor(eggs.length / 3);
            let line3Num: number = Math.floor((eggs.length - line1Num) / 2) ;
            let line2Num: number = eggs.length - line1Num - line3Num; 
            let line1Width = 1024 / line1Num;
            let line2Width = 1024 / line2Num;
            let line3Width = 1024 / line3Num;
            for(let egg of eggs) {
                let i: number = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
                let index = indexes[i];
                indexes.splice(i, 1);
                if(index + 1 <= line1Num) {
                    egg.x = line1Width * index + (line1Width - egg.width) / 2;
                    if(line1Num == 4 && index == 0) {
                        egg.x += 50;
                    }
                    egg.y = (256 - egg.height) / 2;
                }
                else if(index + 1 > line1Num && index + 1 <= line1Num + line2Num){
                    egg.x = line2Width * (index - line1Num) + (line2Width - egg.width) / 2;
                    egg.y = 256 + (256 - egg.height) / 2;
                }
                else {
                    egg.x = line3Width * (index - line1Num - line2Num) + (line3Width - egg.width) / 2;
                    egg.y = 512 + (256 - egg.height) / 2;
                    if(line3Num >= 3 && index == eggs.length - 1) {
                        egg.y -= 20;
                    }
                }
                this.addChild(egg);
            }
        }
    }
}