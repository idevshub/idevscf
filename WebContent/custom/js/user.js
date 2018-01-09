function updatePageSpecific() {
//	create();
}
function authLevel(){
	console.log('not signed-In');
	window.location = "/auth/";
}

function checkAndUpdate(user){
	  $.ajax({
		  url: "http://college-fest-db.eu5.org/getUser.php",
		  data : {
			  uid : user.uid
		  },
		  method : "POST",
		  success: function(userJson){
			  console.log(userJson);
		 	fillData(userJson);
		  }, 
		  error: function(xhr, textStatus, errorThrown){
		     registerUser(user);
		    }
		});
  }
   
  function fillData(userJson){
	  console.log('setting' + userJson.name	);

	  $('#profilePic').css('background-image', 'url(' + userJson.photoUrl + ')');

	  $('#name').html(userJson.name);  
	
	  
	  $('#email').html(userJson.email);  
	  $('#mobile').html(userJson.mobile);  
	  $('#city').html(userJson.city);  
	  $('#state').html(userJson.state);  

//	  $('#ename').val(userJson.name).parent().addClass('is-focused');  
	  addTextToTextBox('ename',userJson.name);
	  addTextToTextBox('emobile',userJson.mobile);
	  addTextToTextBox('estate',userJson.state);
	  addTextToTextBox('ecity',userJson.city);
	  addTextToTextBox('eabout',userJson.about);
	  addTextToTextBox('ecollege',userJson.collegeName);
	  addTextToTextBox('eecity',userJson.ccity);
	  addTextToTextBox('eestate',userJson.cstate);
	  
	  console.log(userJson.festDetails);
	  if(userJson.festDetails != null){
	  for(var i = 0; i < userJson.festDetails.length; i++){
		  console.log(userJson.festDetails[0]);
		  addEventRow(userJson.festDetails[i]);
	  }
  }
  }
  

  
  function registerUser(user){
	  console.log('adadfa');
	  $.ajax({
		  url: "http://college-fest-db.eu5.org/registerUser.php",
		  data : {
			   name : user.displayName,
	           email : user.email,
	           emailVerified : user.emailVerified,
	           photoUrl : user.photoURL,
	           uid : user.uid
		  },
		  method : "POST",
		  success: function(userJson){
		console.log('welcome user');
		  }, 
		  error: function(xhr, textStatus, errorThrown){
		alert('Problem in Register!!')
		  }
		});
  }
  
  function updateUser(){
	  $.ajax({
		  url: "http://college-fest-db.eu5.org/updateUser.php",
		  data : {
			   name : $('#ename').val(),
	          	uid : usrId,
	          	mobile : $('#emobile').val(),
	          	city : $('#ecity').val(),
	          	state : $('#estate').val(),
	          	collegeName : $('#ecollege').val(),
	          	ccity : $('#eecity').val(),
	          	cstate : $('#eestate').val(),
	          	about : $('#eabout').val()
		  },
		  method : "POST",
		  success: function(){
			  
			  $('#name').html($('#ename').val());  
			  $('#mobile').html($('#emobile').val());  
			  $('#city').html($('#ecity').val());  
			  $('#state').html($('#estate').val());  

		  }, 
		  error: function(xhr, textStatus, errorThrown){
		alert('Problem in update!!')
		  }
		});
  }
