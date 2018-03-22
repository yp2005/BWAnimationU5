// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，
let gameName = "dice"; 

if(gameName == "balloon") {
    //气球爆炸消失游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        words: [
            {word: "horse", picture: "horse.png"},
            {word: "dog", picture: "dog.png"},
            {word: "fish", picture: "fish.png"},
            {word: "cat", picture: "cat.png"},
            {word: "mouse", picture: "mouse.png"},
            {word: "bird", picture: "bird.png"}
        ]
    };
    new HitBalloonDisappear(config);
}
else if(gameName == "opposites") {
    //气球爆炸消失游戏
    let config: any = {
        gameModel: false,
        leftWords: ["sad", "young", "ugly", "big", "empty", "good", "low"],
        rightWords: ["happy", "old", "beautiful", "small", "full", "bad", "high"]
    };
    new BalloonOpposites(config);
}
else if(gameName == "fish") {
    // 触摸小鱼游戏
    let config: any = {
        gameModel: false,
        //hasTitle: true, // 是否有游戏标题
        backgroundImg: "bg-1.jpeg", // 游戏背景图
        type: "shell", // 单词背景图类型：fish、bubble、shell
        words: ["a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d"],
        fontSize: 30 // 字号，数字越大字越大
    };
    new FishAndWord(config);
}
else if(gameName == "dice") {
    //摇骰子游戏
    let config: any = {
        gameModel: false,
        bg: "bg1.png",
        pics: ["pic-2-1.png","pic-2-2.png","pic-2-3.png","pic-1-4.png","pic-1-5.png","pic-1-6.png"]
    };
    new ThrowDice(config);
}