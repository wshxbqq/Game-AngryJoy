define(["./base/SpriteBase"],function(e){var t=function(e){t.call(this,e,e.textures.characterSprite,0,0,!1),t.prototype.init=function(){this.animation.add("idleright",[0],.1,!1),this.animation.add("moveright",[2,3,4,5,6,7],.1,!0)}};return Kiwi.extend(t,e),t});