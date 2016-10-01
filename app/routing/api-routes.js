
var friendData = require('../data/friends.js');
var matchname = "";
var matchpic = "";




module.exports = function(app){
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});


	app.post('/api/friends', function(req, res) {
		var user = req.body;
		
		mateMatch(user, friendData);

		friendData.push(req.body);
		res.json(match);
	});
};

function mateMatch(user, friendData) {
	var diffArray = [];

	for (var i = 0; i<friendData.length; i++){
		var matchScores = friendData[i].scores;
		var userScores = user.scores;
		var diffCount = 0;
		matchScores = friendData[i].scores;
		userScores = user.scores;

		for (var j = 0; j < matchScores.length; j++){
			diffCount += (Math.abs(userScores[j] - matchScores[j]));
		}

		diffArray.push(diffCount);
	};
	var matchIndex = diffArray.indexOf(Math.min.apply(Math, diffArray));
	match = friendData[matchIndex];
};

