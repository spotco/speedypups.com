$(window).resize(function(){rescale()});

function rescale() {
    var wid = $(window).width()
    var scf = 1

    if (wid < 550) {
        scf = (1-(550-wid)/550)
    }

    $("#logo_sign").css({"margin-top":(150+scf*200)+"px"})
    $("#sign_top").css({width:scf*420+"px", height:scf*100+"px", top: scf*-75 + "px"})
    $("#sign_top_pane1").css({width:scf*220+"px", height:scf*100+"px"})
    $("#sign_top_pane2").css({width:scf*220+"px", height:scf*100+"px", top:scf*-160+"px", left:scf*220+"px"})

    //app store logo
    $("#iosimg").css({width:scf*200+"px",height:scf*59+"px"})
    $("#androidimg").css({width:scf*200+"px",height:scf*59+"px", top:scf*-245+"px", left:scf*220+"px"})
    $("#iosimg > img, #androidimg > img").css({width:scf*200+"px"})
    
    $("#sign_top > a").css({bottom:scf*85+"px", margin:(6+scf*4)+"px"})
    $("#main_logo").css({top:-(136+scf*200)+"px", width: Math.min(100,(78 + (1-scf)*60))+"%"})
    $("#vid").css({top:(40*scf)+"px", "padding-left":((1-scf)*30)+"px"})
    $("#vid > iframe").css({height:(280*scf)+"px"})

    rescale_features()
    rescale_screenshots()
}