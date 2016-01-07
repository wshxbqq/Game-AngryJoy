define([], function () {
    function SlingshotCreate() {
        var bodydef = new b2BodyDef();
        bodydef.type = b2Body.b2_staticBody;

        var fixDef = new b2FixtureDef();
        fixDef.density = 0; // desity 密度，如果密度为0或者null，该物体则为一个静止对象
        fixDef.friction = 0.9; //摩擦力（0~1）
        fixDef.restitution = 0.2;// 弹性（0~1）
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(50 / 2 / 30, 1 / 2 / 30);

        bodydef.position.Set(225   / 30, 340 / 30);
        var body = world.CreateBody(bodydef);
        body.extType = "slingshot";

        body.CreateFixture(fixDef);
        body.SetUserData(1);

        window.SS = body;
        return body;


    }

    return SlingshotCreate;
   
})