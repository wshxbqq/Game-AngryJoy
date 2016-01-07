function getUrlParam(name)

    {
    
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
   
        if (r!=null) return unescape(r[2]); return null; //返回参数值
   
    } 


window.GLOBAL = {};

window.GLOBAL.canvasSize = {
    width: 1210,
    height:450
}
window.GLOBAL.joyPosition = {
    x: 200,
    y: 264
};
window.GLOBAL.joyCount = 3;
window.GLOBAL.maxPower = 70;
window.GLOBAL.maxDistance = 80;
window.GLOBAL.PTM_RATIO = 30;
window.GLOBAL.StageCount = 8;
window.GLOBAL.CurrentStage = 0; //  play times
window.GLOBAL.STAGE_CFG = {};
window.GLOBAL.UserPlayedStages = [];
window.GLOBAL.getStageConfigObject = function (idx) {
    if (getUrlParam("stage")) {
        return Stages["stage" + getUrlParam("stage")];
    }
    
    if(idx){
        return Stages["stage" + idx];
    }
    
    var r = (Math.random() * 100) % window.GLOBAL.StageCount;
    r++;
    r = window.parseInt(r);
    while (r == window.GLOBAL.STAGE_CFG.idx || window.GLOBAL.UserPlayedStages.indexOf(r)>-1) {
        r = (Math.random() * 100) % window.GLOBAL.StageCount;
        r++;
        r = window.parseInt(r);
    }
   
    return Stages["stage" + r];
}




window.GLOBAL.particleCfg1 = {

    "numParts": 100,
  "posOffsetX":0,
  "posOffsetY": 0,
  "posRadius": 80,
  "posRadialStart": 10,
  "posRadialEnd": 10,
  "posWidth": 20,
  "posHeight":20,
  "posConstrainRect": false,
  "posAngle": 0,
  "posLength": 20,
  "posRandomLine": false,
  "posConstrainRadial": false,
  "posRandomRadial": false,
  "posShape": "radial",
  "maxVel": 10,
  "minVel": 10,
  "velConstrainRect": true,
  "velConstrainRadial": false,
  "velRandomRadial": false,
  "velShape": "radial",
  "velOffsetX": 0,
  "velOffsetY": 0,
  "velAngMin": 0,
  "velAngMax": -10,
  "velRadius": 300,
  "velRadialStart": 51.358160803622591,
  "velRadialEnd": 1.647738136668149,
  "velWidth": 20,
  "velHeight": 20,
  "velAngle": 110,
  "velLength": 20,
  "velRandomLine": false,
  "minStartTime": 0,
  "maxStartTime": 0.0001,
  "minLifespan": 0.5,
  "maxLifespan": 2,
  "gravityX": 0,
  "gravityY": 400,
  "startSize": 30,
  "endSize": 0,
  "loop": false,
  "colEnvKeyframes": [
    0.5,
    0.6
  ],
  "alpha": "1",
  "colEnv0": [
    0.97058823529411765,
    0.9490196078431372,
    0.050980392156862744
  ],
  "colEnv1": [
    0.97058823529411765,
    0.4490196078431372,
    0.050980392156862744
  ],
  "colEnv2": [
    0.7,
     0.7,
     0.7
  ],
  "colEnv3": [
    1,
    1,
    1
  ],
  "alphaGradient": [
    1,
    1,
    1,
    0
  ],
  "alphaStops": [
    0.3,
    0.7
  ]

}

window.GLOBAL.particleCfg2 = {

    "numParts": 100,
    "posOffsetX": 0,
    "posOffsetY": 0,
    "posRadius": 80,
    "posRadialStart": 5,
    "posRadialEnd": 5,
    "posWidth": 10,
    "posHeight": 10,
    "posConstrainRect": true,
    "posAngle": 0,
    "posLength": 0,
    "posRandomLine": true,
    "posConstrainRadial": true,
    "posRandomRadial": false,
    "posShape": "rectangle",
    "maxVel": 0,
    "minVel": 0,
    "velConstrainRect": true,
    "velConstrainRadial": true,
    "velRandomRadial": false,
    "velShape": "rectangle",
    "velOffsetX": 0,
    "velOffsetY": 0,
    "velAngMin": 0,
    "velAngMax": 0,
    "velRadius": 0,
    "velRadialStart": 5.358160803622591,
    "velRadialEnd": 3.647738136668149,
    "velWidth": 0,
    "velHeight": 0,
    "velAngle": 0,
    "velLength": 0,
    "velRandomLine": false,
    "minStartTime": 0,
    "maxStartTime": 2,
    "minLifespan": 2,
    "maxLifespan": 2,
    "gravityX": 0,
    "gravityY": 200,
    "startSize": 39,
    "endSize": 0,
    "loop": true,
    "startAngle": 0,
    "colEnvKeyframes": [
      0.5,
      0.6
    ],
    "alpha": "1",
    "colEnv0": [
      0.9686274509803922,
      0.150980392156862744,
      0.0490196078431372
    ],
    "colEnv1": [
      0.97058823529411765,
      0.9490196078431372,
      0.050980392156862744
    ],
    "colEnv2": [
     0.97058823529411765,
      0.9490196078431372,
      0.050980392156862744
    ],
    "colEnv3": [
      0,
      0,
      0
    ],
    "alphaGradient": [
      1,
      1,
      1,
      0
    ],
    "alphaStops": [
      0.3,
      0.7
    ]
}

window.GLOBAL.particleCfg3 = {
    "numParts": 30,
    "posOffsetX": 0,
    "posOffsetY": 0,
    "posRadius": 80,
    "posRadialStart": 65,
    "posRadialEnd": 65,
    "posWidth": 3000,
    "posHeight": 100,
    "posConstrainRect": false,
    "posAngle": 0,
    "posLength": 0,
    "posRandomLine": true,
    "posConstrainRadial": false,
    "posRandomRadial": false,
    "posShape": "rectangle",
    "maxVel": 0,
    "minVel": 0,
    "velConstrainRect": false,
    "velConstrainRadial": true,
    "velRandomRadial": false,
    "velShape": "rectangle",
    "velOffsetX": 0,
    "velOffsetY": 0,
    "velAngMin": 0,
    "velAngMax": 0,
    "velRadius": 0,
    "velRadialStart": 5.358160803622591,
    "velRadialEnd": 3.647738136668149,
    "velWidth": 0,
    "velHeight": 0,
    "velAngle": 0,
    "velLength":0,
    "velRandomLine": false,
    "minStartTime": 0,
    "maxStartTime": 2,
    "minLifespan": 2,
    "maxLifespan": 2,
    "gravityX": 0,
    "gravityY": 0,
    "startSize": 20,
    "endSize": 0,
    "loop": true,
    "startAngle": 0,
    "colEnvKeyframes": [
      0.5,
      0.6
    ],
    "alpha": "1",
    "colEnv0": [
      1,
      1,
      1,
    ],
    "colEnv1": [
       1,
      1,
      1,
    ],
    "colEnv2": [
     1,
      1,
      1,
    ],
    "colEnv3": [
      0,
      0,
      0
    ],
    "alphaGradient": [
      1,
      1,
      1,
      0
    ],
    "alphaStops": [
      0.3,
      0.7
    ]
}
