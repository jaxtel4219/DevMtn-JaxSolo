var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = Schema({
	name: { type: String, required: true },
	description: { type: String },
	category: { type: String, required: true },
	specialReqs: {type: String },
	locationDescription: { type: String },
	address1: { type: String },
	address2: { type: String },
	city: { type: String },
	state: { type: String },
	zip: { type: String },
	createdBy: {type: Schema.Types.ObjectId, ref: 'User' },
	// StartDate: { type: Date, required: true },
	// StartTime: { type: Date, required: true },
	// EndDate: { type: Date, required: true },
	// EndTime: { type: Date, required: true },
	volunteersNeeded: { type: Number },
	// Volunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],

	volunteers: [
							{ userId: {type: Schema.Types.ObjectId, ref: 'User' }, 
							  Status: {type: String, enum: ["New", "Confirmed", "Contacted", "Rejected" ] }
							}
						  ]
	
});

module.exports = mongoose.model('Event', Event);

