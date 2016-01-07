define([], function () {
    var Common = window.Common = {};
 
    Common.eachB2Body = function (cb) {
 
        var bList = world.GetBodyList();
        while (bList) {
            var b = bList;
            var bList = bList.GetNext();
            if (b.GetUserData()) {
                if (b.extType != "wall") {
                    cb(b);
                }
            }
        }
 

    }

    Common.setCenterPositionToSprite = function (sprite,position) {
 
        sprite.x = position.x - sprite.width / 2;

        sprite.y = position.y - sprite.height / 2;

    }
    Common.hasMoonCake = function () {
        var flag = false;
        Common.eachB2Body(function (b) {
            if (b.gameCfg) {
                if (b.gameCfg.extType == "mooncake") {
                    flag = true;
                }
              

            }
        });

        return flag;


    }
 
    Common.removeBody = function (body) {
        var bList = world.GetBodyList();
        while (bList) {
            var b = bList;
            var bList = bList.GetNext();
            if (b.GetUserData()) {
                if (b == body) {
                    world.DestroyBody(body);
                    break;
                }
            }
        }
    }


    Common.setJoyDamping = function () {
        var ld = 0;
        window.joyDampingInterval= window.setInterval(function () {
            ld += 0.1;
            window.B2Joy.SetLinearDamping(ld);
            var Vd=B2Joy.GetLinearVelocity();
            Vd=Math.sqrt(Vd.x*Vd.x+Vd.y*Vd.y);
            if(Vd<0.02){
                window.B2Joy.SetAwake(0)
            }
            

        }, 100);

    }

    Common.unSetJoyDamping = function () {
        window.clearInterval(window.joyDampingInterval);
        window.B2Joy.SetLinearDamping(0)

    }


    Common.setMoonRotationNoneFix = function () {
        Common.eachB2Body(function (b) {
            if (b.gameCfg) {
                if (b.gameCfg.extType == "mooncake") {
                    b.SetFixedRotation(0)
                }
            }
            

        });

    }

    Common.calculateDamage = function (body) {
        var Vd=body.GetLinearVelocity();
        Vd=Math.sqrt(Vd.x*Vd.x+Vd.y*Vd.y)
        return Vd * body.GetMass();


    }

    Common.isAllSleep = function () {
        var flag = true;
        Common.eachB2Body(function (b) {
            if (b.IsAwake()) {
 
                flag = false;
               
            }
        });

        return flag;
    }



    Common.triangleDistance = function (pObj, conditionPosition) {
        if (!conditionPosition) {
            conditionPosition = window.GLOBAL.joyPosition;
        }
        var d = 0;
        d = Math.sqrt(
            (pObj.x - conditionPosition.x) * (pObj.x - conditionPosition.x)
            +
            (pObj.y - conditionPosition.y) * (pObj.y - conditionPosition.y)
            );
        return d;
    }

    Common.triangleAngle = function (pObj, conditionPosition) {
        if (!conditionPosition) {
            conditionPosition = window.GLOBAL.joyPosition;
        }
        return Math.atan2((conditionPosition.y - pObj.y), (conditionPosition.x - pObj.x));

    }


    Common.triangleAngleDeg = function (pObj, conditionPosition) {

        var angel = Comment.triangleAngle(pObj, conditionPosition);
        return angel*180/Math.PI

    }

    Common.calculatePosition = function (pObj) {
        if (Common.triangleDistance(pObj) <= window.GLOBAL.maxDistance) {
            return pObj;
        } else {
            var angle = Common.triangleAngle(pObj);
            return {
                x: window.GLOBAL.joyPosition.x-window.GLOBAL.maxDistance * Math.cos(angle),
                y: window.GLOBAL.joyPosition.y-window.GLOBAL.maxDistance * Math.sin(angle)
            }

        }
    }



    Common.getPower = function (pObj) {
        var distance = Common.triangleDistance(pObj);
        distance = distance > window.GLOBAL.maxDistance ? window.GLOBAL.maxDistance : distance;
        distance = distance * window.GLOBAL.maxPower / window.GLOBAL.maxDistance;
        var angle = Common.triangleAngle(pObj);
        var x = distance * Math.cos(angle);
        var y = distance * Math.sin(angle);
        return {x:x,y:y}
    }

    Common.onFinish = function (cb) {
        var fCounter = 0;
        window.clearInterval(window.finsishInterval);
        window.finsishInterval = window.setInterval(function () {
            if (!Common.hasMoonCake()) {
                cb();
                window.clearInterval(window.finsishInterval);
            }
            if (window.GLOBAL.joyCount == 0) {
                fCounter++;
                if (Common.isAllSleep()) {
                    window.clearInterval(window.finsishInterval);
                    cb();
                    return;
                };

                if (fCounter > 120) {
                    window.clearInterval(window.finsishInterval);
                    cb();
                    return;
                    
                }
            }
         

        }, 100);

    }

    Common.putToCenter = function (obj) {
        obj.transform.x = (window.GLOBAL.canvasSize.width - obj.width) / 2;
        obj.transform.y = (window.GLOBAL.canvasSize.height - obj.height) / 2;
        
    }
 









    Common.kilakila = function (stage) {
        if (!window.s_gl) { return; }
        var particle = new Kiwi.GameObjects.StatelessParticles(stage, stage.textures.particle3, window.GLOBAL.canvasSize.width/2, 0, window.GLOBAL.particleCfg3);
        particle.startEmitting(true);
        stage.addChild(particle);
    }


    Common.fireExplode = function (stage, x, y) {
        if (!window.s_gl) { return; }
        var particle = new Kiwi.GameObjects.StatelessParticles(stage, stage.textures.particle1, x, y, window.GLOBAL.particleCfg1);
        particle.startEmitting(false);
        stage.addChild(particle);

    }
    Common.garbageArray = [];
    Common.garbageArray1 = [];
    Common.releaseGarbage = function () {
        for (var i = 0; i < Common.garbageArray.length; i++) {
            window.clearTimeout(Common.garbageArray.pop());

        }
        for (var i = 0; i < Common.garbageArray1.length; i++) {
            
            Common.garbageArray1[i].stop();
        }
    }
    Common.getSeedLottery = function () {
        return 1;
        //if (Math.random() > 0.5) {
        //    return 0;
        //} else {
        //    return 1;
        //}
    }
    Common.showFireWorks = function (stage, x, y, delay,flag) {
        if (!window.s_gl) { return; }
        var particle = new Kiwi.GameObjects.StatelessParticles(stage, stage.textures.particle2, x, window.GLOBAL.canvasSize.height + 100, window.GLOBAL.particleCfg2);
        particle.startEmitting(true);
        
        var _i = window.setTimeout(function () {
            if (flag) {
                stage.addChild(particle);
            } else {
                stage.addChildBefore(particle, stage.mainbg);
            }
            
            var tween = gameState.game.tweens.create(particle);
            tween.to({ x: x, y: y }, 700, Kiwi.Animations.Tweens.Easing.Linear.None, false);
            tween.onComplete(function () {
                var particle1 = new Kiwi.GameObjects.StatelessParticles(stage, stage.textures.particle1, x + 70, y + 50, window.GLOBAL.particleCfg1);
                 
                particle1.startEmitting(false);
                 
                if (flag) {
                    stage.addChild(particle1);
                } else {
                    stage.addChildBefore(particle1, stage.mainbg);
                }
                particle.stopEmitting(false, false);
            });
            tween.start();
            Common.garbageArray1.push(tween);
        }, delay);
        Common.garbageArray.push(_i);

    }


    Common.showStageClearFireWorks = function (flag) {
        if (!window.s_gl) { return; }
        Common.showFireWorks(gameState, 170, 80, 1000, flag);
        Common.showFireWorks(gameState, 850, 140, 1400, flag);
        Common.showFireWorks(gameState, 440, 100, 1800, flag);
        Common.showFireWorks(gameState, 1028, 160, 2000, flag);


    }

    return Common;


})


