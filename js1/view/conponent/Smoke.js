define([], function () {

    // First - the subclass constructor
    var Smoke = {};
    window.Smoke = Smoke;
    Smoke.showAt = function (position) {
        var smoke = new Kiwi.GameObjects.Sprite(gameState, gameState.textures['smoke_moon_cake_expload'], position.x, position.y, true);
        smoke.counter = 0;
        

        smoke.animation.add('expload', [0, 1, 2], 0.1, true);
        smoke.animation.play('expload');
        gameState.addChild(smoke);
        

        smoke.animation.getAnimation("expload").onUpdate.add(function () {
            
            smoke.counter++;
            if (smoke.counter >= 3) {
                smoke.animation.stop();
                window.setTimeout(function () { smoke.parent.removeChild(smoke) }, 1);
                
            }

        }, gameState);

    }
    Smoke.showBy = function (sprite) {
        var width=sprite.box.bounds.width;
        var height = sprite.box.bounds.height;
        var x = sprite.x;
        var y = sprite.y;
        Smoke.showAt({x:x+width/2,y:y+height/2});

    }
    return Smoke;


})


