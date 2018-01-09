var eventNumbers = 1;
var totalEvents = 1;

var contactPnumbers = 1;
var totalContacts =1;

var selectedFestType = "";

var selectedDepType = "";



function authLevel(){
	console.log('not signed-In');
	window.location = "/auth/";
}

function checkAndUpdate(user){
	console.log(user.uid);
	$('#userId').val(user.uid);
}

function removeEventClick(id){

	console.log(id);
	var eventId = id.split("_")[0];
	document.getElementById(eventId).remove(); 

	totalEvents --; 
	console.log(totalEvents);
}

function removeContactClick(id){

	console.log(id);
	var contactId = id.split("_")[0];
	document.getElementById(contactId).remove(); 

	totalContacts --; 
	console.log(totalContacts);

}

function addEventRow(rowData){
	var tr_row = document.createElement('tr');
	
	var td1_data = document.createElement('td');
	td1_data.innerHTML = rowData.festId;
	
	var td2_data = document.createElement('td');
	td2_data.className = "mdl-data-table__cell--non-numeric";
	td2_data.innerHTML = rowData.festName;
	
	var td3_data = document.createElement('td');
	td3_data.className = "mdl-data-table__cell--non-numeric";

	
	var button_edit = document.createElement('button');
	button_edit.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
	button_edit.id = "edit_btn_fest_" + rowData.festId ; 
	button_edit.onclick = function(){editEvent(rowData.festId);}
	button_edit.innerHTML = "update";
	
	td3_data.appendChild(button_edit);
	
	tr_row.appendChild(td1_data);
	tr_row.appendChild(td2_data);
	tr_row.appendChild(td3_data);
	
	componentHandler.upgradeElement(button_edit);
	componentHandler.upgradeElement(td3_data);
	componentHandler.upgradeElement(td2_data);
	componentHandler.upgradeElement(td1_data);
	componentHandler.upgradeElement(tr_row);
	
	document.getElementById('festTableBody').appendChild(tr_row);

}


function updatePageSpecific() {

	$('.eventList').on("change" , function(){
		selectedFestType = "";
		$("input:checkbox[name=festType]:checked").each(function(){
			selectedFestType += ":" + $(this).val();
		});
		console.log(selectedFestType);

		$("#selectedFestType").val(selectedFestType);
	});

	$('#userId').val(usrId);

	$('#logoFile').on("change",function(){

		$("#festLogolink").val($(this).val());

	});
	
	$('.depList').on("change" , function(){
		selectedDepType = "";
		$("input:checkbox[name=festDept]:checked").each(function(){
			selectedDepType += ":" + $(this).val();
		});
		console.log(selectedDepType);
		$("#selectedDepType").val(selectedDepType);
	});

	$('#userId').val(usrId);

	$('#logoFile').on("change",function(){

		$("#festLogolink").val($(this).val());

	});

	$('#eventAddBtn').on("click", function() {

		eventNumbers++;
		totalEvents ++;

		var eventId_ = "eventId" + (eventNumbers);

		var div_row = document.createElement('div');
		div_row.className = "row";
		div_row.id = eventId_;


		var div_col1 = document.createElement('div');
		div_col1.className = "col-sm-12 col-xs-12 col-md-4";

		var div_eventName = document.createElement('div');
		div_eventName.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_eventName = document.createElement('input');
		input_eventName.className = "mdl-textfield__input";
		input_eventName.id = eventId_ + "_name";
		input_eventName.name = eventId_ + "_name";
		input_eventName.required = true;
		input_eventName.setAttribute("type","text");

		var lable_eventName = document.createElement('lable');
		lable_eventName.className = "mdl-textfield__label";
		lable_eventName.setAttribute("for",eventId_ + "_name");
		lable_eventName.innerHTML = "Event Name";

		div_eventName.appendChild(input_eventName);

		div_eventName.appendChild(lable_eventName);

		div_col1.appendChild(div_eventName);

		div_row.appendChild(div_col1);



		var div_col2 = document.createElement('div');
		div_col2.className = "col-sm-12 col-xs-12 col-md-3";

		var div_eventType = document.createElement('div');
		div_eventType.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_eventType = document.createElement('select');
		input_eventType.className = "mdl-textfield__input";
		input_eventType.id = eventId_ + "_type";
		input_eventType.name = eventId_ + "_type";				
		input_eventType.setAttribute("type","text");

		var option_1 = document.createElement('option');
		option_1.value = "";
		option_1.innerHTML = "Select Type";

		input_eventType.appendChild(option_1);

		var option_2 = document.createElement('option');
		option_2.value = "Technical";
		option_2.innerHTML = "Technical";

		input_eventType.appendChild(option_2);

		var option_3 = document.createElement('option');

		option_3.value = "Non-Technical";
		option_3.innerHTML = "Non-Technical";

		input_eventType.appendChild(option_3);

		var option_4 = document.createElement('option');

		option_4.value = "Culturals";
		option_4.innerHTML = "Culturals";

		input_eventType.appendChild(option_4);

		var option_5 = document.createElement('option');

		option_5.value = "Others";
		option_5.innerHTML = "Others";

		input_eventType.appendChild(option_5);


		div_eventType.appendChild(input_eventType);

		div_col2.appendChild(div_eventType);

		div_row.appendChild(div_col2);


		var div_col3 = document.createElement('div');
		div_col3.className = "col-sm-12 col-xs-12 col-md-4";

		var div_eventDescription = document.createElement('div');
		div_eventDescription.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_eventDescription = document.createElement('textarea');
		input_eventDescription.className = "mdl-textfield__input";
		input_eventDescription.id = eventId_ + "_description";
		input_eventDescription.name = eventId_ + "_description";
		input_eventDescription.setAttribute("type","text");
		input_eventDescription.setAttribute("rows","1");


		var lable_eventDescription = document.createElement('lable');
		lable_eventDescription.className = "mdl-textfield__label";
		lable_eventDescription.setAttribute("for",eventId_ + "_description");
		lable_eventDescription.innerHTML = "Event Description";

		div_eventDescription.appendChild(input_eventDescription);

		div_eventDescription.appendChild(lable_eventDescription);

		div_col3.appendChild(div_eventDescription);

		div_row.appendChild(div_col3);


		var div_col4 = document.createElement('div');
		div_col4.className = "col-sm-12 col-xs-12 col-md-1";

		var btn_eventRemove = document.createElement('button');
		btn_eventRemove.className = "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored eventRemove";
		btn_eventRemove.id = eventId_ + "_remove";
		btn_eventRemove.type = "button";
		btn_eventRemove.setAttribute("onclick","removeEventClick(this.id);");
		var icon_remove = document.createElement('i');
		icon_remove.className = "material-icons";
		icon_remove.innerHTML = "delete";

		btn_eventRemove.appendChild(icon_remove);

		div_col4.appendChild(btn_eventRemove);

		div_row.appendChild(div_col4);



		componentHandler.upgradeElement(lable_eventName);

		componentHandler.upgradeElement(input_eventName);

		componentHandler.upgradeElement(div_eventName);


		componentHandler.upgradeElement(input_eventType);

		componentHandler.upgradeElement(div_eventType);


		componentHandler.upgradeElement(lable_eventDescription);

		componentHandler.upgradeElement(input_eventDescription);

		componentHandler.upgradeElement(div_eventDescription);

		componentHandler.upgradeElement(icon_remove);

		componentHandler.upgradeElement(btn_eventRemove);


		componentHandler.upgradeElement(div_col1);

		componentHandler.upgradeElement(div_col2);

		componentHandler.upgradeElement(div_col3);

		componentHandler.upgradeElement(div_col4);


		componentHandler.upgradeElement(div_row);

		document.getElementById('eventDetailsContainer').appendChild(div_row);
	});


	$('#contactAddBtn').on("click", function() {


		contactPnumbers++;
		totalContacts ++;

		var contactId = "contactId" + (contactPnumbers);

		var div_row = document.createElement('div');
		div_row.className = "row";
		div_row.id = contactId;


		var div_col1 = document.createElement('div');
		div_col1.className = "col-sm-12 col-xs-12 col-md-3";

		var div_CName = document.createElement('div');
		div_CName.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_CName = document.createElement('input');
		input_CName.className = "mdl-textfield__input";
		input_CName.id = contactId + "_name";
		input_CName.name = contactId + "_name";
		input_CName.required = true;

		input_CName.setAttribute("type","text");

		var lable_CName = document.createElement('lable');
		lable_CName.className = "mdl-textfield__label";
		lable_CName.setAttribute("for",contactId + "_name");
		lable_CName.innerHTML = "Contact Name";

		div_CName.appendChild(input_CName);

		div_CName.appendChild(lable_CName);

		div_col1.appendChild(div_CName);

		div_row.appendChild(div_col1);

		var div_col2 = document.createElement('div');
		div_col2.className = "col-sm-12 col-xs-12 col-md-2";

		var div_CRole = document.createElement('div');
		div_CRole.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_CRole = document.createElement('input');
		input_CRole.className = "mdl-textfield__input";
		input_CRole.id = contactId + "_role";
		input_CRole.name = contactId + "_role";
		input_CRole.setAttribute("type","text");

		var lable_CRole = document.createElement('lable');
		lable_CRole.className = "mdl-textfield__label";
		lable_CRole.setAttribute("for",contactId + "_role");
		lable_CRole.innerHTML = "Role";

		div_CRole.appendChild(input_CRole);

		div_CRole.appendChild(lable_CRole);

		div_col2.appendChild(div_CRole);

		div_row.appendChild(div_col2);


		var div_col3 = document.createElement('div');
		div_col3.className = "col-sm-12 col-xs-12 col-md-3";

		var div_CmailId = document.createElement('div');
		div_CmailId.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_CmailId = document.createElement('input');
		input_CmailId.className = "mdl-textfield__input";
		input_CmailId.id = contactId + "_mailId";
		input_CmailId.name = contactId + "_mailId";

		input_CmailId.required = true;
		input_CmailId.setAttribute("type","text");

		var lable_CmailId = document.createElement('lable');
		lable_CmailId.className = "mdl-textfield__label";
		lable_CmailId.setAttribute("for",contactId + "_mailId");
		lable_CmailId.innerHTML = "Mail Id";

		div_CmailId.appendChild(input_CmailId);

		div_CmailId.appendChild(lable_CmailId);

		div_col3.appendChild(div_CmailId);

		div_row.appendChild(div_col3);


		var div_col4 = document.createElement('div');
		div_col4.className = "col-sm-12 col-xs-12 col-md-3";

		var div_Cmobile = document.createElement('div');
		div_Cmobile.className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";

		var input_Cmobile = document.createElement('input');
		input_Cmobile.className = "mdl-textfield__input";
		input_Cmobile.id = contactId + "_mobile";
		input_Cmobile.name = contactId + "_mobile";

		input_Cmobile.setAttribute("type","text");

		var lable_Cmobile = document.createElement('lable');
		lable_Cmobile.className = "mdl-textfield__label";
		lable_Cmobile.setAttribute("for",contactId + "_mobile");
		lable_Cmobile.innerHTML = "Mobile";

		div_Cmobile.appendChild(input_Cmobile);

		div_Cmobile.appendChild(lable_Cmobile);

		div_col4.appendChild(div_Cmobile);

		div_row.appendChild(div_col4);

		var div_col5 = document.createElement('div');
		div_col5.className = "col-sm-12 col-xs-12 col-md-1";

		var btn_contactRemove = document.createElement('button');
		btn_contactRemove.className = "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored eventRemove";
		btn_contactRemove.id = contactId + "_remove";
		btn_contactRemove.type = "button";
		btn_contactRemove.setAttribute("onclick","removeContactClick(this.id);");
		var icon_remove = document.createElement('i');
		icon_remove.className = "material-icons";
		icon_remove.innerHTML = "delete";

		btn_contactRemove.appendChild(icon_remove);

		div_col5.appendChild(btn_contactRemove);

		div_row.appendChild(div_col5);



		componentHandler.upgradeElement(lable_CName);

		componentHandler.upgradeElement(input_CName);

		componentHandler.upgradeElement(div_CName);


		componentHandler.upgradeElement(lable_CRole);

		componentHandler.upgradeElement(input_CRole);

		componentHandler.upgradeElement(div_CRole);


		componentHandler.upgradeElement(lable_CmailId);

		componentHandler.upgradeElement(input_CmailId);

		componentHandler.upgradeElement(div_CmailId);


		componentHandler.upgradeElement(lable_Cmobile);

		componentHandler.upgradeElement(input_Cmobile);

		componentHandler.upgradeElement(div_Cmobile);


		componentHandler.upgradeElement(icon_remove);

		componentHandler.upgradeElement(btn_contactRemove);



		componentHandler.upgradeElement(div_col1);

		componentHandler.upgradeElement(div_row);

		document.getElementById('conatctPersonContainer').appendChild(div_row);
	});
}