function rescale_features() {
    var wid = $(window).width()+15
    var scf = 1
    if (wid < 850) {
        scf = (1-(850-wid)/850)

        $(".carousel-container_features").css({left:(90*scf)+"px", top:(36*scf)+"px"})
        $("#features_paw").css({"margin-left":(wid*0.9-110)+"px"})
    } else {
        $(".carousel-container_features").css({left:60+"px", top:(24)+"px"})
    }
    $("#features_rocketdog").css({width:(30+scf*110)+"px"}) 
    $("#features_carousel_text_section").css({height:(190+scf*60)+"px"})

    $("#features_description > h2").css({"font-size":(31+20*scf)})
}