var Share = {};
Share.shareTXT = encodeURIComponent("京东 中秋砸月饼  一大波奖品正在接近中,你砸的到我么？");
Share.url = encodeURI("http://gautumn.jd.com/goldenAutmun/sharebackentry.html");

Share.openSina = function () {
    var url = 'http://service.weibo.com/share/share.php?&title=' + Share.shareTXT + '&url=' + Share.url + '&appkey=2445336821';
    window.open(url, "openSina", "width=800");
}

Share.openDouBan = function () {
    var url = 'http://www.douban.com/recommend/?url='+Share.url+'&title='+Share.shareTXT+'&sel=&v=1';
    window.open(url, "openDouBan", "width=800");
}

Share.openTqq = function () { 
	var _t = Share.shareTXT;
    var _url = Share.url;
    var _appkey = encodeURI("appkey");//你从腾讯获得的appkey
    var _pic = encodeURI('http://gautumn.jd.com/img/weibo_share.png');//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = Share.url;//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url=' + _url + '&appkey=' + _appkey + '&site=' + _site + '&pic=' + _pic + '&title=' + _t;
    window.open(_u, "openTqq", "width=800");
}

Share.openRenRen = function () {
    var url = 'http://widget.renren.com/dialog/share?resourceUrl=' + Share.url + '&title=' + Share.shareTXT + '&description=&srcUrl=http://gautumn.jd.com/img/weibo_share.png';
    window.open(url, "openRenRen", "width=800");
}
