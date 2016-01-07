var dc = window.dc = {};
var DC_SERVER = "http://gautumn.jd.com/dc.html";
dc.log = function (cb,dcType, val, user_misc, user_misc1, user_misc2, user_misc3) {
    $.ajax({
        url: DC_SERVER,
        type: "GET",
        dataType: "jsonp",
        data:{
            dc_type_id: dcType,
            user_record_value: val,
            user_id: window.user_id,
            user_misc: user_misc || 0,
            user_misc1: user_misc1 || 0,
            user_misc2: user_misc2 || 0,
            user_misc3: user_misc3 || 0
        },
        success: function (data) {
            if (cb) {
                cb();
            }
        }

    });
}


/*

1.用户进入游戏
2.用户是否开启了webGL
3.用户点击了关闭,离开了游戏。
4.用户玩一关卡所用的时间,   格式为  管卡ID_是否成功_秒数
5.用户分享了这个游戏 1 2 3 4 对应平台 
6.用户抽到了奖  格式为 0 1
7.用户通过点击入口进入了游戏。(非首日进入)
8.用户是从社交平台上来的








*/

