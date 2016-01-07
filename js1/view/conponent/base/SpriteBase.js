define([], function () {

    // First - the subclass constructor
    var SpriteBase = function (state, textures,x,y,enableInput) {
        //call the superclass constructor
        Kiwi.GameObjects.Sprite.call(this, state, textures, x, y, enableInput);

        SpriteBase.prototype.setPosttion = function (x, y) {
            this.x  = x;
            this.y  = y;

        }

        SpriteBase.prototype.goto = function (cfg, during, cb) {
            var _this = this;
            var tween = this.game.tweens.create(this);
            tween.to(cfg, during, Kiwi.Animations.Tweens.Easing.Linear.None, false);
            if (cb) {
                tween.onComplete(function () {
                    cb(_this);
                })
            }
            tween.start();
        }

        SpriteBase.prototype.goby = function (cfg, during, cb) {
            var _this = this;
            var tween = this.game.tweens.create(this);
            var _cfg = {};
            for (var i in cfg) {
                _cfg[i] = this[i] + cfg[i]
            }
            tween.to(_cfg, during, Kiwi.Animations.Tweens.Easing.Linear.None, false);
            if (cb) {
                tween.onComplete(function () {
                    cb(_this);
                })
            }
            tween.start();
        }
 


    };
    //Second - extend the class
    Kiwi.extend(SpriteBase, Kiwi.GameObjects.Sprite);

    return SpriteBase;


})


