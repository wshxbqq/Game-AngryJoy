define(["../conponent/LotteryPanel"],function(e){var t={};return t.show=function(e){var t=new Kiwi.GameObjects.StaticImage(e,e.textures.fail_panel,0,0);Common.putToCenter(t),t.transform.scale=0,e.addChild(t);var n=e.game.tweens.create(t);n.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),n.onComplete(function(){window.setTimeout(function(){var n=new Kiwi.GameObjects.Sprite(e,e.textures.battle_again_btn,t.x+100,t.y+160);n.transform.scale=0,e.addChild(n);var r=e.game.tweens.create(n);r.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),r.onComplete(function(){}),r.start(),n.input.onRelease.add(function(){location.reload()},e),e.addChild(n)},500)}),n.start()},window.SorryPanel=t,t});