var hotelsbooked = [];
var output= "";

function Show(evt, parameter) {
 // create AJAX requeest
  var xhttp = new XMLHttpRequest();

  // define behaviour for a response
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      hotelsbooked = JSON.parse(xhttp.responseText);
      for (i=0; i<hotelsbooked.length; i++) {
        var temp = 
'<div class="rooms-container"> \
  <div class="ri-container"> \
    <img class="ri-image" src="images/'+hotels[i].piclink+'" style="width: 100%;height: 100%;border: none;" alt="Hotel image"> \
  </div> \
  <h4>' + hotels[i].hotelName + '</h4> \
  <div class="rw-container"> \
    <button id="mapIbis-btn" class="fas fa-map-marker-alt mapButton"> Show on map</button> \
    <a href="#">Reviews</a> \
    <p>Rooms available:' + hotels[i].numOfRooms + '<p> \
  </div> \
  <div class="rw-container"> \
    <p>Rating: 4/5</p> \
    <p>Free cancellation:' +  hotels[i].cancellations + '</p> \
    <h4>Price: $' + hotels[i].price + ' per night</h4> \
    <input class="book-button" type="button" value="Make Booking"> \
  </div> \
</div>';
        if(i===0) {
          output = temp;
        } else {
          output = output + temp;
        }
      }
      document.getElementById("container").innerHTML = output;
    }
  };

  // initiate connection
  xhttp.open("GET", "hotels.json", true);
  // send request
  xhttp.send();
}

