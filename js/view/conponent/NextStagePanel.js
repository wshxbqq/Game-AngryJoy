define(["./base/sharePanel"],function(e){var t={};return t.show=function(t){var n=new Kiwi.GameObjects.StaticImage(t,t.textures.againPanel0,0,0);Common.putToCenter(n),n.transform.scale=0,t.addChild(n);var r=t.game.tweens.create(n);r.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),r.onComplete(function(){e.showAtPosition(n,{x:47,y:250}),window.setTimeout(function(){var e=new Kiwi.GameObjects.Sprite(t,t.textures.nextBtn,n.x+120,n.y+150);e.transform.scale=0,t.addChild(e);var r=t.game.tweens.create(e);r.to({scaleX:1,scaleY:1},300,Kiwi.Animations.Tweens.Easing.Linear.None,!1),r.onComplete(function(){}),r.start(),e.input.onRelease.add(function(){window.setTimeout(function(){window.GLOBAL.CurrentStage++,Common.releaseGarbage(),initWorld(),t.clear(),t.create()},1)},t),t.addChild(e)},500)}),r.start()},window.NextStagePanel=t,t});