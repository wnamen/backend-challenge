var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gacon");

var Talk = require('./talk');

module.exports.Talk = Talk;
module.exports.Attendee = require('./attendee');
