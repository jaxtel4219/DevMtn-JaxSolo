var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Provider = Schema({
	name: { type: String, required: true },
	website: { type: String, required: true },
	phone: { type: String, required: true },
	photos: Array
	
});

module.exports = mongoose.model('Provider', Provider)