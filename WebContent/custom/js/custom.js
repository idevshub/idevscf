

function takeToLogin(){
	window.location = "/auth/";
}

function addTextToTextBox(id,value){
	if(value != null && value.length > 0){
	  $('#'+id).val(value).parent().addClass('is-dirty');  
	}
}


function addLikes(festId){
	console.log('like');
}

function openFestLink(festId){
	console.log(festId);

}

function shareFestLink(festId){
	console.log(festId);

}

function editEvent(festId){
console.log(festId);	
}


function createCardView(festInfo){

	var div_col1 = document.createElement('div');
	div_col1.className = "col-sm-12 col-xs-12 col-md-3 col-md-offset-1";

	var div_demo_card_wide = document.createElement('div');
	div_demo_card_wide.className = "demo-card-wide mdl-card mdl-shadow--2dp";

	var div_mdl_card__title = document.createElement('div');
	div_mdl_card__title.className =  "mdl-card__title";
	div_mdl_card__title.style = "background: url('"+festInfo.img_url+"') center/cover;";

	var h2_title = document.createElement('h2');
	h2_title.className = "mdl-card__title-text";
	h2_title.innerHTML = "Welcome";


	var div_mdl_card__supporting_text = document.createElement('div');
	div_mdl_card__supporting_text.className = "mdl-card__supporting-text";

	var p_details = document.createElement('p');
	p_details.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elite Mauris sagittis pellentesque lacus eleifend lacinia...";

	var div_iconholder = document.createElement('div');

	var span_iconholder1 = document.createElement('span');
	var i_iconholder1 = document.createElement('i');
	i_iconholder1.className="material-icons";
	i_iconholder1.innerHTML = "event";


	var span_iconholder2 = document.createElement('span');
	var i_iconholder2 = document.createElement('i');
	i_iconholder2.className="material-icons";
	i_iconholder2.innerHTML = "location_on";


	span_iconholder1.innerHTML = "<span> <i class=\"material-icons\">event </i> 28/10/2017</span>" ;
	span_iconholder2.innerHTML =  "<span align=\"right\"> <i class=\"material-icons\">location_on</i> "+ "Chennai" +"</span>";


	var div_mdl_card__actions = document.createElement('div');
	div_mdl_card__actions.className = "mdl-card__actions mdl-card--border";

	var button_views = document.createElement('button');
	button_views.className = "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect";
	button_views.id = "views_btn_fest_" + festInfo.festId ; 

	var i_views = document.createElement('i');
	i_views.className = "material-icons";
	i_views.innerHTML = "visibility";

	var i_views_count = document.createElement('i');
	i_views_count.innerHTML = festInfo.view_count;

	var button_likes = document.createElement('button');
	button_likes.className = "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect";
	button_likes.id = "likes_btn_fest_" + festInfo.festId ; 
	button_likes.onclick = function(){addLikes(festInfo.festId);}


	var i_likes = document.createElement('i');
	i_likes.className = "material-icons";
	i_likes.innerHTML = "favorite";

	var i_likes_count = document.createElement('i');
	i_likes_count.innerHTML = festInfo.likes_count;


	var button_read = document.createElement('button');
	button_read.className = "mdl-button mdl-js-button mdl-js-ripple-effect";
	button_read.id = "read_btn_fest_" + festInfo.festId ; 
	button_read.onclick = function(){openFestLink(festInfo.festId);}
	button_read.style = "align: right;";
	button_read.innerHTML = "read more";

	var div_mdl_card__menu = document.createElement('div');
	div_mdl_card__menu.className = "mdl-card__menu";

	var button_share = document.createElement('button');
	button_share.className = "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect";
	button_share.id =  "share_btn_fest_" + festInfo.festId;
	button_share.onclick = function(){shareFestLink(festInfo.festId)};

	i_share = document.createElement('i');
	i_share.className = "material-icons";
	i_share.innerHTML = "share";

	button_share.appendChild(i_share);
	div_mdl_card__menu.appendChild(button_share);

	div_iconholder.appendChild(span_iconholder1);
	div_iconholder.appendChild(span_iconholder2);

	div_mdl_card__supporting_text.appendChild(p_details);
	div_mdl_card__supporting_text.appendChild(div_iconholder);

	div_mdl_card__title.appendChild(h2_title);

	button_views.appendChild(i_views);

	button_likes.appendChild(i_likes);



	div_mdl_card__actions.appendChild(button_views);
	div_mdl_card__actions.appendChild(i_views_count);

	div_mdl_card__actions.appendChild(button_likes);
	div_mdl_card__actions.appendChild(i_likes_count);

	div_mdl_card__actions.appendChild(button_read);

	

	div_demo_card_wide.appendChild(div_mdl_card__title);
	div_demo_card_wide.appendChild(div_mdl_card__supporting_text);
	div_demo_card_wide.appendChild(div_mdl_card__actions);
	div_demo_card_wide.appendChild(div_mdl_card__menu);


	div_col1.appendChild(div_demo_card_wide);


	componentHandler.upgradeElement(i_iconholder1);
	componentHandler.upgradeElement(i_iconholder2);

	componentHandler.upgradeElement(span_iconholder1);
	componentHandler.upgradeElement(span_iconholder2);

	componentHandler.upgradeElement(div_iconholder);
	componentHandler.upgradeElement(p_details);

	componentHandler.upgradeElement(h2_title);

	componentHandler.upgradeElement(i_views);
	componentHandler.upgradeElement(i_likes);
	componentHandler.upgradeElement(button_views);
	componentHandler.upgradeElement(button_likes);
	componentHandler.upgradeElement(button_read);


	componentHandler.upgradeElement(i_share);
	componentHandler.upgradeElement(button_share);
	
	componentHandler.upgradeElement(div_mdl_card__title);
	componentHandler.upgradeElement(div_mdl_card__supporting_text);
	componentHandler.upgradeElement(div_mdl_card__actions);
	componentHandler.upgradeElement(div_mdl_card__menu);

	componentHandler.upgradeElement(div_demo_card_wide);

	componentHandler.upgradeElement(div_col1);


	document.getElementById(festInfo.rowId).appendChild(div_col1);
}

$(document).ready(function() {
	initApp();
	
	$(window).scroll(function () {

		if ($(window).scrollTop() > 280) {
			$('#nav_bar').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 281) {
			$('#nav_bar').removeClass('navbar-fixed');
		}
	});

	$('#eventDetailsTemp').hide();


	updatePageSpecific();

});
