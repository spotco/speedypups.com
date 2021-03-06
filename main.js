var _CAROUSEL = {
    "features":{
        "0":["<span class='txt1'>16-bit heritage</span><br/><span class='txt2'>Fast and fluid platformer gameplay just like the classics!</span>","carousel/fe_0.png"],
        "1":["<span class='txt1'>Tons of levels</span><br/><span class='txt2'>Speed through 3 whimsical worlds and 6 different hand-polished zones with day and night cycles!</span>","carousel/fe_1.png"],
        "2":["<span class='txt1'>Pick your Pup</span><br/><span class='txt2'>Choose from seven unlockable pups to play, each with their own special powers!</span>","carousel/fe_2.png"],
        "3":["<span class='txt1'>Nasty catniks</span><br/><span class='txt2'>Beat evil Cat Robots while rescuing adorable puppies!</span>","carousel/fe_3.png"],
        "4":["<span class='txt1'>Fly the skies</span><br/><span class='txt2'>Soar through the skies with your flappy cape!</span>","carousel/fe_4.png"],
        "5":["<span class='txt1'>Challenge levels</span><br/><span class='txt2'>Solve tricky puzzles and test your reflexes with challenge mode!</span>","carousel/fe_5.png"]
    },
    "screenshots":{
        "0":["<span class='txt1'>Swing on by</span><br/><span class='txt2'>Swing past countless obstacles!</span>","carousel/ss_0.png"],
        "1":["<span class='txt1'>Gotta go fast</span><br/><span class='txt2'>Crazy-fast gameplay with vertical loops and insane jumps!</span>","carousel/ss_1.png"],
        "2":["<span class='txt1'>Gravity defying</span><br/><span class='txt2'>Gravity's not a problem when you're THIS cute...</span>","carousel/ss_2.png"],
        "3":["<span class='txt1'>Cat Robot Armies</span><br/><span class='txt2'>Lots of evil cat robots in your way, gotta jump your way through!</span>","carousel/ss_4.png"],
        "4":["<span class='txt1'>Lots of Unlockables</span><br/><span class='txt2'>Hours worth of unlockables!</span>","carousel/ss_3.png"]
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
                    href:_CAROUSEL[name][i+""][1],
                    target:"_blank"
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
    $("#"+name+"_text").html(_CAROUSEL[name][rnd][0])
    $('#'+name+'_carousel_indicators [data-slide-to=' + rnd + ']').addClass('active')
}

$(document).ready(function() {

    $("#header_close").click(function(){
        $("#header").remove()
        $("#border_0").remove()
    })

    clouds()

    load_carousel("features");
    load_carousel("screenshots");

    $('#features_carousel').on('slid.bs.carousel', function () {
        var cmpv = $("#features_carousel .active").attr("data-slide-no");
        if (_CAROUSEL["features"][cmpv][0]) {
            $("#features_text").html(_CAROUSEL["features"][cmpv][0]);
            
            $('.features-carousel-target.active').removeClass('active');
            $('#features_carousel_indicators [data-slide-to=' + cmpv + ']').addClass('active');
        }
    })

    $('#screenshots_carousel').on('slid.bs.carousel', function () {
        var cmpv = $("#screenshots_carousel .active").attr("data-slide-no");
        if (_CAROUSEL["screenshots"][cmpv][0]) {
            $("#screenshots_text").html(_CAROUSEL["screenshots"][cmpv][0]);

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
        
var _clouds = []
var _spawn_ct = 0
//120-600
function clouds() {
    

    //setInterval(cloud_update,100)

    var wid = $(window).width()
    var i = Math.random()*100
    while (i < wid - 100) {
        spawn_cloud(i)
        i+= Math.random()*100+60
    }
    cloud_update()

}

function cloud_update(){
        _spawn_ct--;
        if (_spawn_ct <= 0 && _clouds.length < 15) {
            _spawn_ct= Math.random()*100+2000;
            var wid = $(window).width()
            spawn_cloud(wid+150)
        }

        for (var i = _clouds.length-1; i >= 0; i--) {
            var obj = _clouds[i]

            obj.x -= obj.vx * 1

            obj.obj[0].style.left = obj.x+"px"
            //obj.obj.css({left:Math.floor(obj.x)+"px"})

            if (obj.x < -150) {
                obj.obj.remove()
                _clouds.splice(i,1)
            }
        }

    }

function spawn_cloud(start_x) {
    var height = Math.random()*560+140
    var neu = {
        x: start_x,
        obj: $("<img>").css({
            position:"absolute",
            left: "-999px",
            bottom: height+"px",
            width: 60+(250*(1-height/600))+"px"
        }).attr({
            src:"minimages/cloud.png"
        }),
        vx:(1-height/600)*0.4
    }
    _clouds.push(neu)
    $("#clouds").append(neu.obj)
}
