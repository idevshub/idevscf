<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>

<html>
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description"
	content="Here You can host details about your College Fetivals.We design websites for college festivals like Symposiums, Tech-Fest, Seminor and culturals.">
<meta name="keywords"
	content="College symposiums, Technical Festival, Non-technical Festival, Culturals ,Technical events, Conferences">


<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script src="${pageContext.request.contextPath}/custom/js/auth.js">
	
</script>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/mdl/material.min.js"></script>
<script src="${pageContext.request.contextPath}/custom/js/custom.js"></script>

<script src="${pageContext.request.contextPath}/custom/js/event.js"></script>

<script type="text/javascript">
	function loadEventDetails() {
<%if (request.getPathInfo() != null && request.getPathInfo().split("/").length > 1
					&& !request.getPathInfo().split("/")[1].equals("")) {

				String paths[] = request.getPathInfo().split("/");
				if (paths.length > 1) {%>
	load(
<%=paths[1]%>
	)
<%}

			} else {
				String redirectURL = "http://localhost:8081/CF/404";
				response.sendRedirect(redirectURL);
			}%>
	}
</script>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<link rel="stylesheet"
	href="${pageContext.request.contextPath}/bs/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/custom/css/custom.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/mdl/material.min.css">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons">

<style type="text/css">
#loading {
	background: url("${pageContext.request.contextPath}/img/loading.gif")
		no-repeat scroll center center #FFF;
	position: absolute;
	height: 100%;
	width: 100%;
}

.navbar-fixed {
	top: 0;
	position: fixed;
	width: 100%;
}

.demo-card-wide.mdl-card {
	width: 250px;
}

.demo-card-wide>.mdl-card__title {
	color: #fff;
	height: 130px;
}

.demo-card-wide>.mdl-card__menu {
	color: #fff;
}
</style>


<style type="text/css">
#add_button {
	position: fixed;
	right: 5;
	bottom: 5;
	z-index: 10;
}

#map {
	height: 30%;
}

.social-btns {
	padding-top: 10;
	padding-left: 5;
}

.social-btn {
	padding-left: 15;
}

.contact-pic {
	display: block;
	border-radius: 70%;
	width: 150px;
	height: 150px;
}

.contact-card {
	margin-top: 8;
	margin-right: 8;
}

.mdl-tabs__tab {
	font-size: 10;
}

.mdl-button {
	margin-top: 5;
}

.related-tags {
	width: 100%;
	height: 30;
	background-color: #ff4081;
}

.mdl-chip {
	margin-top: 30;
}

.mdl-card {
	width: 30%;
}

.right-side-list {
	border-bottom: thin solid #ff0000;
}
</style>
</head>
<body>

	<div id="loading"></div>

	<header id="nav_bar"
		class="bs-docs-nav navbar navbar-default navbar-static-top">

		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
					aria-expanded="false">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"> College Fest <!-- <img alt="Brand" height="30px" width="80px" src="img/icon.jpg"> -->
				</a>
			</div>

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li style="background-color: white;"><a href="#">Home</a></li>
					<li>
					<li><a href="#">Create Events<span
							class="glyphicon glyphicon-plus btnicon" aria-hidden="true"></span></a></li>
					</li>
					<li><a href="#">Create WebSites</a></li>

					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">Event Type <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Technical Fests</a></li>
							<li><a href="#">Culturals Fests</a></li>
							<li><a href="#">Management Fests</a></li>
							<li><a href="#">Sports Events</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Seminor</a></li>
							<li><a href="#">Conferences</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Paper Presentation</a></li>
							<li><a href="#">Project Presentation</a></li>
							<li><a href="#">Workshops</a></li>

						</ul></li>

				</ul>



				<ul class="nav navbar-nav navbar-right">

					<li>
						<form class="nav navbar-nav navbar-form navbar-right">
							<div class="form-group">

								<input id="search_box" type="text" class="form-control"
									placeholder="Search">
								<div class="mdl-tooltip mdl-tooltip--large" for="search_box">
									Search For College Fest</div>
								<button type="submit" class="btn btn-default">
									<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								</button>
							</div>

						</form>
					</li>
					<li><a id="usrActivity" href="#">SignIn<span
							class="glyphicon glyphicon-log-in btnicon" aria-hidden="true"></span></a></li>

				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</header>





	<div class="container" id="content_body">

		<!-- title -->
		<div class="row">


			<div class="col-sm-12 col-xs-12 col-md-9">
				<h5 id="festTitle"></h5>
				<hr>
			</div>

			<div class="col-sm-12 col-xs-12 col-md-2" align="right"
				style="margin-top: 15;">
				<i class="material-icons">favorite</i> <span id="likes"></span> <i
					style="margin-left: 10;" class="material-icons">visibility</i> <span
					id="views"></span>
			</div>
		</div>



		<!-- image & description -->

		<div class="row">


			<div class="col-sm-12 col-xs-12 col-md-3 ">

				<img id="festLogo" src=""
					style="height: 180; width: 280; margin-top: 40;" />

				<div class="social-btns" id="social_links_btn">
					<a href="#" class="fa fa-facebook"></a> <a href="#"
						class="fa fa-twitter"></a> <a href="#" class="fa fa-youtube"></a>
					<a href="#" class="fa fa-google"></a>
				</div>

			</div>

			<div class="col-sm-12 col-xs-12 col-md-6">


				<div class="row">
					<div class="col-sm-12 col-xs-12 col-md-12">

						<h6>
							<b>Event Dates </b>: <span> <i class="material-icons">event</i>
								<span id="festDates">28th May 2017 - 30th May 2017</span>
							</span>
						</h6>

						<h6>
							<b> Place </b>: <span align="right"> <i
								class="material-icons">location_on</i> <span id="festLocation">Chennai</span>
							</span>
						</h6>

						<h6>
							<b> Organized by </b>: <span align="right"> <i
								class="material-icons">person </i> <span id="festOrganizer">Government
									College of Techonology,Coimbatiore</span>
							</span>
						</h6>

						<h6>
							<b> Fest Type </b>: <span align="right"> <i
								class="material-icons"></i> <span id="festType">Techinical
									Fest</span>
							</span>
						</h6>
					</div>

				</div>

				<div class="row">
					<div class="col-sm-12 col-xs-12 col-md-12 "></div>

				</div>



			</div>

			<div class="col-sm-12 col-xs-12 col-md-3">
				<span class="mdl-chip mdl-chip--contact"> <span
					class="mdl-chip__contact mdl-color--teal mdl-color-text--white">T</span>
					<span class="mdl-chip__text">Tages</span>
				</span> <br>
				<div id="related_tag_links"></div>

			</div>

		</div>


		<div class="row">

			<div class="col-sm-12 col-xs-12 col-md-9 ">


				<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
					<div class="mdl-tabs__tab-bar">
						<a href="#about-panel" class="mdl-tabs__tab is-active">About</a> <a
							href="#events-panel" class="mdl-tabs__tab">Events</a> <a
							href="#registration-panel" class="mdl-tabs__tab">Registration</a>
						<a href="#contact-panel" class="mdl-tabs__tab">Contact</a>

					</div>

					<div id="tab-items">
						<div class="mdl-tabs__panel is-active" id="about-panel">

							<b><h4 id="festName"></h4></b>
							<h6 id="festCaption" align="center"></h6>

							<h5>Description</h5>


							<p id="festDescription"></p>

							<div class="row" style="display: none;">

								<div class="col-sm-12 col-xs-12 col-md-12 ">

									<h4>Promo video</h4>
									<div align="center">
										<iframe width="100%" height="40%" id="youtubeLink"
											src="https://www.youtube.com/embed/XGSy3_Czz8k"> </iframe>

									</div>
								</div>

							</div>

							<div class="row">

								<div class="col-sm-12 col-xs-12 col-md-12 ">
									<h5>Important links :</h5>

									<div class="row" id="links">

									</div>
									<!-- <ul class="demo-list-icon mdl-list" id="links">
										
									</ul> -->

								</div>

							</div>

						</div>
						<div class="mdl-tabs__panel" id="events-panel">
							<ul>
								<li>Tywin</li>
								<li>Cersei</li>
								<li>Jamie</li>
								<li>Tyrion</li>
							</ul>
						</div>
						<div class="mdl-tabs__panel" id="registration-panel">
							<ul>
								<li>Viserys</li>
								<li>Daenerys</li>
							</ul>
						</div>

						<div class="mdl-tabs__panel" id="contact-panel">
							<h4>Contact persons :</h4>


							<div class="row">



								<div class="col-sm-6 col-xs-12 col-md-3 contact-card">

									<div class="demo-card-wide mdl-card mdl-shadow--4dp"
										align="center">
										<div class="mdl-card__title"
											style="background: url('') center/cover;">
											<div class="contact-pic mdl-shadow--4dp"
												style="margin-left: 15%; margin-top: 15%; background: url('') center/cover;">

											</div>
										</div>
										<div class="mdl-card__supporting-text">
											<h4>Name</h4>
											<h5>
												<b>Title</b>
											</h5>
											<div>
												<span> <i class="material-icons">call </i> 8807552267
												</span> <br> <span align="right"> <i
													class="material-icons">email </i> nlanandkumar@gmail.com
												</span>
											</div>
										</div>

									</div>

								</div>

								<div
									class="col-sm-6 col-xs-12 col-md-3 col-md-offset-1 contact-card">

									<div class="demo-card-wide mdl-card mdl-shadow--4dp"
										align="center">
										<div class="mdl-card__title"
											style="background: url('') center/cover;">
											<div class="contact-pic mdl-shadow--4dp"
												style="margin-left: 15%; margin-top: 15%; background: url('') center/cover;">

											</div>
										</div>
										<div class="mdl-card__supporting-text">
											<h4>Name</h4>
											<h5>
												<b>Title</b>
											</h5>
											<div>
												<span> <i class="material-icons">call </i> 8807552267
												</span> <br> <span align="right"> <i
													class="material-icons">email </i> nlanandkumar@gmail.com
												</span>
											</div>
										</div>

									</div>

								</div>


							</div>



							<div class="row">

								<div class="col-sm-12 col-xs-12 col-md-12 ">
									<h4>Location</h4>
									<div id="map"></div>

								</div>

							</div>

						</div>
					</div>
				</div>



			</div>

			<div class="col-sm-12 col-xs-12 col-md-3">

				<span class="mdl-chip mdl-chip--contact"> <span
					class="mdl-chip__contact mdl-color--teal mdl-color-text--white">T</span>
					<span class="mdl-chip__text">Related Evenets</span>
				</span>

				<ul class="demo-list-two mdl-list">




					<li class="mdl-list__item mdl-list__item--two-line right-side-list"><span
						class="mdl-list__item-primary-content"> <span>Bryan
						</span> <span class="mdl-list__item-sub-title" style="font-size: 12;">

								<span> <i class="material-icons">event</i>25 May 2017
							</span> <span align="right"><i class="material-icons">location_on</i>
									chennai</span>
						</span>
					</span></li>

					<li class="mdl-list__item mdl-list__item--two-line right-side-list"><span
						class="mdl-list__item-primary-content"> <span>Bryan
						</span> <span class="mdl-list__item-sub-title" style="font-size: 12;">

								<span> <i class="material-icons">event</i>25 May 2017
							</span> <span align="right"><i class="material-icons">location_on</i>
									chennai</span>
						</span>
					</span></li>

					<li class="mdl-list__item mdl-list__item--two-line right-side-list"><span
						class="mdl-list__item-primary-content"> <span>Bryan
						</span> <span class="mdl-list__item-sub-title" style="font-size: 12;">

								<span> <i class="material-icons">event</i>25 May 2017
							</span> <span align="right"><i class="material-icons">location_on</i>
									chennai</span>
						</span>
					</span></li>

				</ul>

			</div>
		</div>



	</div>




	<footer class="mdl-mega-footer">
		<div class="mdl-mega-footer__middle-section">



			<div class="mdl-mega-footer__drop-down-section">
				<input class="mdl-mega-footer__heading-checkbox" type="checkbox"
					checked>
				<h1 class="mdl-mega-footer__heading">About</h1>
				<p>Knowafest.com is a tie-up and a consortium of all the college
					campus festivals in India. Our aim is to connect students from
					campuses all over India by making them aware of Technical,
					Cultural, Management Fests, Workshops, Conferences, Seminars
					organized by each and every college in India.</p>
			</div>

			<div class="mdl-mega-footer__drop-down-section">
				<input class="mdl-mega-footer__heading-checkbox" type="checkbox"
					checked>
				<h1 class="mdl-mega-footer__heading">Details</h1>
				<ul class="mdl-mega-footer__link-list">
					<li><a href="#">Specs</a></li>
					<li><a href="#">Tools</a></li>
					<li><a href="#">Resources</a></li>
				</ul>
			</div>

			<div class="mdl-mega-footer__drop-down-section">
				<input class="mdl-mega-footer__heading-checkbox" type="checkbox"
					checked>
				<h1 class="mdl-mega-footer__heading">Technology</h1>
				<ul class="mdl-mega-footer__link-list">
					<li><a href="#">How it works</a></li>
					<li><a href="#">Patterns</a></li>
					<li><a href="#">Usage</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">Contracts</a></li>
				</ul>
			</div>

			<div class="mdl-mega-footer__drop-down-section">
				<input class="mdl-mega-footer__heading-checkbox" type="checkbox"
					checked>
				<h1 class="mdl-mega-footer__heading">FAQ</h1>
				<ul class="mdl-mega-footer__link-list">
					<li><a href="#">Questions</a></li>
					<li><a href="#">Answers</a></li>
					<li><a href="#">Contact us</a></li>
				</ul>
			</div>

		</div>

		<div class="mdl-mega-footer__bottom-section">
			<div class="mdl-logo">Title</div>
			<ul class="mdl-mega-footer__link-list">
				<li><a href="#">Help</a></li>
				<li><a href="#">Privacy & Terms</a></li>
			</ul>
		</div>

	</footer>


	<!--
dialog
-->

	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<!-- <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
				<div class="modal-body" style="direction: ltr;">
					<div>Create New Event</div>
					<div>Create Function Website</div>
				</div>
				<!--   <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
			</div>
		</div>
	</div>


	<div id="add_button">

		<button type="button"
			class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
			data-toggle="modal" data-target="#myModal">
			<i class="material-icons">add</i>
		</button>

	</div>

	<!-- <style type="text/css" src="bs/js/bootstrap.min.js"></style>
<style type="text/css" src="jq/jquery-3.2.0.min.js"></style> -->

	<div id="toast_cnt" class="mdl-js-snackbar mdl-snackbar">
		<div class="mdl-snackbar__text"></div>
		<button class="mdl-snackbar__action" type="button"></button>
	</div>

	<script>
		(function() {
			'use strict';
			window['counter'] = 0;
			var snackbarContainer = document.querySelector('#toast_cnt');
			var showToastButton = document.querySelector('#share_btn');
			showToastButton.addEventListener('click', function() {
				'use strict';
				console.log('click');
				var data = {
					message : 'Example Message # ' + ++counter
				};
				snackbarContainer.MaterialSnackbar.showSnackbar(data);
			});
		}());
	</script>

	<script>
		var map;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center : {
					lat : 12.8318082,
					lng : 80.0987793
				},
				zoom : 8,
				styles : [ {
					elementType : 'geometry',
					stylers : [ {
						color : '#242f3e'
					} ]
				}, {
					elementType : 'labels.text.stroke',
					stylers : [ {
						color : '#242f3e'
					} ]
				}, {
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#746855'
					} ]
				}, {
					featureType : 'administrative.locality',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#d59563'
					} ]
				}, {
					featureType : 'poi',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#d59563'
					} ]
				}, {
					featureType : 'poi.park',
					elementType : 'geometry',
					stylers : [ {
						color : '#263c3f'
					} ]
				}, {
					featureType : 'poi.park',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#6b9a76'
					} ]
				}, {
					featureType : 'road',
					elementType : 'geometry',
					stylers : [ {
						color : '#38414e'
					} ]
				}, {
					featureType : 'road',
					elementType : 'geometry.stroke',
					stylers : [ {
						color : '#212a37'
					} ]
				}, {
					featureType : 'road',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#9ca5b3'
					} ]
				}, {
					featureType : 'road.highway',
					elementType : 'geometry',
					stylers : [ {
						color : '#746855'
					} ]
				}, {
					featureType : 'road.highway',
					elementType : 'geometry.stroke',
					stylers : [ {
						color : '#1f2835'
					} ]
				}, {
					featureType : 'road.highway',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#f3d19c'
					} ]
				}, {
					featureType : 'transit',
					elementType : 'geometry',
					stylers : [ {
						color : '#2f3948'
					} ]
				}, {
					featureType : 'transit.station',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#d59563'
					} ]
				}, {
					featureType : 'water',
					elementType : 'geometry',
					stylers : [ {
						color : '#17263c'
					} ]
				}, {
					featureType : 'water',
					elementType : 'labels.text.fill',
					stylers : [ {
						color : '#515c6d'
					} ]
				}, {
					featureType : 'water',
					elementType : 'labels.text.stroke',
					stylers : [ {
						color : '#17263c'
					} ]
				} ]
			});
		}
	</script>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzmfbah517AUk0BgIhzs756-zC_2EgIR8
&callback=initMap"
		async defer></script>


</body>
</html>