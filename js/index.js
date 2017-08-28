//$(document).ready(function() {
//
////导航效果侧出
//    $('.icon_menu').click(function () {
//        $('.header_zhezhao').css('height', $(window).height() + 'px');
//        $('.panel-left').css('height', $(window).height() + 'px');
//        $('.panel-left').show();
//        $('.panel-left').animate({left: 0}, 200, function () {
//
//            $('.header_zhezhao').css('z-index', '10000').show(200);
//            $('.content').css('overflow-y', 'hidden');
//        });
//    });
//    //导航效果隐藏
//    $('.header_zhezhao').click(function() {
//        $('.panel-left').animate({left:'-640px'}, 200,function(){
//            $(this).hide();
//        });
//        $(this).removeAttr('style').fadeOut(1000);
//        $('.content').removeAttr('style');
//    });
//    //个人中心关闭弹出框
//    $(".phone-close,.grzx_zhezhao,.phone5 p").click(function(){
//        $(".xg-phone,.xg-phone2").hide();
//        $(".grzx_zhezhao").hide();
//    })
//    //弹出修改手机框
//    $(".info-con .xg-hm").click(function(){
//        $(".xg-phone").show();
//        $(".grzx_zhezhao").show();
//    });
//    //修改手机号成功后关闭
//    $(".phone-close2").click(function(){
//        $(".xg-phone2,.xg-phone").hide();
//        $(".grzx_zhezhao").hide();
//    });
//
//    $(".phone4 p").click(function(){
//        $(".xg-phone2").show();
//        $(".grzx_zhezhao").show();
//    })
//    //切换订单tab
//    $(".order-txt ul li").click(function(){
//        $(this).addClass("on").siblings().removeClass("on");
//        if($(this).index()=="1"){
//            $(".order-going").show().siblings().hide();
//        }else if($(this).index()=="2"){
//            $(".order-over").show().siblings().hide();
//        }else{
//            $(".order-item").show()
//        }
//    });
//    //我的积分切换tab
//    $(".total-con2 p").click(function(){
//        $(this).find("a").addClass("on").parent().siblings().find("a").removeClass();
//        $(".total-con5").hide();
//        if($(this).index()=="1"){
//            $(".total-con4").show();
//            $(".total-con3").hide();
//        }else{
//            $(".total-con4").hide();
//            $(".total-con3").show();
//        };
//    });
//    //个人中心地址切换
//    $(".site-item2 i").click(function(){
//       if( $(this).hasClass("on")){
//           $(this).removeClass("on");
//       }else{
//           $(".site-item2 i").removeClass("on");
//           $(this).addClass("on");
//       }
//    });
//    //个人中心账户返回
//    $(".xg-back").click(function(){
//        $(".xg-phone2,.xg-phone,.grzx_zhezhao").hide();
//    });
//    //个人中心账户信息编辑
//    $(".user-bj").click(function(){
//        $("input").each(function(i,e){
//            $(this).removeAttr("disabled").addClass("on");
//        });
//        $(".user-xg").show();
//        $(this).hide();
//    });
//    $(".user-xg").click(function(){
//        $("input").each(function(i,e){
//            $(this).attr("disabled","disabled").removeClass("on");
//        });
//        $(".user-bj").show();
//        $(".user-xg").hide();
//    });
//    //个人中心地址默认收货人
//    $(".site-list .p2 i").click(function(){
//        if( $(this).hasClass("on")){
//            $(this).removeClass("on");
//        }else{
//            $(".site-item2 i").removeClass("on");
//            $(this).addClass("on");
//        }
//    });
//});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
