﻿define([], function () {
    var BoardCreate = function (cfg) {
        var bodydef = new b2BodyDef();
        bodydef.type = b2Body.b2_dynamicBody;

        var fixDef = new b2FixtureDef();
        fixDef.density = cfg.density; //1.0; // desity 密度，如果密度为0或者null，该物体则为一个静止对象
        fixDef.friction = cfg.friction;// 0.5; //摩擦力（0~1）
        fixDef.restitution = cfg.restitution;//0.5;// 弹性（0~1）

        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(cfg.width / 2 / window.GLOBAL.PTM_RATIO, cfg.height / 2 / window.GLOBAL.PTM_RATIO);
        bodydef.position.Set(cfg.x / window.GLOBAL.PTM_RATIO, cfg.y / window.GLOBAL.PTM_RATIO);
       

        var body = world.CreateBody(bodydef);
        body.CreateFixture(fixDef);
        body.SetAngle(cfg.rotation * Math.PI / 180);
        body.gameCfg = cfg;
        body.SetUserData(1);
         
        window.B = body;

        return body;

    }
    window.BoardCreate = BoardCreate;
    return BoardCreate;
    

});
 