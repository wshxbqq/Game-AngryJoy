/// <reference path="../lib/b2.js" />
/// <reference path="../lib/jquery.js" />
/// <reference path="../lib/kiwi.js" />

 var gameOptions = {
     renderer: Kiwi.RENDERER_WEBGL,
     width: 1210,
     height: 450,
     debug: Kiwi.DEBUG_OFF
 }
 if (window.s_gl) {
     gameOptions.plugins = ["ParticlesGL"];
     dc.log(null, 2, 1);
 } else {
     dc.log(null, 2, 0);
 }
 


 var Game = new Kiwi.Game('content', 'myGame', null, gameOptions);


function initWorld() { 
 b2Vec2 = Box2D.Common.Math.b2Vec2
        , b2AABB = Box2D.Collision.b2AABB
        , b2BodyDef = Box2D.Dynamics.b2BodyDef
        , b2Body = Box2D.Dynamics.b2Body
        , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        , b2Fixture = Box2D.Dynamics.b2Fixture
        , b2World = Box2D.Dynamics.b2World
        , b2MassData = Box2D.Collision.Shapes.b2MassData
        , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
        , b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
        , b2ContactListener = Box2D.Dynamics.b2ContactListener
;
 
 gravity = new b2Vec2(0, 10);
 world = new b2World(gravity, true);

 if (window.b2Interval) {
     window.clearInterval(window.b2Interval);
 }
 

function update() {
    world.Step(
    1 / 60//帧率
    ,5//速率
    , 3//position iterations
    );
    world.ClearForces();//绘制完毕后清除外力

    //var first = world.GetBodyList();
    //while (first) {
    //    if (!first.GetUserData()) {
    //        first = first.GetNext();
    //        continue;
    //    }
    //    var point = first.GetPosition();
    //    first.GetUserData().applyPosition(point.x * 30-60, point.y * 30-60); 
    //    first.GetUserData().applyRotation(first.GetAngle());

    //    first=first.GetNext()
    //}
};

window.b2Interval=  window.setInterval(update, 1000 / 60);




  }

  initWorld();

require(['view/states/gameState'], function (gameState) {
    Game.states.addState(gameState);
    Game.states.switchState('gameState');

});


 