var _CAROUSEL = {
    "features":{
        "0":["Frantic, fun and fast platform-y goodness!","carousel/fe_0.png"],
        "1":["Run, jump and dash your way through dozens of levels and three gorgeously animated worlds!","carousel/fe_1.png"],
        "2":["Multiple different unlockable characters with special powers!","carousel/fe_2.png"],
        "3":["Battle devious bosses!","carousel/fe_3.png"],
        "4":["Like Flappy Birds? More like Flappy Pups!","carousel/fe_4.png"],
        "5":["Need a little more DIFFICULTY in your life? Try the CHALLENGE mode!","carousel/fe_5.png"]
    },
    "screenshots":{
        "0":["Things aren't gonna end well for our little pup here...","carousel/ss_0.png"],
        "1":["Gotta go fast!","carousel/ss_1.png"],
        "2":["Gravity's not a problem when you're THIS cute...","carousel/ss_2.png"],
        "3":["Don't try this at home!","carousel/ss_3.png"],
        "4":["Home sweet home...","carousel/ss_4.png"]
    }
}

function load_carousel(name) {
    var i = 0;
    while (true) {
        if (_CAROUSEL[name][i+""] == null) break;
        $("#"+name+"_carousel .carousel-inner").append(
            $("<div>").attr({
                "data-slide-no":i+"",
                "class":"item carousel-item"
            }).append(

                $("<a>").attr({
                    href:_CAROUSEL[name][i+""][1]
                }).append(
                    $("<img>").attr({
                        "src":_CAROUSEL[name][i+""][1]
                    })
                )
            )
        )
        i++;
    }
    var rnd = Math.floor($("#"+name+"_carousel .carousel-inner .item").length*Math.random())
    $("#"+name+"_carousel .carousel-inner .item").eq(rnd).addClass("active")
    $("."+name+"-carousel-target").removeClass("active")
    $("#"+name+"_text").text(_CAROUSEL[name][rnd][0])
    $('#'+name+'_carousel_indicators [data-slide-to=' + rnd + ']').addClass('active')
}

$(document).ready(function() {

    load_carousel("features");
    load_carousel("screenshots");

    $('#features_carousel').on('slid.bs.carousel', function () {
        var cmpv = $("#features_carousel .active").attr("data-slide-no");
        if (_CAROUSEL["features"][cmpv][0]) {
            $("#features_text").text(_CAROUSEL["features"][cmpv][0]);
            
            $('.features-carousel-target.active').removeClass('active');
            $('#features_carousel_indicators [data-slide-to=' + cmpv + ']').addClass('active');
        }
    })

    $('#screenshots_carousel').on('slid.bs.carousel', function () {
        var cmpv = $("#screenshots_carousel .active").attr("data-slide-no");
        if (_CAROUSEL["screenshots"][cmpv][0]) {
            $("#screenshots_text").text(_CAROUSEL["screenshots"][cmpv][0]);

            $('.screenshots-carousel-target.active').removeClass('active');
            $('#screenshots_carousel_indicators [data-slide-to=' + cmpv + ']').addClass('active');
        }
    })
    
    $('#features_carousel').carousel({interval: 100000});
    $('#screenshots_carousel').carousel({interval: 100000});
    
    $('.features-carousel-target').on('click', function() {
        $("#features_carousel").carousel(parseInt($(this).attr("data-slide-to")));
        $(".features-carousel-target.active").removeClass("active");
        $(this).addClass("active");
    });
    
    $('.screenshots-carousel-target').on('click', function() {
        $("#screenshots_carousel").carousel(parseInt($(this).attr("data-slide-to")));
        $(".screenshots-carousel-target.active").removeClass("active");
        $(this).addClass("active");
    });

    rescale();
});
            
