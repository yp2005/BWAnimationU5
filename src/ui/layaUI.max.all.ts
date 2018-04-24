
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BOBalloonUI extends View {
		public ball0:Laya.Image;
		public ball1:Laya.Image;
		public wordbg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":200,"height":200},"child":[{"type":"Image","props":{"var":"ball0","skin":"BalloonOpposites/balloon-1-0.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"ball1","skin":"BalloonOpposites/balloon-1-1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":8,"x":100,"width":130,"var":"wordbg","skin":"template/Text/TextBox.png","pivotY":30,"pivotX":65,"height":60,"centerY":0,"centerX":0},"child":[{"type":"Text","props":{"y":0,"x":0,"width":125,"var":"word","text":"beautiful","pivotY":-5,"pivotX":-3,"height":50,"fontSize":40,"font":"FF","color":"#000","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BOBalloonUI.uiView);

        }

    }
}

module ui {
    export class BalloonDisappearUI extends View {
		public shake:Laya.FrameAnimation;
		public blast:Laya.FrameAnimation;
		public picture:Laya.Image;
		public blastImg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":128,"height":250},"child":[{"type":"Image","props":{"y":2,"x":10,"var":"picture","skin":"HitBalloonDisappear/balloon-1.png"},"compId":2},{"type":"Image","props":{"y":-5,"x":-37,"width":190,"var":"blastImg","skin":"HitBalloonDisappear/blast.png","height":150}},{"type":"Text","props":{"y":49,"x":0,"width":128,"var":"word","valign":"middle","text":"computer","strokeColor":"#ffffff","stroke":2,"height":30,"fontSize":30,"font":"FF","color":"#000000","align":"center"}}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":19},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20}]}}],"name":"shake","id":1,"frameRate":10,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":-9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18}],"x":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":7},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":8},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":9},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":11},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":12},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":13},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":14},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":16},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":18}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":18}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":18}]}}],"name":"blast","id":2,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BalloonDisappearUI.uiView);

        }

    }
}

module ui {
    export class BalloonOppositesUI extends View {
		public ballbox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public configBox:Laya.Box;
		public replayBtn:Laya.Image;
		public replayText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"BalloonOpposites/bg.jpg"}},{"type":"Text","props":{"y":54,"x":318,"width":405,"text":"Find the opposites","height":59,"fontSize":45,"font":"FF","color":"#e3e345","bold":true}},{"type":"Box","props":{"y":0,"x":0,"width":1024,"var":"ballbox","height":768}},{"type":"Text","props":{"y":84,"x":74,"wordWrap":true,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":169,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":103,"x":476,"width":465,"skin":"template/Text/TextBox.png","height":39}},{"type":"Image","props":{"y":9,"x":341,"width":644,"skin":"common/configBG.png","height":326,"alpha":1}},{"type":"Label","props":{"y":56,"x":409,"text":"左边：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":46,"x":476,"width":465,"skin":"template/Text/TextBox.png","height":39}},{"type":"Label","props":{"y":113,"x":409,"text":"右边：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"TextInput","props":{"y":49,"x":491,"width":436,"name":"leftInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"TextInput","props":{"y":106,"x":491,"width":436,"name":"rightInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":243,"x":495,"width":90,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":35}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Label","props":{"y":170,"x":369,"text":"单词背景图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":160,"x":476,"width":465,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":163,"x":491,"width":436,"name":"bgInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Text","props":{"y":207,"x":486,"text":"注：请以 图片类型-图片组数 的形式填写，如 balloon-14","fontSize":17,"font":"FF","color":"#666666"}}]},{"type":"Image","props":{"y":681,"x":836,"width":168,"var":"replayBtn","skin":"common/replay-disabled.png","height":69}},{"type":"Text","props":{"y":698,"x":837,"width":168,"var":"replayText","valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":39,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BalloonOppositesUI.uiView);

        }

    }
}

module ui {
    export class BubbleUI extends View {
		public picture:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":98},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"picture","skin":"FishAndWord/bubble-3.png"}},{"type":"Text","props":{"y":33,"x":0,"width":140,"var":"word","valign":"top","text":"E","height":35,"fontSize":30,"font":"FF","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BubbleUI.uiView);

        }

    }
}

module ui {
    export class EggUI extends View {
		public picture:Laya.Image;
		public wordBg:Laya.Image;
		public word:laya.display.Text;
		public eggBroken:Laya.Animation;
		public hammer:Laya.Animation;

        public static  uiView:any ={"type":"View","props":{"width":245,"height":210},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"picture","skin":"HitEgg/egg.png"}},{"type":"Image","props":{"y":160,"x":53,"var":"wordBg","skin":"HitEgg/word-bg.png"}},{"type":"Text","props":{"y":166,"x":53,"width":138,"var":"word","valign":"top","text":"word","height":35,"fontSize":30,"font":"FF","color":"#000000","align":"center"}},{"type":"Animation","props":{"y":78,"x":123,"var":"eggBroken","source":"EggBroken.ani"}},{"type":"Animation","props":{"y":-84,"x":82,"var":"hammer","source":"Hammer.ani"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.EggUI.uiView);

        }

    }
}

module ui {
    export class Fish1UI extends View {
		public picture:Laya.Image;
		public wordBg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":98},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"picture","skin":"FishAndWord/fish-1.png"}},{"type":"Image","props":{"y":34,"x":42,"var":"wordBg","skin":"FishAndWord/word-bg-1.png"}},{"type":"Text","props":{"y":31,"x":41,"width":58,"var":"word","valign":"top","text":"eee","height":35,"fontSize":30,"font":"FF","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.Fish1UI.uiView);

        }

    }
}

module ui {
    export class FishAndWordUI extends View {
		public bg:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"FishAndWord/bg-2.png"}},{"type":"Box","props":{"y":119,"x":575,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":9,"x":500,"width":485,"skin":"common/configBG.png","sizeGrid":"20,5,20,5","height":411,"alpha":1}},{"type":"Label","props":{"y":268,"x":558,"text":"单词：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":256,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":261,"x":641,"width":286,"name":"word","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":341,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":7,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":303,"x":634,"text":"示例：\ba,b,c,d","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Label","props":{"y":78,"x":535,"text":"背景图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":66,"x":623,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":71,"x":638,"width":286,"name":"backgroundImg","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Label","props":{"y":134,"x":556,"text":"类型：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":121,"x":624,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":126,"x":639,"width":286,"text":"30","name":"type","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Label","props":{"y":212,"x":557,"text":"字号：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":200,"x":625,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":205,"x":640,"width":286,"name":"fontSize","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Text","props":{"y":167,"x":634,"text":"注：\bfish、bubble、shell三种","fontSize":17,"font":"FF","color":"#666666"}}]},{"type":"Text","props":{"y":123,"x":152,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":26,"x":31,"width":30,"var":"setting","skin":"common/setting.png","height":30}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.FishAndWordUI.uiView);

        }

    }
}

module ui {
    export class HitBalloonDisappearUI extends View {
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public replayBtn:Laya.Image;
		public replayText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitBalloonDisappear/mainBG.png"}},{"type":"Text","props":{"y":39,"x":312,"valign":"middle","text":"Look and match.","fontSize":55,"font":"FF","color":"#e3e345","bold":true}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","height":235,"alpha":1}},{"type":"Label","props":{"y":77,"x":558,"text":"单词：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":66,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":71,"x":641,"width":286,"name":"textInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":151,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":114,"x":634,"text":"示例：\bhorse:horse.png,fish:fish.png","fontSize":17,"font":"FF","color":"#666666"}}]},{"type":"Text","props":{"y":135,"x":141,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":681,"x":836,"var":"replayBtn","skin":"common/replay-disabled.png"}},{"type":"Text","props":{"y":696,"x":839,"width":168,"var":"replayText","valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":44,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitBalloonDisappearUI.uiView);

        }

    }
}

module ui {
    export class HitEggUI extends View {
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public replayBtn:Laya.Image;
		public replayText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitEgg/mainBG.png"}},{"type":"Box","props":{"y":118,"x":576,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","sizeGrid":"7,0,20,0","height":299,"alpha":1}},{"type":"Label","props":{"y":142,"x":558,"text":"单词：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":130,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":135,"x":641,"width":286,"name":"textInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":215,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":177,"x":634,"text":"示例：\bgood,apple,name","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Label","props":{"y":80,"x":559,"text":"字号：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":68,"x":627,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":73,"x":642,"width":286,"text":"30","name":"fontSize","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}}]},{"type":"Text","props":{"y":129,"x":136,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"font":"FF","color":"#4b1a81","align":"center"}},{"type":"Image","props":{"y":20,"x":20,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":681,"x":832,"var":"replayBtn","skin":"common/replay-disabled.png"}},{"type":"Text","props":{"y":696,"x":835,"width":168,"var":"replayText","valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":44,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitEggUI.uiView);

        }

    }
}

module ui {
    export class MulTouchUI extends View {
		public replayBtn:Laya.Image;
		public replayText:laya.display.Text;
		public setting:Laya.Image;
		public tip:laya.display.Text;
		public speak:Laya.Image;
		public mainbox:Laya.Box;
		public configBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"MulTouch/bg.png"}},{"type":"Image","props":{"y":681,"x":836,"width":168,"var":"replayBtn","skin":"common/replay-disabled.png","height":69}},{"type":"Text","props":{"y":698,"x":837,"width":168,"var":"replayText","valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":39,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Text","props":{"y":99,"x":79,"wordWrap":true,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":169,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":19,"x":943,"width":60,"var":"speak","skin":"MulTouch/sound.png","height":60}},{"type":"Box","props":{"y":189,"x":577,"width":985,"var":"mainbox","pivotY":100,"pivotX":554,"height":591}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":133,"x":476,"width":465,"skin":"template/Text/TextBox.png","height":39}},{"type":"Image","props":{"y":9,"x":356,"width":629,"skin":"common/configBG.png","height":294,"alpha":1}},{"type":"Label","props":{"y":51,"x":409,"text":"左边：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":46,"x":476,"width":465,"skin":"template/Text/TextBox.png","height":39}},{"type":"Label","props":{"y":138,"x":408,"text":"右边：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"TextInput","props":{"y":49,"x":491,"width":436,"name":"leftInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"TextInput","props":{"y":136,"x":491,"width":436,"name":"rightInput","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Button","props":{"y":218,"x":495,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":90,"x":491,"text":"注：\btiger、snake等","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Text","props":{"y":177,"x":491,"text":"注：\btigers、snakes等","fontSize":17,"font":"FF","color":"#666666"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.MulTouchUI.uiView);

        }

    }
}

module ui {
    export class PictureDisappearUI extends View {
		public picture:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":204,"height":204},"child":[{"type":"Image","props":{"y":130,"x":5,"skin":"HitBalloonDisappear/pic_bg.png"}},{"type":"Image","props":{"y":71,"x":58,"var":"picture","skin":"HitBalloonDisappear/fish.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PictureDisappearUI.uiView);

        }

    }
}

module ui {
    export class ShellUI extends View {
		public picture:Laya.Image;
		public wordBgBig:Laya.Image;
		public wordBg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":137,"height":142},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"picture","skin":"FishAndWord/shell-1-big.png"}},{"type":"Image","props":{"y":49,"x":47,"var":"wordBgBig","skin":"FishAndWord/word-bg-2-big.png"}},{"type":"Image","props":{"y":51,"x":51,"var":"wordBg","skin":"FishAndWord/word-bg-2.png"}},{"type":"Text","props":{"y":63,"x":47,"width":58,"var":"word","valign":"top","text":"eee","height":35,"fontSize":30,"font":"FF","color":"#000000","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ShellUI.uiView);

        }

    }
}

module ui {
    export class ThrowDiceUI extends View {
		public gameBg:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public replayBtn:Laya.Image;
		public replayText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"width":1024,"var":"gameBg","skin":"ThrowDice/bg1.png","height":768}},{"type":"Image","props":{"y":120,"x":110,"skin":"ThrowDice/pic-1-1.png","name":"pic1"}},{"type":"Image","props":{"y":120,"x":415,"skin":"ThrowDice/pic-1-2.png","name":"pic2"}},{"type":"Image","props":{"y":120,"x":719,"skin":"ThrowDice/pic-1-3.png","name":"pic3"}},{"type":"Image","props":{"y":490,"x":110,"skin":"ThrowDice/pic-1-4.png","name":"pic4"}},{"type":"Image","props":{"y":490,"x":415,"skin":"ThrowDice/pic-1-5.png","name":"pic5"}},{"type":"Image","props":{"y":490,"x":719,"skin":"ThrowDice/pic-1-6.png","name":"pic6"}},{"type":"Image","props":{"y":120,"x":110,"skin":"ThrowDice/mask-1.png","name":"mask1"}},{"type":"Image","props":{"y":120,"x":415,"skin":"ThrowDice/mask-2.png","name":"mask2"}},{"type":"Image","props":{"y":120,"x":719,"skin":"ThrowDice/mask-3.png","name":"mask3"}},{"type":"Image","props":{"y":490,"x":110,"skin":"ThrowDice/mask-4.png","name":"mask4"}},{"type":"Image","props":{"y":490,"x":415,"skin":"ThrowDice/mask-5.png","name":"mask5"}},{"type":"Image","props":{"y":490,"x":719,"skin":"ThrowDice/mask-6.png","name":"mask6"}},{"type":"Box","props":{"y":134,"x":591,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":131,"x":446,"width":495,"skin":"template/Text/TextBox.png","height":39}},{"type":"Image","props":{"y":9,"x":331,"width":654,"skin":"common/configBG.png","height":304,"alpha":1}},{"type":"Label","props":{"y":55,"x":378,"text":"背景图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":46,"x":446,"width":495,"skin":"template/Text/TextBox.png","height":39}},{"type":"Label","props":{"y":140,"x":378,"text":"底图：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"TextInput","props":{"y":49,"x":461,"width":466,"name":"bgInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"TextInput","props":{"y":134,"x":461,"width":466,"name":"picInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":221,"x":465,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":100,"x":465,"text":"示例：\bbg1.png,bg2.png","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Text","props":{"y":180,"x":465,"text":"示例：\bpic-1-1.png,pic-1-2.png,pic-2-1.png,pic-2-2.png","fontSize":17,"font":"FF","color":"#666666"}}]},{"type":"Text","props":{"y":70,"x":102,"wordWrap":true,"width":270,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":263,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":34,"x":37,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":681,"x":836,"var":"replayBtn","skin":"common/replay-disabled.png"}},{"type":"Text","props":{"y":698,"x":837,"width":168,"var":"replayText","valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":39,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ThrowDiceUI.uiView);

        }

    }
}

module ui {
    export class TurntableUI extends View {
		public gameBg:Laya.Image;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public table:Laya.Image;
		public stop:Laya.Image;
		public configBox:Laya.Box;
		public replayBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"width":1024,"var":"gameBg","skin":"Turntable/bg.png","height":768}},{"type":"Text","props":{"y":70,"x":102,"wordWrap":true,"width":270,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":263,"fontSize":30,"font":"FF","color":"#17a817","align":"center"}},{"type":"Image","props":{"y":34,"x":37,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":381,"x":618,"var":"table","skin":"Turntable/table8.png","pivotY":301,"pivotX":302}},{"type":"Image","props":{"y":381,"x":618,"skin":"Turntable/circle1.png","pivotY":30.5,"pivotX":30}},{"type":"Image","props":{"y":28,"x":542,"var":"stop","skin":"Turntable/stop.png"},"child":[{"type":"Text","props":{"y":12,"x":32,"wordWrap":true,"width":96,"text":"stop","pivotY":2,"pivotX":8,"height":44,"fontSize":40,"font":"FF","color":"#fff","align":"center"}}]},{"type":"Box","props":{"y":134,"x":591,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":131,"x":446,"width":495,"skin":"template/Text/TextBox.png","height":39}},{"type":"Image","props":{"y":9,"x":331,"width":654,"skin":"common/configBG.png","height":379,"alpha":1}},{"type":"Label","props":{"y":55,"x":378,"text":"单词：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":46,"x":446,"width":495,"skin":"template/Text/TextBox.png","height":39}},{"type":"Label","props":{"y":140,"x":378,"text":"图片：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"TextInput","props":{"y":49,"x":461,"width":466,"name":"wordInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"TextInput","props":{"y":134,"x":461,"width":466,"name":"picInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":287,"x":465,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":100,"x":465,"text":"示例：happy,young","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Text","props":{"y":180,"x":465,"text":"示例：bomb1.png, bomb2.png, star.png","fontSize":17,"font":"FF","color":"#666666"}},{"type":"Label","props":{"y":230,"x":378,"text":"字号：","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":221,"x":446,"width":495,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":224,"x":461,"width":466,"name":"fontInput","height":31,"fontSize":16,"color":"#3b3232"}}]},{"type":"Image","props":{"y":681,"x":836,"var":"replayBtn","skin":"common/replay-disabled.png"}},{"type":"Text","props":{"y":698,"x":837,"width":168,"valign":"top","text":"Replay","strokeColor":"#000000","stroke":5,"height":39,"fontSize":27,"font":"FF","color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.TurntableUI.uiView);

        }

    }
}
