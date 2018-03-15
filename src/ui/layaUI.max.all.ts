
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BalloonUI extends View {
		public shake:Laya.FrameAnimation;
		public blast:Laya.FrameAnimation;
		public picture:Laya.Image;
		public blastImg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":128,"height":250},"child":[{"type":"Image","props":{"y":2,"x":10,"var":"picture","skin":"HitBalloon/balloon-1.png"},"compId":2},{"type":"Image","props":{"y":-5,"x":-37,"width":190,"var":"blastImg","skin":"HitBalloon/blast.png","height":150}},{"type":"Text","props":{"y":49,"x":0,"width":128,"var":"word","text":"computer","strokeColor":"#ffffff","stroke":2,"height":30,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":19},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20}]}}],"name":"shake","id":1,"frameRate":10,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":-9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18}],"x":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":7},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":8},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":9},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":11},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":12},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":13},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":14},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":16},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":18}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":18}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":18}]}}],"name":"blast","id":2,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BalloonUI.uiView);

        }

    }
}

module ui {
    export class BalloonOppositesUI extends View {
		public startBtn:Laya.Button;
		public replayBtn:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public wellDone:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"BalloonOpposites/bg.jpg"}},{"type":"Text","props":{"y":54,"x":318,"width":405,"text":"Find the opposites","height":59,"fontSize":45,"color":"#e3e345","bold":true}},{"type":"Button","props":{"y":346,"x":423,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Image","props":{"y":348,"x":426,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":91,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","height":235,"alpha":1}},{"type":"Label","props":{"y":55,"x":558,"text":"左边：","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":46,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"Label","props":{"y":100,"x":558,"text":"右边：","fontSize":20,"color":"#2a2121"}},{"type":"TextInput","props":{"y":49,"x":641,"width":286,"name":"leftInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"TextInput","props":{"y":94,"x":641,"width":286,"name":"rightInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":151,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}}]},{"type":"Text","props":{"y":135,"x":141,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"color":"#17a817","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":256,"x":336,"var":"wellDone","skin":"BalloonOpposites/bg_welldone.png"},"child":[{"type":"Label","props":{"y":95,"x":60,"text":"Well done","fontSize":50,"color":"red"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BalloonOppositesUI.uiView);

        }

    }
}

module ui {
    export class HitBalloonUI extends View {
		public startBtn:Laya.Button;
		public replayBtn:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;
		public wellDone:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitBalloon/mainBG.png"}},{"type":"Text","props":{"y":28,"x":276,"text":"Look and match.","fontSize":55,"color":"#e3e345","bold":true}},{"type":"Button","props":{"y":346,"x":423,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Image","props":{"y":348,"x":426,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","height":235,"alpha":1}},{"type":"Label","props":{"y":75,"x":558,"text":"单词：","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":66,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":69,"x":641,"width":286,"name":"textInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":151,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":112,"x":634,"text":"示例：\bhorse:horse.png,fish:fish.png","fontSize":17,"color":"#666666"}}]},{"type":"Text","props":{"y":135,"x":141,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"color":"#17a817","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Image","props":{"y":256,"x":261,"var":"wellDone","skin":"common/well-done.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitBalloonUI.uiView);

        }

    }
}

module ui {
    export class PictureUI extends View {
		public picture:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":204,"height":204},"child":[{"type":"Image","props":{"y":113,"x":5,"skin":"HitBalloon/pic_bg.png"}},{"type":"Image","props":{"y":44,"x":43,"var":"picture","skin":"HitBalloon/ball.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PictureUI.uiView);

        }

    }
}
