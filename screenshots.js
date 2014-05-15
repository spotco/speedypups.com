function rescale_screenshots() {
    var wid = $(window).width()+15
    var scf = 1
    if (wid < 850) {
        scf = (1-(850-wid)/850)

        $(".carousel-container_screenshots").css({left:(90*scf)+"px", top:(38*scf)+"px"})
        $("#screenshots_sleeppug").css({width:(scf*105)+"px", "margin-top":(298*scf)+"px"})
        $("#screenshots_robots").css({/*"margin-left":(432*scf)+"px",*/"margin-top":(215*scf)+"px",width:(126*scf)+"px"})

    } else {
        $(".carousel-container_screenshots").css({left:(60*scf)+"px", top:(25.5*scf)+"px"})
        $("#screenshots_sleeppug").css({width:"86px","margin-top":"187px"})
        $("#screenshots_robots").css({"margin-left":(432)+"px","margin-top":(113)+"px",width:"126px"})

    }

    $("#screenshots_description > h2").css({"font-size":(31+20*scf)})
}

/*
        margin-left: 432px;
        margin-top: 113px;
*/