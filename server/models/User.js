var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },	
	phone: { type: String },
	bio: { type: String },
	password: { type: String, required: true }
	// myCreatedEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
	// myVolunteeredEvents: [
	// 						{ eventId: {type: Schema.Types.ObjectId, ref: 'Event' }, 
	// 						  eventStatus: {type: String}
	// 						}
	// 					  ]
	
});

module.exports = mongoose.model('User', User);
