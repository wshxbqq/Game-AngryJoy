define([
      "../conponent/GoGetRewardPanel",
     "../conponent/SorryPanel"
], function () {
    var LotteryPanel = {};
    LotteryPanel.show = function (gameState) {
        window.lpanel = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['lottery_panel'], 0,0);        lpanel.transform.scale = 0.1;        gameState.addChild(lpanel);

        var lotteryTitle = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['lottery_title'], 450, 50);
        gameState.addChild(lotteryTitle);

        var tween = gameState.game.tweens.create(lpanel);
        tween.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
        tween.onComplete(function () {

        });
        tween.start();

        var lotteryArr = [];
        for (var i = 0; i < 3; i++) {
            var _this = this;
            window.setTimeout((function (_i) {
                return function () {

                    var lcard = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['deng'], 300 + 290 * _i + 1, 200);
                    lcard.transform.scale = 0.5
                    var tweenCard = gameState.game.tweens.create(lcard);
                    tweenCard.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                    tweenCard.onComplete(function () {

                    });
                    tweenCard.start();

                    gameState.addChild(lcard);
                    lotteryArr.push(lcard);
                    lcard.input.onUp.add(function (e) {
                        lcard.input.onUp.removeAll()
                        var flag = Common.getSeedLottery();
                        

                        var tween1 = gameState.game.tweens.create(e);
                        tween1.to({ x:600,y:205 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                        tween1.onComplete(function (t) {
                            var lcardInner = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['deng' + flag], e.x, 200);
                            lcardInner.alpha = 0;
                            gameState.addChild(lcardInner);

                            var tween = gameState.game.tweens.create(lcardInner);
                            tween.to({ alpha: 1}, 500, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                            tween.onComplete(function (t) { });
                            tween.start();
                            
                            var tween2 = gameState.game.tweens.create(e);
                            tween2.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                            tween2.onComplete(function (t) { });
                            tween2.start();
                            window.setTimeout(function () {
                                if (flag) {
                                    GoGetRewardPanel.show(gameState);
                                    dc.log(null, 6, 1);
                                }
                                else {
                                    SorryPanel.show(gameState);
                                    dc.log(null, 6, 0);
                                }
                            }, 1500);
                           

                        });
                        tween1.start();

                        for (var j = 0; j < lotteryArr.length; j++) {
                            var s = lotteryArr[j];
                            if (s != e) {

                                var tween = gameState.game.tweens.create(s);
                                tween.to({ alpha:0 ,scaleX:0,scaleY:0}, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                                tween.onComplete(function (t) {});
                                tween.start();

                                

                                
                            }


                        }
                    }, _this);

                }
            })(i), (i+1) * 200);
           
        }


 
       

    }
    window.LotteryPanel = LotteryPanel;
    return LotteryPanel;


})


