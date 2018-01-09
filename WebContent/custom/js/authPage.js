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
			window.location = "/user/";

			//checkAndUpdate(user);  		
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



function updatePageSpecific() {
//	window.location = "/user/";
}

function authLevel(){
	console.log('not signed-In');
}


function signUp(){
	var emailId = $('#usrMailId').val();
	var password = $('#usrPassword').val();
	firebase.auth().createUserWithEmailAndPassword(emailId,password).then(function (data){
		alert('sdfsdf');
	}).catch(function(error) {

		var errorCode = error.code;
		var errorMessage = error.message;

		console.log(errorMessage);
	});
}



function signOut(){
	firebase.auth().signOut().then(function() {
		console.log('signedout')
	}).catch(function(error) {
		console.log('problem in sign-out')
	});
}

function signIn(){
	var emailId = $('#usrMailId').val();
	var password = $('#usrPassword').val();


	if (emailId.length < 4) {
		alert('Please enter an email address.');
		return;
	}
	if (password.length < 1) {
		alert('Please enter a password.');
		return;
	}

	firebase.auth().signInWithEmailAndPassword(emailId,password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
		} else {
			alert(errorMessage);
		}
		console.log(error);
	});

}

function fbSignIn() {
	if (!firebase.auth().currentUser) {
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_likes');
		firebase.auth().signInWithRedirect(provider);
	} else {
		firebase.auth().signOut();
	}
}

function gSignIn() {
	if (!firebase.auth().currentUser) {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	} else {
		firebase.auth().signOut();
	}
}


