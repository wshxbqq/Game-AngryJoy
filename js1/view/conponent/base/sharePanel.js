define([], function () {
    var sharePanel = {};

    sharePanel.showAtPosition = function (parent, p) {
        sharePanel.remove();
        var shareDiv = [
            ' <div id="share_a" >         ',
            '     <a class="sina"></a>    ',
            '     <a class="douban"></a>  ',
            '     <a class="tx"></a>      ',
            '     <a class="renren"></a>  ',
            ' </div>                      '
        ].join('');
        $("body").prepend(shareDiv);
        $("#share_a").css({ left: parent.x + p.x + "px", top: parent.y + p.y+"px" });
        $("#share_a a").click(function (e) {
            switch ($(this).attr("class")) {
                case "sina": Share.openSina(); dc.log(null, 5, 1);; break;
                case "douban": Share.openDouBan(); dc.log(null, 5, 2);; break;
                case "tx": Share.openTqq(); dc.log(null, 5, 3);; break;
                case "renren": Share.openRenRen(); dc.log(null, 5, 4);; break;
            }

        });
    

       
        
    }
    sharePanel.remove = function () {

        $("#share_a").remove();

    };
    sharePanel.onOver = function (e) {
        e.transform.scale = 1.15;

    }
    sharePanel.onOut = function (e) {
        e.transform.scale = 1;
    }
    return sharePanel;


})


