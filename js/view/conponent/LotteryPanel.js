define(["../conponent/GoGetRewardPanel","../conponent/SorryPanel"],function(){var e={};return e.show=function(e){window.lpanel=new Kiwi.GameObjects.StaticImage(e,e.textures.lottery_panel,0,0),lpanel.transform.scale=.1,e.addChild(lpanel);var t=new Kiwi.GameObjects.StaticImage(e,e.textures.lottery_title,450,50);e.addChild(t);var n=e.game.tweens.create(lpanel);n.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),n.onComplete(function(){}),n.start();var r=[];for(var i=0;i<3;i++){var s=this;window.setTimeout(function(t){return function(){var n=new Kiwi.GameObjects.Sprite(e,e.textures.deng,300+290*t+1,200);n.transform.scale=.5;var i=e.game.tweens.create(n);i.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),i.onComplete(function(){}),i.start(),e.addChild(n),r.push(n),n.input.onUp.add(function(t){n.input.onUp.removeAll();var i=Common.getSeedLottery(),s=e.game.tweens.create(t);s.to({x:600,y:205},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),s.onComplete(function(n){var r=new Kiwi.GameObjects.Sprite(e,e.textures["deng"+i],t.x,200);r.alpha=0,e.addChild(r);var s=e.game.tweens.create(r);s.to({alpha:1},500,Kiwi.Animations.Tweens.Easing.Linear.None,!1),s.onComplete(function(e){}),s.start();var o=e.game.tweens.create(t);o.to({alpha:0},500,Kiwi.Animations.Tweens.Easing.Linear.None,!1),o.onComplete(function(e){}),o.start(),window.setTimeout(function(){i?(GoGetRewardPanel.show(e),dc.log(null,6,1)):(SorryPanel.show(e),dc.log(null,6,0))},1500)}),s.start();for(var o=0;o<r.length;o++){var u=r[o];if(u!=t){var a=e.game.tweens.create(u);a.to({alpha:0,scaleX:0,scaleY:0},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),a.onComplete(function(e){}),a.start()}}},s)}}(i),(i+1)*200)}},window.LotteryPanel=e,e});