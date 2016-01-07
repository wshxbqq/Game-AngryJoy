/// <reference path="../lib/b2.js" />
/// <reference path="../lib/jquery.js" />
/// <reference path="../lib/kiwi.js" />
/// <reference path="../../lib/underscore.js" />

 
//13410702401
define([
    "../../common/Common",
    "../b2conponent/WallCreate",
    "../b2conponent/BodyCreate",
    "../b2conponent/MoonCakeCreate",
    "../b2conponent/JoyCreate",
    
     

    "../b2conponent/SlingshotCreate",
    "../conponent/PBar",
    "../conponent/NextStagePanel",
    "../conponent/AgainStagePanel",
    "../conponent/StageOverPanel",
     "../conponent/LotteryPanel",
     

     "../conponent/Smoke"
], function (
    Common,
    WallCreate,
    BodyCreate,
    MoonCakeCreate,
    JoyCreate,
 
    SlingshotCreate,
    PBar,
    NextStagePanel,
    AgainStagePanel,
    StageOverPanel,
    LotteryPanel,

    Smoke


    )

{


    
    var gameState = window.gameState = new Kiwi.State('gameState');

    gameState.preload = function () {
        Kiwi.State.prototype.preload.call(this);

        var _this = this;
        this.addImage('s_sina', 'img/s_sina.png');
        this.addImage('s_douban', 'img/s_douban.png');
        this.addImage('s_tx', 'img/s_tx.png');
        this.addImage('s_renren', 'img/s_renren.png');

        this.addImage('particle1', 'img/particle_01.png');
        this.addImage('particle2', 'img/particle_02.png');
        this.addImage('particle3', 'img/particle_03.png');
        this.addImage('mainbg', 'img/mainbg.jpg');
        this.addImage('sling1', 'img/sling1.png');
        this.addImage('sling2', 'img/sling2.png');

        this.addImage('againPanel0', 'img/again/againPanel0.png');
        this.addImage('againPanel1', 'img/again/againPanel1.png');
        this.addImage('againPanel2', 'img/again/againPanel2.png');
        this.addImage('againPanel1', 'img/again/againPanel1.png');
        this.addImage('againBtn', 'img/again/againBtn.png');
        this.addImage('getRewardBtn', 'img/again/getRewardBtn.png');
        this.addImage('nextBtn', 'img/again/nextBtn.png');

        
        this.addImage('lottery_panel', 'img/lottery_panel.jpg');
        

        this.addImage('pbarover', 'img/pbar/pbarover.png');
        this.addImage('pbarbg', 'img/pbar/pbarbg.png');
        this.addImage('pbarjoy', 'img/pbar/pbarjoy.png');

        this.addImage('deng', 'img/deng/deng.png');
        this.addImage('deng0', 'img/deng/deng0.png');
        this.addImage('deng1', 'img/deng/deng1.png');
        this.addImage('success_get_cupon_btn', 'img/deng/success_get_cupon_btn.png');
        this.addImage('lottery_title', 'img/deng/lottery_title.png');
        this.addImage('success_panel', 'img/deng/success_panel.png');
        this.addImage('fail_panel', 'img/deng/fail_panel.png');
        this.addImage('battle_again_btn', 'img/deng/battle_again_btn.png');

        this.addImage('sling_mid', 'img/sling_mid.png');
        this.addImage('slingTuo', 'img/slingTuo.png');

        this.addImage('particle1', 'img/particle_01.png');
 
        this.addImage('white_dot', 'img/white_dot.png');

        this.addSpriteSheet('joy', 'img/joy.png', 65, 65);
        this.addSpriteSheet('smoke_moon_cake_expload', 'img/smoke_moon_cake_expload.png', 42, 42);

        this.addSpriteSheet('moon_cake_g', 'img/moon_cake_g.png', 40,40);
        this.addSpriteSheet('moon_cake_p', 'img/moon_cake_p.png', 50, 50);
        this.addSpriteSheet('moon_cake_y', 'img/moon_cake_y.png', 40, 40);

        for (var i = 1; i <= window.GLOBAL.StageCount; i++) {
            _.each(window.Stages["stage" + i].bodys, function (cfg) {
                if (cfg.extType != "mooncake") {
                    _this.addImage(cfg.asset, "img/stage/" + cfg.asset + '.png');
                }
                
            })
        }

    }

   

    gameState.create = function (stageIndex) {
        $("#share_a").remove();
        window.___joyRemoveTimeOut = 0;
        window.Stage_Start_DateTime = new Date();
        var storyScenceOpened = $.cookie('storyScenceOpened');
        $(document).ready(function () {
            if (storyScenceOpened) {
                //window.parent.$("#loadingBg").remove();
            }
        });
       
        Kiwi.State.prototype.create.call(this);
        Common.garbageArray = [];
        Common.garbageArray1 = [];
         
        if (window.JOY_RELOAD_INTERVAL) {
            window.clearTimeout(window.JOY_RELOAD_INTERVAL);
        }
        var loadingBg = window.parent.$("#loadingBg");

        if (loadingBg.size()) {
            loadingBg.find("#startBtn").attr("src", "img/loading/startBtn.png")
            .click(function (e) {
                loadingBg.fadeOut(400, function () {
                    loadingBg.remove();
                    $.cookie('storyScenceOpened', '1', { expires: 30, path: '/' });
                });

            });
            window.setTimeout(function () {
                window.parent.$("#loadingBg").fadeOut(300, function () {
                    window.parent.$("#loadingBg").remove();
                });
            }, 10000);
        }
 
        var _this=this;
 
       var  stageCfg  = window.GLOBAL.getStageConfigObject(stageIndex);
  
        window.GLOBAL.joyCount = stageCfg.joyCount;
        window.GLOBAL.STAGE_CFG = stageCfg;
        window.GLOBAL.UserPlayedStages.push(stageCfg.idx);
        _.each(stageCfg.bodys, function (cfg) {
            switch (cfg.extType) {
                case "body": BodyCreate(cfg);break;
                case "mooncake": MoonCakeCreate(cfg); break;
            }
            
        });

        WallCreate();
       
 
        Common.showStageClearFireWorks(0);
        Common.onFinish(function () {
            var d = new Date();
            var dSpan = d - window.Stage_Start_DateTime;
           
            if (Common.hasMoonCake()) {
                AgainStagePanel.show(gameState);
                dc.log(null, 4, window.GLOBAL.STAGE_CFG.idx + "_0_" + dSpan);
            } else {
                dc.log(null, 4, window.GLOBAL.STAGE_CFG.idx + "_1_" + dSpan);
                if (window.GLOBAL.CurrentStage == 2) {
                    window.setTimeout(function () {
                        Common.showStageClearFireWorks(1);
                    }, 1000);


                    window.setTimeout(function () {
                        StageOverPanel.show(gameState);
                    }, 2000);

                } else {

               
                    window.setTimeout(function () {
                        Common.showStageClearFireWorks(1);
                    }, 1000);
                

                    window.setTimeout(function () {
                        NextStagePanel.show(gameState);
                    }, 2000);
                
                   
                }
            }
        });

  
        this.mainbg = new Kiwi.GameObjects.StaticImage(this, this.textures['mainbg'], 0, 0);
        this.addChild(this.mainbg);

 
        this.initSling();
        this.initJoys();
     



        this.joyOnSling();



        Common.eachB2Body(function (b) {
            if (b.extType != "joy") {
                var sprite = new Kiwi.GameObjects.Sprite(_this, _this.textures[b.gameCfg.asset], 0, 0);
                Common.setCenterPositionToSprite(sprite, { x: b.gameCfg.x, y: b.gameCfg.y});
                _this.addChild(sprite);
                b.SetUserData(sprite);
            }
        });

        
        Common.kilakila(this)
        PBar.show(this);
    }

    gameState.addSlingMid = function () {
        this.slingMid1 = new Kiwi.GameObjects.Sprite(this, this.textures['sling_mid'], window.GLOBAL.joyPosition.x-15, window.GLOBAL.joyPosition.y);
        this.slingMid1.origonalPosition = {
            x: window.GLOBAL.joyPosition.x - 15,
            y: window.GLOBAL.joyPosition.y
        };
        this.slingMid2 = new Kiwi.GameObjects.Sprite(this, this.textures['sling_mid'], window.GLOBAL.joyPosition.x+20, window.GLOBAL.joyPosition.y);
        this.slingMid2.origonalPosition = {
            x: window.GLOBAL.joyPosition.x+20,
            y: window.GLOBAL.joyPosition.y 
        };
        this.slingMidTuo = new Kiwi.GameObjects.Sprite(this, this.textures['slingTuo'], window.GLOBAL.joyPosition.x, window.GLOBAL.joyPosition.y );
 
        this.addChild(this.slingMid1);
        this.addChild(this.slingMid2);
        this.addChild(this.slingMidTuo);

    }
    gameState.removeSlingMid = function () {
        if (this.slingMid1) {
            this.slingMid1.parent.removeChild(this.slingMid1);
            this.slingMid2.parent.removeChild(this.slingMid2);
            this.slingMidTuo.parent.removeChild(this.slingMidTuo);
        }


    }
    gameState.adjustSlingMid = function () {
        if (this.slingMid1==null) {
            return;
        }
        function adjust(sling) {
            var joyCenterPosition={
                x:window.joy.x+32.5,
                y:window.joy.y+32.5
            }
            var _tA=Common.triangleAngle(joyCenterPosition);
            var _tLongth = Common.triangleDistance(joyCenterPosition)+32.5;
           
            var _tX = window.GLOBAL.joyPosition.x - _tLongth * Math.cos(_tA);
            var _tY = window.GLOBAL.joyPosition.y - _tLongth * Math.sin(_tA);
            var targetPoint = {
                x: _tX,
                y: _tY
            }
            gameState.slingMidTuo.transform.x = _tX-5;
            gameState.slingMidTuo.transform.y = _tY-10;
            gameState.slingMidTuo.rotation = _tA;


            var longth = Common.triangleDistance(targetPoint, sling.origonalPosition);
            
            var percentX = longth / 20;
            var percentY = 20 / longth;
            
            sling.transform.scaleY = percentY;
            var angle = Common.triangleAngle(targetPoint, sling.origonalPosition);
            sling.transform.x = sling.origonalPosition.x - Math.cos(angle) * longth/2-10;
            sling.transform.y = sling.origonalPosition.y - Math.sin(angle) * longth/2-10;
            
            sling.transform.scaleX = percentX;
            sling.transform.rotation = angle;

            
        
        }

 
        adjust(this.slingMid1);
        adjust(this.slingMid2);
    

    }

    gameState.joyOnSling = function () {
       
        window.joy = window.joyArray.shift();
        var tween = this.game.tweens.create(joy);
        tween.to({ x: window.GLOBAL.joyPosition.x - 32.5, y: window.GLOBAL.joyPosition.y - 32.5 }, 400, Kiwi.Animations.Tweens.Easing.Linear.None, false);
        tween.onComplete(function () {
             
        });
        tween.start();
        joy.input.onUp.add(this.joyOnUp, this);
        joy.input.onDown.add(this.joyOnDown, this);
        
    }

    gameState.joyOnDown = function (e) {
        Game.input.mouse.onMouseMove = function (e) {
            var x = e.clientX ;
            var y = e.clientY;
            var p = Common.calculatePosition({ x: x, y: y });
            window.joy.x = p.x - 32.5;
            window.joy.y = p.y - 32.5;
        }
        this.addSlingMid();


         

    }
    gameState.joyOnUp = function (e) {
        this.removeSlingMid();
        this.joyRelease({ x: window.joy.x + 32.5, y: window.joy.y + 32.5 });
        Game.input.mouse.onMouseMove=function (event) {
            this._cursor.move(event);
        } 

    }
 
    gameState.initJoys = function () {
        window.joyArray = [];
        var i=0;
        for (; i < window.GLOBAL.joyCount; i++) {
            var j = new Kiwi.GameObjects.Sprite(this, this.textures['joy'], 150+80*i, 310);
            this.addChildBefore(j, this.sling1);
            this.animation.add('fly', [0,1], 0.2, true);
            joyArray.push(j);
        }
  

    }
    gameState.initSling = function () {

        this.sling1 = new Kiwi.GameObjects.StaticImage(this, this.textures['sling1'], 160, 245);
        this.sling2 = new Kiwi.GameObjects.StaticImage(this, this.textures['sling2'], 204, 250);

        this.addChildAfter(this.sling2, this.mainbg);
        this.addChild(this.sling1);

    }

    gameState.bindContact = function () {

        function beginContact(contact) {
           
 
            var A = contact.GetFixtureA().GetBody();
            var B = contact.GetFixtureB().GetBody();


            if (A.gameCfg) {
                if (A.gameCfg.extType == "mooncake") {
                    //console.log(Common.calculateDamage(A));
                    //A.gameCfg.hp -= Common.calculateDamage(A);
                    //if (A.gameCfg.hp < 0) {
                    //    A.explod();
                    //}
                }

             



            }
   
    
            if (B.gameCfg) {
                if (B.gameCfg.extType == "mooncake") {
                    var dam = Common.calculateDamage(A);
                    var dam1 = Common.calculateDamage(B);
                    dam = dam > dam1 ? dam : dam1;
 
                    B.gameCfg.hp -= dam;
                     
                    if (B.gameCfg.hp < 0) {
                        B.explod();
                    }
                }

                if (B.gameCfg.extType == "joy") {
                    
                    if (window.___joyRemoveTimeOut) {
                        return;
                    }
                    window.___joyRemoveTimeOut = 1;
                    window.JOY_RELOAD_INTERVAL=window.setTimeout(function () {
                        world.DestroyBody(window.B2Joy1);
                        Smoke.showBy(joy1);
                        joy1.parent.removeChild(joy1);
                        
                        window.___joyRemoveTimeOut = 0;
                        if (window.joyArray.length) {
                            gameState.joyOnSling();
                        }


                    },5000);
                }

            }

        };
        var contactListener = new b2ContactListener();
        contactListener.BeginContact = beginContact;
        //contactListener.EndContact = endContact;
        //contactListener.PreSolve = preSolve;
        //contactListener.PostSolve = postSolve;
        world.SetContactListener(contactListener);
    }

    gameState.joyRelease = function (pObj) {
        Common.setMoonRotationNoneFix();
        JoyCreate(window.JoyConfig);
        window.B2Joy.SetUserData(joy); 
        world.ClearForces();
        var power = Common.getPower(pObj);
        
        B2Joy.ApplyImpulse(new b2Vec2(power.x, power.y), B2Joy.GetWorldCenter());
        window.GLOBAL.joyCount--;
        this.bindContact();

        window.joy.animation.play('fly');
        window.B2Joy1 = window.B2Joy;
        window.joy1 = window.joy;
        Common.eachB2Body(function (b) {
            if (b.gameCfg.extType == "mooncake") {
                var moonCake = b.GetUserData();;
                moonCake.animation.add('fear', [1], 1, true);
                moonCake.animation.play('fear');
            }
        });
    }

    gameState.update = function () {
        var _this = this;
        Kiwi.State.prototype.update.call(this);
        Common.eachB2Body(function (b) {
            var sprite = b.GetUserData();
            Common.setCenterPositionToSprite(sprite, { x: b.GetPosition().x * window.GLOBAL.PTM_RATIO, y: b.GetPosition().y * window.GLOBAL.PTM_RATIO });
            sprite.rotation = b.GetAngle();
    
        });
        this.adjustSlingMid();
    }


    return gameState;


});