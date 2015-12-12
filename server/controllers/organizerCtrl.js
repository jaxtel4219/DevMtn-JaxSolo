var Organizer = require('../models/Organizer');

module.exports = {


	getOrganizer: function( req, res ) {
		Organizer.find().then(function( response ) {
			res.send(response);
		});
	},

	addNewOrganizer: function( req, res ) {
		console.log("Organizer: ", req.body);
		new Organizer(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	
	updateOrganizer: function( req, res ) {
		Organizer.findByIdAndUpdate(req.params.id, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	},


	deleteOrganizer: function( req, res ) {
		Organizer.findByIdAndRemove(req.params.id, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	}

}