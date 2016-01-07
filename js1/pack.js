var walk = require('walk')
    , fs = require('fs')
    , options
    , walker
    ;
var UglifyJS = require("uglify-js");
var path=require('path');
  options = {
    followLinks: false
  };


writeTextToFile = function(path, text) {
    if(fs.existsSync(path)){
        //已经存在，直接写入
        fs.writeFileSync(path, text, 'utf-8');
    }else{
        var items = path.split('\\');
        items.shift();
        var aPath = "D:";
        for(var i=0; i<items.length - 1; i++){
            aPath += '\\' + items[i];
            if(!fs.existsSync(aPath)){
                fs.mkdirSync(aPath);
            }
        }
        fs.writeFileSync(path, text, 'utf-8');
    }
                       
}

walker = walk.walk("D:/jdProject/Projects/AngryBird/client/js", options);
walker.on("directories", function (root, dirStatsArray, next) {
    // dirStatsArray is an array of `stat` objects with the additional attributes
    // * type
    // * error
    // * name

    next();
  });

  walker.on("file", function (root, fileStats, next) {
    var p=path.join(root,fileStats.name);
    var result = UglifyJS.minify(p);
    console.log(typeof "result");
    var _p=p.replace("client\\js","client\\js\\release")
    writeTextToFile(_p,result.code);
    next();
  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    console.log("err");
    next();
  });

  walker.on("end", function () {
    console.log("all done");
  });