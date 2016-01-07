define(["./base/SpriteBase"], function (SpriteBase) {

    // First - the subclass constructor
    var BgSprite = function (state) {
        //call the superclass constructor
        SpriteBase.call(this, state, state.textures['background'], 0, 0, false);

        BgSprite.prototype.create = function () {
            Kiwi.GameObjects.Sprite.prototype.create.call(this);
        }

    };
    //Second - extend the class
    Kiwi.extend(BgSprite, SpriteBase);

    return BgSprite;


})


