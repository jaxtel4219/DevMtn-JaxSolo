var Event = require('../models/Event');
var User = require('../models/User');

module.exports = {


	getEvent: function( req, res ) {
		Event.find().exec(function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	},

	getEventById: function( req, res ) {
		Event.findById(req.params.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	getEventCreatedById: function( req, res ) {
		Event.find().where('createdBy').equals(req.params.id).exec(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	getEventsVolunteeredFor: function( req, res ) {
		Event.find().where('volunteers').equals(req.params.id).exec(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	addNewEvent: function( req, res ) {
		new Event(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	updateEventVolunteers: function( req, res ) {	
		Event.findByIdAndUpdate(req.params.id, {$push: {"volunteers": req.body}},function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				console.log(response);
				res.send(response);
			}
		});
	},		
	
	updateEvent: function( req, res ) {
		Event.findByIdAndUpdate(req.params.id, req.body, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	},


	deleteEvent: function( req, res ) {
		Event.findByIdAndRemove(req.params.id, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	}

}