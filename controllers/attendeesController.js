var db = require('../models');

function index(req, res) {
  db.Talk.findById(req.params.talkId, function(err, foundTalk) {
    console.log('attendees of talk: ', foundTalk.attendees);
    res.json(foundTalk.attendees);
  });
}

function create(req, res) {
	db.Talk.findById(req.params.talkId, function(err, foundTalk) {
    console.log(req.body);
    var newAttendee = new db.Attendee(req.body);
    foundTalk.attendees.push(newAttendee);
    foundTalk.save(function(err, savedAttendee) {
      console.log('newAttendee created: ', newAttendee);
      res.json(newAttendee);
    });
  });
}

module.exports = {
	index: index,
	create: create
};
