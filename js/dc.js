var dc=window.dc={},DC_SERVER="http://gautumn.jd.com/dc.html";dc.log=function(c,s,d,u,e,_,i){$.ajax({url:DC_SERVER,type:"GET",dataType:"jsonp",data:{dc_type_id:s,user_record_value:d,user_id:window.user_id,user_misc:u||0,user_misc1:e||0,user_misc2:_||0,user_misc3:i||0},success:function(){c&&c()}})};