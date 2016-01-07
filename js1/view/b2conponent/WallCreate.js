define([], function () {
    function WallCreate() {
        var bodydef = new b2BodyDef();
        bodydef.type = b2Body.b2_staticBody;

        var fixDef = new b2FixtureDef();
        fixDef.density = 0; // desity 密度，如果密度为0或者null，该物体则为一个静止对象
        fixDef.friction = 0.9; //摩擦力（0~1）
        fixDef.restitution = 0.2;// 弹性（0~1）
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(window.GLOBAL.canvasSize.width * 999 / 2 / 30, 1 / 2 / 30);

        bodydef.position.Set(window.GLOBAL.canvasSize.width / 2 / 30, (window.GLOBAL.canvasSize.height - 75) / 30);
        var body = world.CreateBody(bodydef);
        body.extType = "wall";

        body.CreateFixture(fixDef);
        body.SetUserData(1);
        return body;


    }

    return WallCreate;
   
})