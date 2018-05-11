function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  // The ID token you need to pass to your backend.
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);

  getUserInfo({idtoken: id_token});
};

function login(){
	getUserInfo({username:document.getElementById('user').value, password:document.getElementById('pass').value});
}

// Takes a JS object as a parameter and send that informaion to the server, to the users.json using an AJAX request.
function getUserInfo(params) {
	// Create a new AJAX request.
	var xhttp = new XMLHttpRequest();

	// Define the behaviour for a response.
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			// Checks if user is logged in.
			if(user.username !== null){
				document.getElementById('login-text').innerHTML = '<h2>Successfully Logged In as, '+user.username+'</h2>';
			}
		}
	};

	// Inititate connection
	xhttp.open("POST", "/user.json", true);

	xhttp.setRequestHeader("Content-type", "application/json");
}