Kiwi.GameObjects.StatelessParticles=function(e,t,i,r,a){return Kiwi.Entity.call(this,e,i,r),this.constructor(e,t,i,r,a)},Kiwi.extend(Kiwi.GameObjects.StatelessParticles,Kiwi.Entity),function(){var e={constructor:function(e,t,i,r,a){return"undefined"==typeof i&&(i=0),"undefined"==typeof r&&(r=0),"undefined"==typeof a&&(a=this.defaultConfig),this.config=a,this.randoms=function(){for(var e=[],t=0;5e3>t;t++)e.push(Math.random());return e}(),this.game.renderOption===Kiwi.RENDERER_WEBGL&&(this.glRenderer=this.game.renderer.requestRendererInstance("StatelessParticleRenderer",{config:this.config})),"undefined"==typeof t?(console.error("A Texture Atlas was not passed when instantiating a new StatelessParticles."),this.willRender=!1,void(this.active=!1)):(this.atlas=t,this.cellIndex=this.atlas.cellIndex,this.width=t.cells[0].w,this.height=t.cells[0].h,this.transform.rotPointX=this.width/2,this.transform.rotPointY=this.height/2,void(this.box=this.components.add(new Kiwi.Components.Box(this,i,r,this.width,this.height))))},defaultConfig:{numParts:20,posOffsetX:0,posOffsetY:0,posRadius:50,posRadialStart:4.363323129985823,posRadialEnd:5.061454830783556,posWidth:100,posHeight:100,posAngle:0,posLength:100,posConstrainRect:!0,posConstrainRadial:!0,posShape:"radial",maxVel:100,minVel:70,velConstrainRect:!1,velConstrainRadial:!1,velShape:"line",velOffsetX:0,velOffsetY:0,velAngMin:-2,velAngMax:2,velRadius:100,velRadialStart:0,velRadialEnd:6.283185307179586,velWidth:100,velHeight:100,velAngle:0,velLength:30,minStartTime:1,maxStartTime:6,minLifespan:3,maxLifespan:5,gravityX:-20,gravityY:30,startSize:4,endSize:150,loop:!0,colEnvKeyframes:[.5,.6],alpha:"1",colEnv0:[1,0,0],colEnv1:[1,1,0],colEnv2:[1,1,1],colEnv3:[0,0,0],alphaGradient:[1,1,1,0],alphaStops:[.3,.7]},effectState:"stopped",objType:function(){return"StatelessParticles"},drawingVectors:[],useDrawingVectors:!1,rnd:null,randoms:[],useRandoms:!1,numRandoms:5e3,nextRandomIndex:-1,timeoutLength:0,nextRandom:function(){return this.nextRandomIndex++,this.nextRandomIndex>=this.numRandoms&&(this.nextRandomIndex=-1),this.randoms[this.nextRandomIndex]},startEmitting:function(e,t,i){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!1),"undefined"==typeof i&&(i=this.config.numParts),this.config.numParts=i,this.config.loop=e,this.glRenderer.resetTime(),this.glRenderer.resetPauseTime(),this.setConfig(this.config,!0,!0),!e&&t&&this.scheduleRemoval(1e3*this.timeoutLength),this.effectState="started",clearTimeout(this._timer)},stopEmitting:function(e,t){"undefined"==typeof e&&(e=!1),"undefined"==typeof t&&(t=!1),"started"===this.effectState&&(e&&t?this.remove():e&&!t?this.effectState="stopped":e||t?!e&&t&&(this.config.loop=!1,this.scheduleStop(1e3*this.timeoutLength,!0)):(this.glRenderer.pause(),this.effectState="stopping",this.scheduleStop(1e3*this.timeoutLength,!1)))},scheduleStop:function(e,t){var i=this;clearTimeout(this._timer),this._timer=setTimeout(function(){i.effectState="stopped",t&&i.remove.call(i)},e)},_timer:null,remove:function(){this.glRenderer.destroy(),this.exists=!1},setConfig:function(e,t,i){this.config=e,this.glRenderer.setConfig(e),t&&this._generateParticles(),i&&this.glRenderer._setConfigUniforms()},_generateParticles:function(){this.rnd=this.useRandoms?this.nextRandom:Math.random,this.nextRandomIndex=-1;var e=[],t=this.config;this.drawingVectors=[];for(var i=0;i<t.numParts;i++){var r={x:0,y:0},a={x:0,y:0},n={x:t.velOffsetX,y:t.velOffsetY},s={x:0,y:0};switch(t.posShape){case"radial":r=t.posRandomRadial?t.posConstrainRadial?this.randomPointCirclePerimeter(t.posRadialStart,t.posRadialEnd):this.randomPointCircle(t.posRadialStart,t.posRadialEnd):t.posConstrainRadial?this.regularPointCirclePerimeter(t.posRadialStart,t.posRadialEnd,i,t.numParts-1):this.randomPointCircle(t.posRadialStart,t.posRadialEnd),a.x=r.x*t.posRadius,a.y=r.y*t.posRadius;break;case"rectangle":r=t.posConstrainRect?this.randomPointRectPerimeter():this.randomPointRect(),a.x+=r.x*t.posWidth,a.y+=r.y*t.posHeight;break;case"line":r=t.posRandomLine?this.randomPointLine(t.posAngle):this.regularPointLine(t.posAngle,i,t.numParts-1),a.x+=r.x*t.posLength,a.y+=r.y*t.posLength;break;case"point":}switch(t.velShape){case"center":var o=r,l=t.minVel+this.rnd()*(t.maxVel-t.minVel);n.x=o.x*l,n.y=o.y*l;break;case"radial":s=t.velRandomRadial?t.velConstrainRadial?this.randomPointCirclePerimeter(t.velRadialStart,t.velRadialEnd):this.randomPointCircle(t.velRadialStart,t.velRadialEnd):t.velConstrainRadial?this.regularPointCirclePerimeter(t.velRadialStart,t.velRadialEnd,i,t.numParts-1):this.randomPointCircle(t.velRadialStart,t.velRadialEnd),n.x+=s.x*t.velRadius,n.y+=s.y*t.velRadius;break;case"rectangle":s=t.velConstrainRect?this.randomPointRectPerimeter():this.randomPointRect(),n.x+=s.x*t.velWidth,n.y+=s.y*t.velHeight;break;case"line":s=t.velRandomLine?this.randomPointLine(t.velAngle):this.regularPointLine(t.velAngle,i,t.numParts-1),n.x+=s.x*t.velLength,n.y+=s.y*t.velLength;break;case"point":}var u,h=Math.max(t.velAngMax,t.velAngMin)-Math.min(t.velAngMax,t.velAngMin);u=t.velAngMin+this.rnd()*h,a.x+=t.posOffsetX,a.y+=t.posOffsetY,e.push(a.x,a.y,n.x,n.y),this.drawingVectors.push({x:a.x,y:a.y,vx:n.x,vy:n.y});var d,f;d=t.minStartTime+this.rnd()*(t.maxStartTime-t.minStartTime),f=t.minLifespan+this.rnd()*(t.maxLifespan-t.minLifespan),this.timeoutLength=Math.max(this.timeoutLength,d+f);var c=0;if(t.cells){var m=t.cells.length;c=m>1?t.cells[Math.floor(this.rnd()*m)]:t.cells[0]}e.push(d,f,u);var p=this.atlas.cells[c];e.push(p.x,p.y,p.w,p.h)}this.glRenderer.initBatch(e)},renderGL:function(e){"stopped"!==this.effectState&&this.glRenderer.draw(e,this.transform)},regularPointCirclePerimeter:function(e,t,i,r){var a=(t-e)/r*i+e;return{x:Math.cos(a),y:Math.sin(a)}},randomPointCirclePerimeter:function(e,t){var i=e+(t-e)*this.rnd();return{x:Math.cos(i),y:Math.sin(i)}},randomPointCircle:function(e,t){var i=e+(t-e)*this.rnd(),r=this.rnd()+this.rnd(),a=r>1?2-r:r;return{x:a*Math.cos(i),y:a*Math.sin(i)}},randomPointRect:function(){return{x:this.rnd()-.5,y:this.rnd()-.5}},randomPointRectPerimeter:function(){var e=4*this.rnd();return 1>e?{x:e-.5,y:-.5}:2>e?{x:.5,y:e-1.5}:3>e?{x:e-2.5,y:.5}:{x:-.5,y:e-3.5}},regularPointLine:function(e,t,i){var r=1/i*t-.5,a=r*Math.cos(e),n=r*Math.sin(e);return{x:a,y:n}},randomPointLine:function(e){var t=this.rnd()-.5,i=t*Math.cos(e),r=t*Math.sin(e);return{x:i,y:r}}};for(var t in e)Kiwi.GameObjects.StatelessParticles.prototype[t]=e[t]}(),Kiwi.Plugins.ParticlesGL={name:"ParticlesGL",version:"1.0.0",minimumKiwiVersion:"0.7.0",pluginDependencies:[]},Kiwi.PluginManager.register(Kiwi.Plugins.ParticlesGL),Kiwi.Renderers.StatelessParticleRenderer=function(e,t,i){Kiwi.Renderers.Renderer.call(this,e,t,!1,i),this._maxItems=2e3,this.gl=e,this._config=i.config,this._config||console.log("no particle configuration supplied"),this.vertexBuffer=new Kiwi.Renderers.GLArrayBuffer(e,11),this.shaderPair=this.shaderManager.requestShader(e,"StatelessParticleShader"),this.resetTime()},Kiwi.extend(Kiwi.Renderers.StatelessParticleRenderer,Kiwi.Renderers.Renderer),Kiwi.Renderers.StatelessParticleRenderer.prototype.RENDERER_ID="StatelessParticleRenderer",Kiwi.Renderers.StatelessParticleRenderer.prototype.setConfig=function(e){this._config=e,this._setConfigUniforms(this.gl)},Kiwi.Renderers.StatelessParticleRenderer.prototype.resetTime=function(){this.startTime=Date.now()},Kiwi.Renderers.StatelessParticleRenderer.prototype.resetPauseTime=function(){this.pauseTime=999999999},Kiwi.Renderers.StatelessParticleRenderer.prototype.enable=function(e,t){this.shaderPair=this.shaderManager.requestShader(e,"StatelessParticleShader");this._config;this._setStandardUniforms(e,t.stageResolution,t.textureAtlas,t.camMatrix),this._setConfigUniforms(e)},Kiwi.Renderers.StatelessParticleRenderer.prototype._setStandardUniforms=function(e,t,i,r){e.uniform1i(this.shaderPair.uniforms.uSampler.location,0),e.uniform2fv(this.shaderPair.uniforms.uResolution.location,t),e.uniform2fv(this.shaderPair.uniforms.uTextureSize.location,new Float32Array([i.image.width,i.image.height])),e.uniformMatrix3fv(this.shaderPair.uniforms.uCamMatrix.location,!1,r),this.camMatrix=new Float32Array(r.buffer)},Kiwi.Renderers.StatelessParticleRenderer.prototype._setConfigUniforms=function(e){var t=this._config;e=e||this.gl,e.uniform1f(this.shaderPair.uniforms.uT.location,0),e.uniform1f(this.shaderPair.uniforms.uPauseTime.location,this.pauseTime),e.uniform2fv(this.shaderPair.uniforms.uGravity.location,new Float32Array([t.gravityX,t.gravityY])),e.uniform2fv(this.shaderPair.uniforms.uPointSizeRange.location,new Float32Array([t.startSize,t.endSize])),e.uniform3fv(this.shaderPair.uniforms.uColEnv0.location,new Float32Array(t.colEnv0)),e.uniform3fv(this.shaderPair.uniforms.uColEnv1.location,new Float32Array(t.colEnv1)),e.uniform3fv(this.shaderPair.uniforms.uColEnv2.location,new Float32Array(t.colEnv2)),e.uniform3fv(this.shaderPair.uniforms.uColEnv3.location,new Float32Array(t.colEnv3)),e.uniform2fv(this.shaderPair.uniforms.uColEnvKeyframes.location,new Float32Array(t.colEnvKeyframes)),e.uniform1f(this.shaderPair.uniforms.uAlpha.location,t.alpha),e.uniform4fv(this.shaderPair.uniforms.uAlphaGradient.location,new Float32Array(t.alphaGradient)),e.uniform2fv(this.shaderPair.uniforms.uAlphaStops.location,new Float32Array(t.alphaStops)),e.uniform1i(this.shaderPair.uniforms.uLoop.location,t.loop?1:0)},Kiwi.Renderers.StatelessParticleRenderer.prototype.disable=function(e){e.disableVertexAttribArray(this.shaderPair.attributes.aXYVxVy),e.disableVertexAttribArray(this.shaderPair.attributes.aBirthLifespanAngle),e.disableVertexAttribArray(this.shaderPair.attributes.aCellXYWH)},Kiwi.Renderers.StatelessParticleRenderer.prototype.clear=function(){this.vertexBuffer.clear()},Kiwi.Renderers.StatelessParticleRenderer.prototype.time=0,Kiwi.Renderers.StatelessParticleRenderer.prototype.pauseTime=999999999,Kiwi.Renderers.StatelessParticleRenderer.prototype.pause=function(e){e=e||this.gl,this.pauseTime=this.time/1e3,e.uniform1f(this.shaderPair.uniforms.uPauseTime.location,this.pauseTime)},Kiwi.Renderers.StatelessParticleRenderer.prototype.draw=function(e,t){var i=t.getConcatenatedMatrix(),r=new Float32Array([i.a,i.b,0,i.c,i.d,0,i.tx,i.ty,1]),a=mat3.create();mat3.mul(a,this.camMatrix,r),e.uniformMatrix3fv(this.shaderPair.uniforms.uCamMatrix.location,!1,a),this.time=Date.now()-this.startTime,e.uniform1f(this.shaderPair.uniforms.uT.location,this.time/1e3),e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),this._config.additive?e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer.buffer),e.enableVertexAttribArray(this.shaderPair.attributes.aXYVxVy),e.vertexAttribPointer(this.shaderPair.attributes.aXYVxVy,4,e.FLOAT,!1,44,0),e.enableVertexAttribArray(this.shaderPair.attributes.aBirthLifespanAngle),e.vertexAttribPointer(this.shaderPair.attributes.aBirthLifespanAngle,3,e.FLOAT,!1,44,16),e.enableVertexAttribArray(this.shaderPair.attributes.aCellXYWH),e.vertexAttribPointer(this.shaderPair.attributes.aCellXYWH,4,e.FLOAT,!1,44,28),e.drawArrays(e.POINTS,0,this._config.numParts),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)},Kiwi.Renderers.StatelessParticleRenderer.prototype.updateStageResolution=function(e,t){e.uniform2fv(this.shaderPair.uniforms.uResolution.location,t)},Kiwi.Renderers.StatelessParticleRenderer.prototype.updateTextureSize=function(e,t){e.uniform2fv(this.shaderPair.uniforms.uTextureSize.location,t)},Kiwi.Renderers.StatelessParticleRenderer.prototype.initBatch=function(e){this.vertexBuffer.items=e,this.vertexBuffer.uploadBuffer(this.gl,this.vertexBuffer.items)},Kiwi.Renderers.StatelessParticleRenderer.prototype.destroy=function(e){e=e||this.gl,e.deleteBuffer(this.vertexBuffer.buffer)},Kiwi.Shaders.StatelessParticleShader=function(){Kiwi.Shaders.ShaderPair.call(this)},Kiwi.extend(Kiwi.Shaders.StatelessParticleShader,Kiwi.Shaders.ShaderPair),Kiwi.Shaders.StatelessParticleShader.prototype.init=function(e){Kiwi.Shaders.ShaderPair.prototype.init.call(this,e),this.attributes.aXYVxVy=e.getAttribLocation(this.shaderProgram,"aXYVxVy"),this.attributes.aBirthLifespanAngle=e.getAttribLocation(this.shaderProgram,"aBirthLifespanAngle"),this.attributes.aCellXYWH=e.getAttribLocation(this.shaderProgram,"aCellXYWH"),this.initUniforms(e)},Kiwi.Shaders.StatelessParticleShader.prototype.attributes={aXYVxVy:null,aBirthLifespan:null,aCellXYWH:null},Kiwi.Shaders.StatelessParticleShader.prototype.uniforms={uCamMatrix:{type:"mat3"},uTextureSize:{type:"2fv"},uResolution:{type:"2fv"},uTextureSize:{type:"2fv"},uSampler:{type:"1i"},uT:{type:"1f"},uPauseTime:{type:"1f"},uGravity:{type:"2fv"},uPointSizeRange:{type:"2fv"},uColEnv0:{type:"3fv"},uColEnv1:{type:"3fv"},uColEnv2:{type:"3fv"},uColEnv3:{type:"3fv"},uColEnvKeyframes:{type:"2fv"},uAlpha:{type:"1f"},uAlphaGradient:{type:"4fv"},uAlphaStops:{type:"2fv"},uLoop:{type:"1i"}},Kiwi.Shaders.StatelessParticleShader.prototype.fragSource=["precision mediump float;","uniform sampler2D uSampler;","varying vec4 vCol;","varying mat4 vRotationMatrix;","varying vec4 vCell;","void main(void) {","vec2 cellCoord = vCell.xy + vCell.zw * gl_PointCoord;","vec2 texCoord = (vRotationMatrix * vec4(cellCoord, 0, 1)).xy;","vec4 sampleCol = texture2D(uSampler, texCoord);","gl_FragColor.rgb = vCol.rgb * sampleCol.rgb;","gl_FragColor.a = sampleCol.a * vCol.a;","}"],Kiwi.Shaders.StatelessParticleShader.prototype.vertSource=["precision mediump float;","attribute vec4 aXYVxVy;","attribute vec3 aBirthLifespanAngle;","attribute vec4 aCellXYWH;","uniform mat3 uCamMatrix;","uniform vec2 uTextureSize;","uniform vec2 uResolution;","uniform float uT;","uniform float uPauseTime;","uniform vec2 uGravity;","uniform vec2 uPointSizeRange;","uniform vec3 uColEnv0;","uniform vec3 uColEnv1;","uniform vec3 uColEnv2;","uniform vec3 uColEnv3;","uniform vec2 uColEnvKeyframes;","uniform vec4 uAlphaGradient;","uniform vec2 uAlphaStops;","uniform float uAlpha;","uniform bool uLoop;","varying vec4 vCol;","varying mat4 vRotationMatrix;","varying vec4 vCell;","void main(void) {","float lerp;","float birthTime = aBirthLifespanAngle.x;","float lifespan = aBirthLifespanAngle.y;","float angularVelocity = aBirthLifespanAngle.z;","float deathTime = birthTime + lifespan;","float age = mod(uT-birthTime,lifespan);","float pauseTimeAge = mod(uPauseTime-birthTime,lifespan);","lerp =  age / lifespan;","gl_PointSize = mix(uPointSizeRange.x,uPointSizeRange.y,lerp);","float loopBirthTime = (uT - birthTime) / lifespan;","if (uT < birthTime || (uT >= deathTime && !uLoop ) || (uT >= uPauseTime - pauseTimeAge + lifespan)) {","gl_Position = vec4(9999.0,0,0,0);","} else {","vec2 pos = aXYVxVy.xy; ","vec2 vel = aXYVxVy.zw;","pos += age * vel;","pos += 0.5 * uGravity * age * age;","pos = (uCamMatrix * vec3(pos,1.0)).xy;","pos = (pos / uResolution) * 2.0 - 1.0;","gl_Position = vec4(pos * vec2(1, -1), 0, 1);","float colLerp = 1.0;","if (lerp <= uColEnvKeyframes.x) {","float cLerp = lerp / uColEnvKeyframes.x; ","vCol = vec4(mix(uColEnv0,uColEnv1,cLerp),1.0);","} else if (lerp > uColEnvKeyframes.x && lerp <= uColEnvKeyframes.y) {","float cLerp = (lerp - uColEnvKeyframes.x) / (uColEnvKeyframes.y - uColEnvKeyframes.x); ","vCol = vec4(mix(uColEnv1,uColEnv2,cLerp),1.0);","} else {","float cLerp = (lerp - uColEnvKeyframes.y) / (1.0 - uColEnvKeyframes.y); ","vCol = vec4(mix(uColEnv2,uColEnv3,cLerp),1.0);","}","if (lerp <= uAlphaStops.x) {","vCol.a = mix(uAlphaGradient.x,uAlphaGradient.y,lerp/uAlphaStops.x);","} else if (lerp >uAlphaStops.x && lerp <= uAlphaStops.y) {","vCol.a = mix(uAlphaGradient.y,uAlphaGradient.z,(lerp - uAlphaStops.x) / (uAlphaStops.y - uAlphaStops.x));","} else {","vCol.a = mix(uAlphaGradient.z,uAlphaGradient.w,(lerp - uAlphaStops.y) / (1.0 - uAlphaStops.y));","}","vCol.a *= uAlpha;","float ang = age * angularVelocity;","vec2 ratio = vec2(1.0 / uTextureSize.x,1.0 / uTextureSize.y);","vec4 normCell = aCellXYWH;","normCell.xz *= ratio;","normCell.yw *= ratio;","vec2 cellCenter = vec2(normCell.x + normCell.z / 2.0,normCell.y + normCell.w / 2.0);","float c = cos(ang);","float s = sin(ang);","mat4 transInMat = mat4(1.0, 0.0, 0.0, 0.0,","0.0, 1.0, 0.0, 0.0,","0.0, 0.0, 1.0, 0.0,","cellCenter.x,cellCenter.y, 0.0, 1.0);","mat4 rotMat = mat4(c, -s, 0.0, 0.0,","s, c, 0.0, 0.0,","0.0, 0.0, 1.0, 0.0,","0.0, 0.0, 0.0, 1.0);","mat4 resultMat = transInMat * rotMat;","resultMat[3][0] = resultMat[3][0] + resultMat[0][0] * -cellCenter.x + resultMat[1][0] * -cellCenter.y;","resultMat[3][1] = resultMat[3][1] + resultMat[0][1] * -cellCenter.x + resultMat[1][1] * -cellCenter.y;","resultMat[3][2] = resultMat[3][2] + resultMat[0][2] * -cellCenter.x + resultMat[1][2] * -cellCenter.y;","vRotationMatrix = resultMat;","vCell = normCell;","} ","}"];