var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
// read array of hotels object from JSON file
var fs = require('fs');

var hotels = [];

fs.readFile('hotels.json', 'utf8', function(err, data) {
  hotels = JSON.parse(data);
});

// get request for hotels
router.get('/hotels.json', function(req, res) {
  res.send(JSON.stringify(hotels));
});

// post request to hotels.json
router.post('/hotels.json', function(req, res) {
  hotels.push({hotelName: req.body.hotelName, numOfRooms: req.body.numOfRooms, number: req.body.number, street: req.body.street, suburb: req.body.suburb, city: req.body.city, state: req.body.state, country: req.body.country});
  res.send();
});
=======
/* POST from Client */



/* state for my account */


>>>>>>> 1b4056910875737b8d3530188107e1e742eccc7a

module.exports = router;
