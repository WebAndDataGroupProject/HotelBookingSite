// GOOGLE MAPS

// Global variables
var hotels = [];

// Initiate map.
function initMap() {
  // create google map
	var mapOptions = {
		center: {lat: -34.923870, lng:138.604218},
		zoom : 12,
		styles: [ {visibility: "on"} ]
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var geocoder = new google.maps.Geocoder();

  // recenter the map according to the searched location
  geocodeAddress(geocoder, map);
  addMarkers(map);
}

// geocode searched address
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;

  geocoder.geocode({"address":address}, function(results,status) {
    if(status = "OK") {
      resultsMap.setCenter(results[0].geometry.location);
    } else {
      alert("invalid location");
    }
  });
}

// add markers from hotels.json
function addMarkers(map) {
  // create AJAX request
  var xhttp = new XMLHttpRequest();

  // define behaviour for a response
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      hotels = JSON.parse(xhttp.responseText);
      for(i=0; i<hotels.length; i++) {
        // convert parts of the hotels address variables and concatenate them
        var address = hotels[i].number + " " + hotels[i].street + ", " + hotels[i].suburb + ", " + hotels[i].city + ", " + hotels[i].state + ", " + hotels[i].country;
        var markerTitle = "Hotel Name: " + hotels[i].hotelName + "\nPrice: " + hotels[i].price;

        // geocode address variable
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({"address":address}, function(results,status) {
          // if valid location
          if(status = "OK") {
            var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              title: markerTitle
            });
            marker.setMap(map)
          }
        });
      }
    }    
  }

  // initiate connection
  xhttp.open("GET", "hotels.json", true);

  // send request
  xhttp.send();
}