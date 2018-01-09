function updatePageSpecific() {

}

function  checkAndUpdate(user){
	loadEventDetails();
}

function authLevel(){
	console.log('not signed-In');
//	window.location = "/auth/";
}

function load(festId){
	console.log('loading ' + festId);
	
	  $.ajax({
		  url: "http://college-fest-db.eu5.org/getFestInfo.php",
		  data : {
			  festId : festId
		  },
		  method : "POST",
		  success: function(festJson){
			  console.log(festJson);
			  setEventDetails(festJson);
			 
		  }, 
		  error: function(xhr, textStatus, errorThrown){
		     
		    }
		});
}

function setEventDetails(festJson){
	
	if(festJson.isReg == "1"){
		registeredEvent(festJson);
	}else{
		UnregisteredEvent(festJson);		
	}
	 $('#loading').hide();
}

function UnregisteredEvent(festJson){
	console.log('wweq');
	
	setTextLable(festJson.festCaption , "festTitle");
	setTextLable(festJson.numLikes,"likes") 
	setTextLable(festJson.numViews , "views");	
	
	setImgUrl(festJson.festLogoFile,"festLogo");
	
	setDate(festJson.festStartDate,festJson.festEndDate);
	
	setHtml(festJson.festCity + " , " + festJson.festState,"festLocation");

	setHtml(festJson.festOrganiser,"festOrganizer");
	
	setHtml(festJson.festType,"festType");

	setHtml(decodeURIComponent((festJson.aboutFest+'').replace(/\+/g, '%20')),"about-panel");
	setHtml(decodeURIComponent((festJson.eventDetails+'').replace(/\+/g, '%20')),"events-panel");
	setHtml(decodeURIComponent((festJson.registrationDetails+'').replace(/\+/g, '%20')),"registration-panel");
	setHtml(decodeURIComponent((festJson.contactDetails+'').replace(/\+/g, '%20')),"contact-panel");

}

function setDate(sDate,eDate){
	var date;
	if(sDate == eDate){
		date = eDate;
	}else{
		date = sDate + " - " + eDate;
	}
	
	setHtml(date,"festDates");

}

function setHtml(text,id){
	$('#'+id).html(text);
}

function setTextLable(text,id){
	$('#'+id).text(text);
}

function  setImgUrl(url,id){
	if(url == "" || url == "/assets/img/Eventlogo.gif"){
	url = "/img/enjoy.jpg";
	}
	$("#" + id).attr("src",url);
}

function registeredEvent(festJson){
	console.log('sDate');
		setTextLable(festJson.numLikes,"likes") 
	setTextLable(festJson.numViews , "views");	
	
	setImgUrl(festJson.festLogoFile,"festLogo");
	
	setDate(festJson.festStartDate,festJson.festEndDate);
	
	setHtml(festJson.festCity + " , " + festJson.festState,"festLocation");

	addrelatedTagLink(festJson.festCity,"location");
	addrelatedTagLink(festJson.festState,"location");


	setHtml(festJson.festOrganiser,"festOrganizer");
	
	var festType = "";
	for(var i in festJson.festType){
		festType += festJson.festType[i];
		if(i < festJson.festType.length-1){
			festType += " ,";
		}
		addrelatedTagLink(festJson.festType[i],"type");
	}
	
	setHtml(festType,"festType");


	var festTitle = festJson.festName + " , " + festJson.festCaption + " , " +  festJson.festOrganiser
	+ " , "+ festType;

	setTextLable(festTitle , "festTitle");

	setHtml(festJson.festName,"festName");
	setHtml(festJson.festDescription,"festDescription");
	setHtml(festJson.festCaption,"festCaption");
	
	addLinkButton("ADD","asadasd");
	addLinkButton("ADD","asadasd");
	addLinkButton("ADD","asadasd");
	addLinkButton("ADD","asadasd");

}
function addLinkButton(link,name){
	var col_tag = document.createElement('col');
	col_tag.className = "col-sm-12 col-xs-12 col-md-4";
	
	var li_tag = document.createElement('span');
	li_tag.className = "mdl-list__item";
	
	var span_tag = document.createElement('span');
	span_tag.className = "mdl-list__item-primary-content";
	
	var i_tag = document.createElement('span');
	i_tag.className = "material-icons mdl-list__item-icon";
	i_tag.innerHTML = "public";
	
	
	var a_tag = document.createElement('a');
	a_tag.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
	a_tag.setAttribute("href",link);
	a_tag.innerHTML = name;

	
	span_tag.appendChild(i_tag);
	span_tag.appendChild(a_tag);
	li_tag.appendChild(span_tag);
	col_tag.appendChild(li_tag);


	componentHandler.upgradeElement(i_tag);
	componentHandler.upgradeElement(a_tag);
	componentHandler.upgradeElement(span_tag);
	componentHandler.upgradeElement(li_tag);
	componentHandler.upgradeElement(col_tag);

	document.getElementById('links').appendChild(col_tag);


	
}
function addrelatedTagLink(tagTitle,linkPart){

	var a_tag = document.createElement('a');

	a_tag.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
	a_tag.setAttribute("href","/search?" + linkPart + "=" + tagTitle);
	a_tag.innerHTML = tagTitle;

	componentHandler.upgradeElement(a_tag);

	document.getElementById('related_tag_links').appendChild(a_tag);

}
