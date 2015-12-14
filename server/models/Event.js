var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = Schema({
	Name: { type: String, required: true },
	Description: { type: String },
	Category: { type: String, required: true },
	SpecialReqs: {type: String },
	LocationDescription: { type: String },
	Address1: { type: String },
	Address2: { type: String },
	City: { type: String },
	State: { type: String },
	Zip: { type: String },
	createdBy: {type: Schema.Types.ObjectId, ref: 'User' },
	// StartDate: { type: Date, required: true },
	// StartTime: { type: Date, required: true },
	// EndDate: { type: Date, required: true },
	// EndTime: { type: Date, required: true },
	VolunteersNeeded: { type: Number },
	// Volunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],

	Volunteers: [
							{ userId: {type: Schema.Types.ObjectId, ref: 'User' }, 
							  Status: {type: String, enum: ["New", "Confirmed", "Contacted", "Rejected" ] }
							}
						  ]
	
});

module.exports = mongoose.model('Event', Event);

