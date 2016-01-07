define(["./base/sharePanel"], function (sharePanel) {
    var AgainStagePanel = {};
    AgainStagePanel.show = function (gameState) {
        var panel = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['againPanel1'], 0, 0);        Common.putToCenter(panel);        panel.transform.scale = 0;        gameState.addChild(panel);


        var tween = gameState.game.tweens.create(panel);
        tween.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
        tween.onComplete(function () {
            sharePanel.showAtPosition(panel, {x:47,y:250});
            var nextBtn = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['againBtn'], panel.x + 120, panel.y + 150);
            nextBtn.transform.scale = 0;            gameState.addChild(nextBtn);


            var tween1 = gameState.game.tweens.create(nextBtn);
            tween1.to({ scaleX: 1.0, scaleY: 1.0 }, 300, Kiwi.Animations.Tweens.Easing.Linear.None, false);
            tween1.onComplete(function () {

            });
            tween1.start();
            nextBtn.input.onRelease.add(function () {
                window.setTimeout(function () {
                    initWorld(); gameState.clear(); gameState.create(window.GLOBAL.STAGE_CFG.idx);
                }, 1);
                

            }, gameState);
            gameState.addChild(nextBtn);
        });
        tween.start();

    


       

 
       

    }
    window.AgainStagePanel = AgainStagePanel;
    return AgainStagePanel;


})


