var db = require('../models');

function index(req, res) {
	db.Talk.find({}, function(err, talks) {
		res.json(talks);
	});
}

function show(req, res) {
  db.Talk.findById(req.params.talkId, function(err, foundTalk) {
    if(err) { console.log('talksController.show error', err); }
    console.log('talksController.show responding with', foundTalk);
    res.json(foundTalk);
  });
}

module.exports = {
	index: index,
	show: show
};
