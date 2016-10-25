var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AttendeeSchema = new Schema({
  name: String,
  company: String,
  email: String,
  registered: String
});

var Attendee = mongoose.model('Attendee', AttendeeSchema);

module.exports = Attendee;
