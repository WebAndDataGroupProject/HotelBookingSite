var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* maria database */



//Get Hotels list
    // Get the hotels available
router.get('/', function(req,res){
    req.pool.getConnection(function(err, connection){
        if(err) throw err;
        
        //Insert SQL COMMAND HERE
        var sql = "";
        
        connection.query(sql, function(err, results){
            // Release connection & OK Packet shown
            connection.release();
            console.log(results);
            
            //Send back to Client
            res.send(results);
            
            
        }); 
    });       
});


// Get Customer Information


// Search the hotels 




// Add a customer to database
router.post('addCustomer', function(req, res){
    console.log(req.body);
    
    req.pool.getConnection(function(err, connection){
        if(err) throw err;
        var sql = "INSERT INTO table_name (column_name1,column_name2) VALUES ('"+req.body.parameter1+"', '"+req.body.parameter2+"');";
        connection.query(sql, function(err, results){
            //OK PACKET
            console.log(results);
            connection.release();
            
            //Send back to client
            res.send(results);
        });
    });  
    
});

// Update account details
router.get('/', function(req,res){
    req.pool.getConnection(function(err, connection){
        if(err) throw err;
        
        //Insert SQL COMMAND HERE
        var sql = "";
        
        connection.query(sql, [/*Insert Parameters here*/], function(err, results){
            // Release connection & OK Packet shown
            connection.release();
            console.log(results);
            
            //Send back to Client
            res.send(results);
            
            
        }); 
    });       
});







/* JSON Object Database */
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

// send hotel data from client to server
router.post('/hotels.json', function(req, res) {
  hotels.push({hotelName: req.body.hotelName, numOfRooms: req.body.numOfRooms, number: req.body.number, street: req.body.street, suburb: req.body.suburb, city: req.body.city, state: req.body.state, country: req.body.country, cancellations: req.body.cancellations, price: req.body.price});
  res.send();
});

// Google Sign-In details
var CLIENT_ID = '525838695650-dfjbbapejsp89bjmbpeg34kbg7eglmkv.apps.googleusercontent.com';
var {OAuth2Client} = require('google-auth-library');
var client = new OAuth2Client(CLIENT_ID);
var gticket;

// hard coded test google log in.
var users = [{username:"testuser", password:"test", google:"115137473611550193156"}];
var sessions = {};

router.post('/user.json', function(req, res) {
	var user = null;
    console.log("HERE");
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
            console.log(payload);
            // Get user's Google ID
            const userid = payload['sub'];
            console.log(userid);
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
