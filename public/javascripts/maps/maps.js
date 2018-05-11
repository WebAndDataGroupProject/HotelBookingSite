// GOOGLE MAPS

// Global variables
var markers = [];

// Static markers
var mayfairMarker;
var ibisMarker;

var ibisLatLng = {lat: -34.923870, lng:138.604218};
var mayfairLatLng = {lat: -34.923271, lng:138.599176};


// Initiate map.
function initMap() {
  // create google map
	var mapOptions = {
		center: {lat: 0.0, lng: 0.0},
		zoom : 12,
		styles: [ {visibility: "on"} ]
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // recenter the map according to the searched location
  var geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, map);

}

// geocode searched address
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  console.log(address);

  geocoder.geocode({"address":address}, function(results,status) {
    console.log(results);
    console.log(status);
    if(status = "OK") {
      resultsMap.setCenter(results[0].geometry.location);
    }
  });
}

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

	// Add info window
	var ibisContentString = '<div id="content">'+
            '<div id="ibisNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Ibis Hotel</h1>'+
            '<div id="bodyContent">'+
            '<p>Address: 122 Grenfell St, Adelaide SA 5000<br>Phone: (08) 8159 5588</p>'+
            '</div>'+
            '</div>';
    var ibisInfoWindow = new google.maps.InfoWindow({
          content: ibisContentString
    });
    ibisMarker.addListener('click', function() {
          ibisInfoWindow.open(map, ibisMarker);
    });
}

// On button click, clear all markers then show Ibis marker.
$('#mapIbis-btn').on('click', function() {
    addIbisMarker();
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

	// Add info window
	var mayfairContentString = '<div id="content">'+
            '<div id="mayfairNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mayfair Hotel</h1>'+
            '<div id="bodyContent">'+
            '<p>Address: 45 King William St, Adelaide SA 5000<br>Phone: (08) 8210 8888</p>'+
            '</div>'+
            '</div>';
    var mayfairInfoWindow = new google.maps.InfoWindow({
          content: mayfairContentString
    });
    mayfairMarker.addListener('click', function() {
          mayfairInfoWindow.open(map, mayfairMarker);
    });
}

// On button click, clear markers then show mayfair markers.
$('#mapMayfair-btn').on('click', function() {
    addMayfairMarker();
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
