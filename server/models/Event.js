var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = Schema({
	eventName: { type: String, required: true },
	eventDescription: { type: String },
	eventCategory: { type: String, required: true },
	eventSpecialReqs: {type: String },
	eventLocationDescription: { type: String },
	eventAddress1: { type: String },
	eventAddress2: { type: String },
	eventCity: { type: String },
	eventState: { type: String },
	eventZip: { type: String },
	// eventStartDate: { type: Date, required: true },
	// eventStartTime: { type: Date, required: true },
	// eventEndDate: { type: Date, required: true },
	// eventEndTime: { type: Date, required: true },
	eventVolunteersNeeded: { type: Number },
	// eventVolunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],

	eventVolunteered: [
							{ userId: {type: Schema.Types.ObjectId, ref: 'User' }, 
							  eventStatus: {type: String, enum: ["New", "Confirmed", "Contacted", "Rejected" ] }
							}
						  ]
	
});

module.exports = mongoose.model('Event', Event);

