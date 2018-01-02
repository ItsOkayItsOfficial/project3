export const LawrencePreview = () => `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Lawrence Theme">
	<meta name="author" content="Carlos Alvarez - Alvarez.is - blacktie.co">
	<link rel="shortcut icon" href="assets/ico/favicon.png">

	<title>Lawrence</title>

	<!-- Bootstrap 3.0.2 CSS -->
	<link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="https://rawgit.com/ItsOkayItsOfficial/project3/app/client/public/assets/templates/lawrence/assets/css/main.css" rel="stylesheet">

	<!-- Font Awesome 4.0.3 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

	<!-- jQuery 1.10.2 -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Chart.js 1.0.1 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.1/Chart.min.js"></script>

</head>

<body>

	<!-- Fixed navbar -->
	<div class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">
					<i class="fa fa-bolt"></i>
				</a>
			</div>
			<div class="navbar-collapse collapse" >
				<ul class="nav navbar-nav navbar-right" id='nav'>
					<li>
						<a href="#about" class='nav-link'>About</a>
          </li>
					<li>
						<a href="#portfolio" class='nav-link'>Portfolio</a>
          </li>
					<li>
						<a href="#skills" class='nav-link'>Skills</a>
					</li>
					<li>
						<a href="#contact" class='nav-link'>Contact</a>
					</li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</div>


	<div id="hello">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 centered">
					<h1>Lawrence</h1>
					<h2>PORTFOLIO THEME BY PROJECT 3</h2>
				</div>
				<!-- /col-lg-8 -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /hello -->

	<div class="green" id='about'>
		<div class="container">
			<div class="row">
				<div class="col-lg-5 centered">
					<img src="assets/templates/lawrence/assets/img/iphone.png" alt="">
				</div>

				<div class="col-lg-7 centered">
					<h3>WHAT I CAN DO?</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="container" id='portfolio'>
		<div class="row centered mt grid">
			<h3>MY LATEST WORK</h3>
			<div class="mt"></div>
			<div class="col-lg-4">
				<a id="proj_1" href="#">
					<img src="assets/templates/lawrence/assets/img/01.jpg" alt="">
				</a>
			</div>
			<div class="col-lg-4">
				<a id="proj_2" href="#">
					<img src="assets/templates/lawrence/assets/img/02.jpg" alt="">
				</a>
			</div>
			<div class="col-lg-4">
				<a id="proj_3" href="#">
					<img src="assets/templates/lawrence/assets/img/03.jpg" alt="">
				</a>
			</div>
		</div>

		<div class="row centered mt grid">
			<div class="mt"></div>
			<div class="col-lg-4">
				<a id="proj_4" href="#">
					<img src="assets/templates/lawrence/assets/img/04.jpg" alt="">
				</a>
			</div>
			<div class="col-lg-4">
				<a id="proj_5" href="#">
					<img src="assets/templates/lawrence/assets/img/05.jpg" alt="">
				</a>
			</div>
			<div class="col-lg-4">
				<a id="proj_6" href="#">
					<img src="assets/templates/lawrence/assets/img/06.jpg" alt="">
				</a>
			</div>
		</div>

		<div class="row mt centered">
			<div class="col-lg-7 col-lg-offset-1 mt">
				<p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever.</p>
			</div>

			<div class="col-lg-3 mt">
				<p>
					<button type="button" class="btn btn-theme btn-lg">Email Me!</button>
				</p>
			</div>
		</div>
	</div>


	<div id="skills">
		<div class="container">
			<div class="row centered">
				<h3>MY SKILLS</h3>
				<div class="col-lg-3 mt">
					<canvas id="javascript" height="130" width="130"></canvas>
					<p>Javascript</p>
					<br>
					<script>
						var doughnutData = [{
								value: 70,
								color: "#74cfae"
							},
							{
								value: 30,
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 mt">
					<canvas id="bootstrap" height="130" width="130"></canvas>
					<p>Bootstrap</p>
					<br>
					<script>
						var doughnutData = [{
								value: 90,
								color: "#74cfae"
							},
							{
								value: 10,
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 mt">
					<canvas id="wordpress" height="130" width="130"></canvas>
					<p>Wordpress</p>
					<br>
					<script>
						var doughnutData = [{
								value: 65,
								color: "#74cfae"
							},
							{
								value: 35,
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
				<div class="col-lg-3 mt">
					<canvas id="photoshop" height="130" width="130"></canvas>
					<p>Photoshop</p>
					<br>
					<script>
						var doughnutData = [{
								value: 50,
								color: "#74cfae"
							},
							{
								value: 50,
								color: "#3c3c3c"
							}
						];
						var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);
					</script>
				</div>
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /skills -->

	<section id="contact"></section>
	<div id="social">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-8 col-lg-offset-2">
					<div class="col-md-3">
						<a href="#">
							<i class="fa fa-facebook"></i>
						</a>
					</div>
					<div class="col-md-3">
						<a href="#">
							<i class="fa fa-dribbble"></i>
						</a>
					</div>
					<div class="col-md-3">
						<a href="#">
							<i class="fa fa-twitter"></i>
						</a>
					</div>
					<div class="col-md-3">
						<a href="#">
							<i class="fa fa-envelope"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /container -->
	</div>
	<!-- /social -->


	<div id="f">
		<div class="container">
			<div class="row">
				<p>Crafted with
					<i class="fa fa-heart"></i> by BlackTie.co.</p>
			</div>
		</div>
	</div>


	<!-- Bootstrap 3.0.2 -->
	<script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<script>
    $('.nav-link, .nav-logo').on('click', function (event) {
      event.preventDefault()

      $('html, body').animate(
        {scrollTop: $(this.hash).offset().top},
        {duration: 1000, easing: 'swing'}
      );
    });
	</script>
</body>

</html>`