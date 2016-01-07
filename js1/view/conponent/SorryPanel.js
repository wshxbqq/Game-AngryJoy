define([
    "../conponent/LotteryPanel"
], function (LotteryPanel) {
    var SorryPanel = {};
    SorryPanel.show = function (gameState) {
        var panel = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['fail_panel'], 0, 0);        Common.putToCenter(panel);        panel.transform.scale = 0;        gameState.addChild(panel);


        var tween = gameState.game.tweens.create(panel);
        tween.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
        tween.onComplete(function () {

            window.setTimeout(function () {
                var nextBtn = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['battle_again_btn'], panel.x + 100, panel.y + 160);
                nextBtn.transform.scale = 0;                gameState.addChild(nextBtn);


                var tween1 = gameState.game.tweens.create(nextBtn);
                tween1.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
                tween1.onComplete(function () {

                });
                tween1.start();
                nextBtn.input.onRelease.add(function () {
                    location.reload();

                }, gameState);
                gameState.addChild(nextBtn);

            }, 500);




        });
        tween.start();


 
       

    }
    window.SorryPanel = SorryPanel;
    return SorryPanel;


})


