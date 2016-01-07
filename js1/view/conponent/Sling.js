define(["./base/SpriteBase"], function (SpriteBase) {


    // First - the subclass constructor
    var Sling = function (state) {
        //call the superclass constructor
        SpriteBase.call(this, state, state.textures['arrow'], 0, 0, false);
    };
    //Second - extend the class
    Kiwi.extend(Sling, SpriteBase);

    return Sling;


})


