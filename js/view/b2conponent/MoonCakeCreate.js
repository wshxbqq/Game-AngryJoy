define(["../conponent/Smoke"],function(e){var t=function(t){var n=new b2BodyDef;n.type=b2Body.b2_dynamicBody;var r=new b2FixtureDef;r.density=t.density,r.friction=t.friction,r.restitution=t.restitution,r.shape=new b2CircleShape,r.shape.SetRadius(t.radius/window.GLOBAL.PTM_RATIO),n.fixedRotation=!0,n.position.Set(t.x/window.GLOBAL.PTM_RATIO,t.y/window.GLOBAL.PTM_RATIO);var i=world.CreateBody(n);return i.CreateFixture(r),i.SetAngle(t.rotation*Math.PI/180),i.gameCfg=t,i.SetUserData(1),i.explod=function(){window.setTimeout(function(){world.DestroyBody(i);var t=i.GetUserData();e.showBy(t),t.parent.removeChild(t)},0)},window.MoonCake=i,n};return t});