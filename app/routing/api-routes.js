
var friendData = require('../data/friends.js');
var user;

module.exports = function(app){
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});


	app.post('/api/friends', function(req, res) {
		user = req.body;
		
		mateMatch(user, friendData);


		friendData.push(req.body);
		res.json(true);
	});
};

function mateMatch(user, friendData){
	var match = friendData[0];
	console.log(user);
	console.log(match);

	// var matchDiff = 
	// for (var i =1; i<friendData.length. i++){

	// }


}