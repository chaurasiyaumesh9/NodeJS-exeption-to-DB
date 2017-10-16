var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var ExceptionSchema = new Schema({
	name: String,
	code: String,
	message: String,
	date_added: Date
});


ExceptionSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  this.date_added = currentDate;

  next();
});

var Exception = mongoose.model('Exception', ExceptionSchema, 'Exception');
module.exports = Exception;
