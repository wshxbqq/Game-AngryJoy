(function () {

    function initGameScence() {
        var mask = '<div id="gmask" style="position:fixed;background:#000;opacity:0;top:0%;left:0%;z-index: 9999;"></div>';
        $("body").append(mask);
        $("#gmask").css({
            width: window.innerWidth,
            height: window.innerHeight
        }).animate({ opacity: 0.8 }, 500, function () {

            var tpl = [
           '<div id="outerContaner">',
           '    <div class="close" style="background: url(http://img11.360buyimg.com/cms/jfs/t229/260/1573505202/294/f6620279/53fc7a41Nb3615a05.png);"></div>',
           '    <iframe  id="ifr_inner" width="100%" height="100%" src="http://gautumn.jd.com/goldenAutmun/indexOuter.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>',
           '</div>'


            ].join('');
            $("body").append(tpl);

            $("#outerContaner").css({
                "margin-left": -605 + "px",
                "margin-top": -225 + "px"
            });
            $("embed").parent().hide()
            $("#outerContaner .close").click(function () {
                $("#outerContaner").remove();
                $("#gmask").remove();
                $("embed").parent().show();
            });


        });
    }


    var canvas = document.createElement("canvas");
    if (canvas.getContext) {
        $(".userDefinedArea div[issupport=0]").remove();
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "http://gautumn.jd.com/goldenAutmun/css/start.css");
        document.body.appendChild(link);



        $(".userDefinedArea div[issupport=1]").click(function (e) {
            if (!$("#outerContaner").size()) {
                initGameScence();

            }
            var dc = window.dc = {};
            var DC_SERVER = "http://gautumn.jd.com/goldenAutmun/Default.aspx";
            $.ajax({
                url: DC_SERVER,
                type: "GET",
                dataType: "jsonp",
                data: {
                    dc_type_id: 7,
                    user_id: window.user_id
                },
                success: function (data) {


                }

            });



        });

    } else {
        $(".userDefinedArea div[issupport=1]").remove();

    }



})()


