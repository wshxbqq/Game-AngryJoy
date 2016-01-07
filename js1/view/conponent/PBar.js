define([], function () {
    var PBar = {};
    PBar.show = function (gameState) {
        var panel = new Kiwi.GameObjects.StaticImage(gameState, gameState.textures['pbarbg'], 200, 60);        gameState.addChild(panel);

        var pbarjoy = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['pbarjoy'], panel.x + 50 * window.GLOBAL.CurrentStage, panel.y);
        gameState.addChild(pbarjoy);

        for (var i = 0; i < window.GLOBAL.CurrentStage; i++) {
            
            var pbarover = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['pbarover'], panel.x + 50 * i, panel.y);
            gameState.addChild(pbarover);

        }
    }


    window.PBar = PBar;
    return PBar;


})


