// 蛋
class Egg extends ui.EggUI {
    public hasChick: boolean = false;
    constructor(word: string) {
        super();
        this.word.text = word;
        // 设置单词字号和单词背景图
        this.word.fontSize = HitEgg.gameConfig.fontSize;
        this.word.height = this.word.fontSize + 5;
        this.word.width = this.word.fontSize / 3 * 2 * this.word.text.length + 20;
        this.word.x = (this.width - this.word.width) / 2;
        this.wordBg.width = this.word.width > 138 ? this.word.width : 138;
        this.wordBg.height = this.word.height > 48 ? this.word.fontSize : 48;
        this.wordBg.x = (this.width - this.wordBg.width) / 2;
        this.wordBg.y = 160;
        this.word.y = 160 + (this.wordBg.height - this.word.height) / 2 - 2;

        // 初始化蛋的显示元素
        this.picture.visible = true;
        this.wordBg.visible = false;
        this.word.visible = false;
        this.eggBroken.visible = false;
        this.hammer.visible = false;
        this.picture.on(Laya.Event.CLICK, this, this.hit);
    }

    // 被砸
    private hit() {
        this.picture.off(Laya.Event.CLICK, this, this.hit);
        this.hammer.visible = true;
        // 播放捶打动画
        this.hammer.play(0, false);
        Laya.SoundManager.playSound("res/audio/hit-egg.mp3", 1);
        Laya.timer.once(100, this, function() {
            this.word.visible = true;
            this.wordBg.visible = true;
            this.picture.visible = false;
            this.eggBroken.visible = true;
            this.eggBroken.play(0, false, this.hasChick ? "broken1" : "broken2");
            Laya.SoundManager.playSound("res/audio/egg-broken.mp3", 1);
            Laya.timer.once(200, this, function() {
                this.picture.skin = "HitEgg/" + (this.hasChick ? "egg-broken-chick-3.png" : "egg-broken-nochick-3.png");
                this.picture.visible = true;
                this.eggBroken.visible = false;
                Laya.timer.once(200, this, function() {
                    this.hammer.visible = false;
                });
                HitEgg.hitedNum++;
                if(HitEgg.hitedNum >= HitEgg.hitEggMain.eggs.length) {
                    HitEgg.hitEggMain.replayBtn.skin = "common/replay-abled.png";
                    HitEgg.hitEggMain.replayBtn.removeSelf();
                    HitEgg.hitEggMain.addChild(HitEgg.hitEggMain.replayBtn);
                    HitEgg.hitEggMain.replayText.removeSelf();
                    HitEgg.hitEggMain.addChild(HitEgg.hitEggMain.replayText);
                }
            });
        });  
    }
}