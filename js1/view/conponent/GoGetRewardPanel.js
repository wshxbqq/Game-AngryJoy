define([
  "../conponent/LotteryPanel",
    "./base/sharePanel"
], function (LotteryPanel, sharePanel) {
    var GoGetRewardPanel = {};
     
    GoGetRewardPanel.show = function (gameState) {
        var panel = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['success_panel'], 0, 0);        Common.putToCenter(panel);        panel.transform.scale = 0;        gameState.addChild(panel);


        var tween = gameState.game.tweens.create(panel);
        tween.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
        tween.onComplete(function () {
            sharePanel.showAtPosition(panel, { x: 47, y: 275 });
            window.setTimeout(function () {
                var nextBtn = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['success_get_cupon_btn'], panel.x + 100, panel.y + 175);
                nextBtn.transform.scale = 0;                gameState.addChild(nextBtn);


                var tween1 = gameState.game.tweens.create(nextBtn);
                tween1.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                tween1.onComplete(function () {

                });
                tween1.start();
                nextBtn.input.onRelease.add(function () {
                    var ifr = '<iframe  id="ifr_inner" width="100%" height="450" src="http://sale.jd.com/act/SXNkh0rO3YgT.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>';
                    $("body").html(ifr);

                }, gameState);
                gameState.addChild(nextBtn);

            }, 500);




        });
        tween.start();


 
       

    }
    window.GoGetRewardPanel = GoGetRewardPanel;
    return GoGetRewardPanel;


})


