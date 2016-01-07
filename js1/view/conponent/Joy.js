define(["./base/SpriteBase"], function (SpriteBase) {


    // First - the subclass constructor
    var Joy = function (state) {
        //call the superclass constructor



        Joy.call(this, state, state.textures['characterSprite'], 0, 0, false);


        Joy.prototype.init = function () {
            this.animation.add('idleright', [0], 0.1, false);
            this.animation.add('moveright', [2, 3, 4, 5, 6, 7], 0.1, true);
           
        }
    };
    //Second - extend the class
    Kiwi.extend(Joy, SpriteBase);

    return Joy;


})


