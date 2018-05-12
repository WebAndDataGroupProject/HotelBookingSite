var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
  hotels.push({hotelName: req.body.hotelName, numOfRooms: req.body.numOfRooms, number: req.body.number, street: req.body.street, suburb: req.body.suburb, city: req.body.city, state: req.body.state, country: req.body.country, cancellations: req.body.cancellations, price: req.body.price});
  res.send();
});

/* POST from Client */



/* state for my account */


// Google Sign-In

var CLIENT_ID = '525838695650-dfjbbapejsp89bjmbpeg34kbg7eglmkv.apps.googleusercontent.com';
var {OAuth2Client} = require('google-auth-library');
var client = new OAuth2Client(CLIENT_ID);
var gticket;

// hard coded test google log in.
var users = [{username:"testuser", password:"test", google:"115137473611550193156"}];
var sessions = {};

router.post('/user.json', function(req, res) {
	var user = null;
	console.log(JSON.stringify(req.body));

	// If Google login
	if(req.body.idtoken !== undefined) {
		console.log("Google Token Recieved");

		 async function verify() {
            // Verify google ID token
            const ticket = await client.verifyIdToken({
                idToken: req.body.idtoken,
                audience: CLIENT_ID
            });
            
            // Get user data from token
            const payload = ticket.getPayload();
            
            // Get user's Google ID
            const userid = payload['sub'];
            
            for (var i=0; i<users.length; i++){
         
                /* 
                 * If google ID matches a user
                 * save the session
                 * send that username
                 * (otherwise user will remain null)
                 */
                if(users[i].google === userid){
                    sessions[req.session.id] = users[i].username;
                    user = users[i].username;
                }
                
            }
            res.json({username:user});
        }
        verify().catch(console.error);   
    // If no login details, but valid session
    } else if(sessions[req.session.id] !== undefined) {
        console.log("Valid session");
        user = sessions[req.session.id];
        res.json({username:user});
	}
})


module.exports = router;
