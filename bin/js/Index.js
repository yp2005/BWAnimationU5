// 程序入口，本工程仅用于切换各个动画进行测试
// 游戏名称，修改这个变量值来切换不同游戏，
var gameName = "opposites";
if (gameName == "balloon") {
    //气球爆炸消失游戏
    var config = {
        gameModel: false,
        words: [
            { word: "horse", picture: "horse.png" },
            { word: "dog", picture: "dog.png" },
            { word: "fish", picture: "fish.png" },
            { word: "cat", picture: "cat.png" },
            { word: "mouse", picture: "mouse.png" },
            { word: "bird", picture: "bird.png" }
        ]
    };
    new HitBalloon(config);
}
if (gameName == "opposites") {
    //气球爆炸消失游戏
    var config = {
        gameModel: false,
        leftWords: ["sad", "young", "ugly", "big", "empty", "good", "low"],
        rightWords: ["happy", "old", "beautiful", "small", "full", "bad", "high"]
    };
    new BalloonOpposites(config);
}
//# sourceMappingURL=Index.js.map