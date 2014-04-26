<!DOCTYPE html>
<html>
    <head>
        <title>Speedy Pups</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <link href="index.css" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js" type="text/javascript"> </script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

        <script type="text/javascript">
	        $(document).ready(function() {
			  $(".carousel").carousel({
			    interval: 2000
			  });
			  $(".carousel").on("slid", function() {
			    var to_slide;
			    to_slide = $(".carousel-item.active").attr("data-slide-no");
			    $(".myCarousel-target.active").removeClass("active");
			    $(".carousel-indicators [data-slide-to=" + to_slide + "]").addClass("active");
			  });
			  $(".myCarousel-target").on("click", function() {
			    $(this).preventDefault();
			    $(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
			    $(".myCarousel-target.active").removeClass("active");
			    $(this).addClass("active");
			  });
			});
        </script>

       	</head>
	
	<body>
		<div id="main_slider_section">
			<div id="main_slider_background">
				<div id="vid">
					<iframe width="480" height="220" src="//www.youtube.com/embed/dO2rM-l-vdQ?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		</div>

		<div id="main_bg">
			 <div id="features" class="container">
			    <div class="row">
			    	<div class="col-6-xs col-md-6">
			    		<div class="slider_background">
				    		<div class="carousel-container">
					          	<div id="carousel" class="carousel slide carousel-fade">

						            <!-- Carousel items -->
						            <div class="carousel-inner">
						              	<div data-slide-no="0" class="item carousel-item active">
						                	<img src="http://lorempixel.com/1920/1080/animals" alt="">
						              	</div>
						              	<div data-slide-no="1" class="item carousel-item">
						                	<img src="http://lorempixel.com/1920/1080/food" alt="">
						             	</div>
						              	<div data-slide-no="2" class="item carousel-item">
						                	<img src="http://lorempixel.com/1920/1080/cats" alt="">
						              	</div>
						            </div>
					            <!-- Carousel nav -->
					            <a class="carousel-control left" href="#carousel" data-slide="prev">‹</a>
					            <a class="carousel-control right" href="#carousel" data-slide="next">›</a>
					          	</div>

					          <!--
					          <ol class="carousel-indicators">
					            <li data-target="#carousel" data-slide-to="0" class="myCarousel-target active"></li>
					            <li data-target="#carousel" data-slide-to="1" class="myCarousel-target"></li>
					            <li data-target="#carousel" data-slide-to="2" class="myCarousel-target"></li>
					          </ol>
								-->
							</div>
				      	</div>
				    </div>

					<div class="col-6-xs col-md-6">
						<h2>Features</h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, mauris non suscipit blandit, 
							nisl libero vulputate ipsum, ac fermentum elit orci sollicitudin purus. Proin malesuada dictum elit, 
							at cursus tortor faucibus at. Morbi ornare suscipit sem, et ultrices diam laoreet sed. Nam adipiscing 
							sollicitudin dolor. Donec et nisl mattis erat cursus commodo at in justo. Fusce varius, justo eget pretium tristique, 
							tortor massa pharetra diam, et lacinia nisl mauris sed magna. Fusce dictum dapibus felis vel tincidunt.
						</p>
					</div>

			    </div>
			</div>

			<div id="screenshots">
				<div class="container">
				    <div class="row">
				    	<div class="col-6-xs col-md-6">
				    		<h2>Features</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie, mauris non suscipit blandit, 
								nisl libero vulputate ipsum, ac fermentum elit orci sollicitudin purus. Proin malesuada dictum elit, 
								at cursus tortor faucibus at. Morbi ornare suscipit sem, et ultrices diam laoreet sed. Nam adipiscing 
								sollicitudin dolor. Donec et nisl mattis erat cursus commodo at in justo. Fusce varius, justo eget pretium tristique, 
								tortor massa pharetra diam, et lacinia nisl mauris sed magna. Fusce dictum dapibus felis vel tincidunt.
							</p>
					    </div>

						<div class="col-6-xs col-md-6">

				    		<div class="slider_background">
					    		<div class="carousel-container">
						          	<div id="carousel" class="carousel slide carousel-fade">

							            <!-- Carousel items -->
							            <div class="carousel-inner">
							              	<div data-slide-no="0" class="item carousel-item active">
							                	<img src="http://lorempixel.com/1920/1080/animals" alt="">
							              	</div>
							              	<div data-slide-no="1" class="item carousel-item">
							                	<img src="http://lorempixel.com/1920/1080/food" alt="">
							             	</div>
							              	<div data-slide-no="2" class="item carousel-item">
							                	<img src="http://lorempixel.com/1920/1080/cats" alt="">
							              	</div>
							            </div>
						            <!-- Carousel nav -->
						            <a class="carousel-control left" href="#carousel" data-slide="prev">‹</a>
						            <a class="carousel-control right" href="#carousel" data-slide="next">›</a>
						          	</div>

						          <!--
						          <ol class="carousel-indicators">
						            <li data-target="#carousel" data-slide-to="0" class="myCarousel-target active"></li>
						            <li data-target="#carousel" data-slide-to="1" class="myCarousel-target"></li>
						            <li data-target="#carousel" data-slide-to="2" class="myCarousel-target"></li>
						          </ol>
									-->
								</div>
					      	</div>
						</div>

				    </div>
			    </div>
			</div>

			<div id="social">
				<div class="container">
				    <div class="row">
				    	<div class="col-md-8 col-md-offset-2 text-center">
				    		<img src="images/social_promo.png">

				    		<h3>Follow Us On:</h3>

				    		<div>
				    			<a href="http://www.twitter.com"><img class="icon" src="images/twitter_icon.png" /></a>
				    			<a href="http://www.facebook.com"><img class="icon" src="images/facebook_icon.png" /></a>
				    			<a href="http://www.youtube.com"><img class="icon" src="images/youtube_icon.png"></a>
				    		</div>
				    	</div>
				    </div>
				</div>
			</div>

			<div id="producers">
				<div class="container">
				    <div class="row">
				    	<div class="col-md-10 col-md-offset-1 text-center">
							<h3>
								Game Created<br />By:
							</h3>

							<p>
								DEVELOPMENT AND DESIGN:<br />SHINY YANG
							</p>

							<p>
								ART AND DESIGN:<br />TOM CHANG
							</p>

							<p>
								MUSIC:<br />DOGE
							</p>

							<p>
								WEBSITE:<br />WENJIE SHI
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
