// GOOGLE MAPS

// Global variables
var map = null;
var centre = {lat: -34.920, lng: 138.606};

function initMap() {
	var mapOptions = {
		center: centre,
		zoom : 12,
		styles: [ {visibility: "on"} ]
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	// CAN'T GET AJAX METHOD TO SUCCEED...
	// Load the XML file.
	$.ajax({
		type: "GET",
		async: true,
		url: "markers.xml",
		dataType: "xml",
		success:
		function (xml) {
			// An array of places.
			var places = xml.documentElement.getElementsByTagName("place");

			// Loops though each marker and adds it to the map.
			for (var i = 0; i < places.length; i++) {
				var lat = places[i].getAttribute('latitude');
				var long = places[i].getAttribute('longitude');
				var latLng = new google.maps.LatLng(lat, long);
				var marker = new google.maps.Marker({
				position:  latLng,
				map: map,
				label:places[i].name
				});
			}
		},
		error:
		function() {
			console.log("AJAX FAILED");
		}
	});
}
