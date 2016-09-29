
var friendData = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});


	app.post('/api/friends', function(req, res) {
		 var user = req.body;

		mateMatch(user, friendData);

		friendData.push(req.body);
		res.json(true);
	});
};

function mateMatch(user, friendData){
	var matchCount = 50;
	var userScores = user.scores;
	var name;
	var pic;
	var matchName = '';
	var matchPic = '';
	var diffArray = [];
	var diffCount = 0;
	
	for (var i = 0; i<friendData.length; i++){
		name = friendData[i].name;
		pic = friendData[i].photo;
		var matchScores = friendData[i].scores;
		diffArray.push(Math.abs(userScores[i] - matchScores[i]));

		for (var i = 0; i<diffArray.length; i++){
		diffCount += diffArray[i];

		
			if (diffCount < matchCount){
				matchCount = diffCount;
				matchName = name;
				matchPic = pic;
			};
		};
	};
	console.log(matchName);
	console.log(matchPic);
	console.log(matchCount);
	
};