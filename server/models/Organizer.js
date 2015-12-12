var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Organizer = Schema({
	orgName: { type: String, required: true },
	orgEmail: { type: String },
	orgPhone: { type: String }
	
});

module.exports = mongoose.model('Organizer', Organizer);