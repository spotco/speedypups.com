function rescale_screenshots() {
    var wid = $(window).width()+15
    var scf = 1
    if (wid < 850) {
        scf = (1-(850-wid)/850)

        $(".carousel-container_screenshots").css({left:(90*scf)+"px", top:(40*scf)+"px"})
    } else {
        $(".carousel-container_screenshots").css({left:(60*scf)+"px", top:(27.5*scf)+"px"})
    }
}