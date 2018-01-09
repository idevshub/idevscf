var usrId;

var config = {
		apiKey: "AIzaSyCjQSMso709Rc5FX2IIDu1pXKlY1uUVb7k",
		authDomain: "college-fest.firebaseapp.com",
		databaseURL: "https://college-fest.firebaseio.com",
		projectId: "college-fest",
		storageBucket: "college-fest.appspot.com",
		messagingSenderId: "334782602490"
};

firebase.initializeApp(config);

function initApp() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			var displayName = user.displayName;
			var email = user.email;
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			usrId = user.uid;
			var providerData = user.providerData;
			console.log(user);
	 		
      		document.getElementById("usrActivity").innerHTML = "SignOut"
          	document.getElementById("usrActivity").onclick = function(){
      		signOut();
      		}
      		
			checkAndUpdate(user);  		
		} else {
			authLevel();
		}
	});
}



function signOut(){
	firebase.auth().signOut().then(function() {
		window.location = "/auth/";
	}).catch(function(error) {
		console.log('problem in sign-out')
	});
}
