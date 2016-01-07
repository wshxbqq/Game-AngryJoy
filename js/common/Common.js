define([],function(){var e=window.Common={};return e.eachB2Body=function(e){for(var t=world.GetBodyList();t;){var n=t,t=t.GetNext();n.GetUserData()&&"wall"!=n.extType&&e(n)}},e.setCenterPositionToSprite=function(e,t){e.x=t.x-e.width/2,e.y=t.y-e.height/2},e.hasMoonCake=function(){var t=!1;return e.eachB2Body(function(e){e.gameCfg&&"mooncake"==e.gameCfg.extType&&(t=!0)}),t},e.removeBody=function(e){for(var t=world.GetBodyList();t;){var n=t,t=t.GetNext();if(n.GetUserData()&&n==e){world.DestroyBody(e);break}}},e.setJoyDamping=function(){var e=0;window.joyDampingInterval=window.setInterval(function(){e+=.1,window.B2Joy.SetLinearDamping(e);var t=B2Joy.GetLinearVelocity();t=Math.sqrt(t.x*t.x+t.y*t.y),.02>t&&window.B2Joy.SetAwake(0)},100)},e.unSetJoyDamping=function(){window.clearInterval(window.joyDampingInterval),window.B2Joy.SetLinearDamping(0)},e.setMoonRotationNoneFix=function(){e.eachB2Body(function(e){e.gameCfg&&"mooncake"==e.gameCfg.extType&&e.SetFixedRotation(0)})},e.calculateDamage=function(e){var t=e.GetLinearVelocity();return t=Math.sqrt(t.x*t.x+t.y*t.y),t*e.GetMass()},e.isAllSleep=function(){var t=!0;return e.eachB2Body(function(e){e.IsAwake()&&(t=!1)}),t},e.triangleDistance=function(e,t){t||(t=window.GLOBAL.joyPosition);var n=0;return n=Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},e.triangleAngle=function(e,t){return t||(t=window.GLOBAL.joyPosition),Math.atan2(t.y-e.y,t.x-e.x)},e.triangleAngleDeg=function(e,t){var n=Comment.triangleAngle(e,t);return 180*n/Math.PI},e.calculatePosition=function(t){if(e.triangleDistance(t)<=window.GLOBAL.maxDistance)return t;var n=e.triangleAngle(t);return{x:window.GLOBAL.joyPosition.x-window.GLOBAL.maxDistance*Math.cos(n),y:window.GLOBAL.joyPosition.y-window.GLOBAL.maxDistance*Math.sin(n)}},e.getPower=function(t){var n=e.triangleDistance(t);n=n>window.GLOBAL.maxDistance?window.GLOBAL.maxDistance:n,n=n*window.GLOBAL.maxPower/window.GLOBAL.maxDistance;var i=e.triangleAngle(t),a=n*Math.cos(i),o=n*Math.sin(i);return{x:a,y:o}},e.onFinish=function(t){var n=0;window.clearInterval(window.finsishInterval),window.finsishInterval=window.setInterval(function(){if(e.hasMoonCake()||(t(),window.clearInterval(window.finsishInterval)),0==window.GLOBAL.joyCount){if(n++,e.isAllSleep())return window.clearInterval(window.finsishInterval),void t();if(n>120)return window.clearInterval(window.finsishInterval),void t()}},100)},e.putToCenter=function(e){e.transform.x=(window.GLOBAL.canvasSize.width-e.width)/2,e.transform.y=(window.GLOBAL.canvasSize.height-e.height)/2},e.kilakila=function(e){if(window.s_gl){var t=new Kiwi.GameObjects.StatelessParticles(e,e.textures.particle3,window.GLOBAL.canvasSize.width/2,0,window.GLOBAL.particleCfg3);t.startEmitting(!0),e.addChild(t)}},e.fireExplode=function(e,t,n){if(window.s_gl){var i=new Kiwi.GameObjects.StatelessParticles(e,e.textures.particle1,t,n,window.GLOBAL.particleCfg1);i.startEmitting(!1),e.addChild(i)}},e.garbageArray=[],e.garbageArray1=[],e.releaseGarbage=function(){for(var t=0;t<e.garbageArray.length;t++)window.clearTimeout(e.garbageArray.pop());for(var t=0;t<e.garbageArray1.length;t++)e.garbageArray1[t].stop()},e.getSeedLottery=function(){return 1},e.showFireWorks=function(t,n,i,a,o){if(window.s_gl){var r=new Kiwi.GameObjects.StatelessParticles(t,t.textures.particle2,n,window.GLOBAL.canvasSize.height+100,window.GLOBAL.particleCfg2);r.startEmitting(!0);var w=window.setTimeout(function(){o?t.addChild(r):t.addChildBefore(r,t.mainbg);var a=gameState.game.tweens.create(r);a.to({x:n,y:i},700,Kiwi.Animations.Tweens.Easing.Linear.None,!1),a.onComplete(function(){var e=new Kiwi.GameObjects.StatelessParticles(t,t.textures.particle1,n+70,i+50,window.GLOBAL.particleCfg1);e.startEmitting(!1),o?t.addChild(e):t.addChildBefore(e,t.mainbg),r.stopEmitting(!1,!1)}),a.start(),e.garbageArray1.push(a)},a);e.garbageArray.push(w)}},e.showStageClearFireWorks=function(t){window.s_gl&&(e.showFireWorks(gameState,170,80,1e3,t),e.showFireWorks(gameState,850,140,1400,t),e.showFireWorks(gameState,440,100,1800,t),e.showFireWorks(gameState,1028,160,2e3,t))},e});