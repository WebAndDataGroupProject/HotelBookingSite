// GOOGLE MAPS

// Global variables
var map = null;
var centre = {lat: -34.920, lng: 138.606};

// Static markers
var mayfairMarker;
var ibisMarker;

var ibisLatLng = {lat: -34.923870, lng:138.604218};
var mayfairLatLng = {lat: -34.923271, lng:138.599176};


// Initiate map.
function initMap() {
	var mapOptions = {
		center: centre,
		zoom : 12,
		styles: [ {visibility: "on"} ]
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);


	// UN-FINISHED IMPLEMENTATION OF LOADING GOOGLE MARKERS FROM XML
	// XML Parser.
	// try: https://codepen.io/adrianparr/pen/cjlrn

	// CAN'T GET AJAX METHOD TO SUCCEED...see above..
	// Load the XML file.
	/*
	$.ajax({
		type: "GET",
		async: true,
		url: "markers.xml",
		dataType: 'xml',
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
	*/
}

// Add ibis static markers.
function addIbisMarker() {
	// Ibis Hotel marker.
	ibisMarker = new google.maps.Marker({
		position: ibisLatLng,
		title:"Ibis Hotel"
	});
	// Set Ibis marker to map.
	ibisMarker.setMap(map);

	// Change map zoom and re-center.
	map.setZoom(15);
	map.setCenter(ibisLatLng);
}

// On button click, clear all markers then show Ibis marker.
$('#mapIbis-btn').on('click', function() {
    addIbisMarker()
    mayfairMarker.setMap(null);
})

// Add mayfair static markers.
function addMayfairMarker() {
	// Mayfair Hotel marker.
	mayfairMarker = new google.maps.Marker({
		position: mayfairLatLng,
		title:"Mayfair Hotel"
	});
	// Set mayfair marker to map.
	mayfairMarker.setMap(map);

	// Change map zoom and re-center.
	map.setZoom(15);
	map.setCenter(mayfairLatLng);
}

// On button click, clear markers then show mayfair markers.
$('#mapMayfair-btn').on('click', function() {
    addMayfairMarker()
    ibisMarker.setMap(null);
})

// Add all static markers.
function addAllMarkers() {
	// Set ibis marker to map.
	addIbisMarker();
	// Set mayfair marker to map.
	addMayfairMarker();
}

// On button click, show all markers.
$('#mapall-btn').on('click', function() {
    addAllMarkers()
})
