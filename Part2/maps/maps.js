// GOOGLE MAPS

// Global variables
var map = null;
var placeHolder = {lat: -34.920, lng: 138.606};

function initMap() {
	var mapOptions = {
		center: placeHolder,
		zoom : 12,
		styles: [ {visibility: "on"} ]
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
