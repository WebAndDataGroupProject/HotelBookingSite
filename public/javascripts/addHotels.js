function addHotels() {
  // create AJAX request
  var xhttp = new XMLHttpRequest();

  // set data to be added to the json file
  var hotelName = document.getElementById('hotelName').value;
  var numOfRooms = document.getElementById('numOfRooms').value;
  var number = document.getElementById('number').value;
  var street = document.getElementById('street').value;
  var suburb = document.getElementById('suburb').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var country = document.getElementById('country').value;
  var cancellations = document.getElementById('cancellations').value;
  var price = document.getElementById('price').value;

  // initiate connection
  xhttp.open("POST", "hotels.json", true);
  xhttp.setRequestHeader("Content-type", "application/json");

  // send request
  if (hotelName !== "" && numOfRooms !== "" && number !== "" && street !== "" && suburb !== "" && city !== "" && state !== "" && country !== "" && price !== "") {
    xhttp.send(JSON.stringify({hotelName:hotelName,numOfRooms:numOfRooms,number:number,street:street,suburb:suburb,city:city,state:state,country:country,cancellations:cancellations,price:price}));
  } else {
    alert("Missing field")
  }
}