var User = require('../models/User');

module.exports = {


	getUser: function( req, res ) {
		User.find({'email' : req.body.email}).where('password').equals(req.body.password).exec(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	getUserById: function( req, res ) {
		User.findById(req.params.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},


	addNewUser: function( req, res ) {
		console.log("user: ", req.body);
		new User(req.body).save(function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

	
	updateUser: function( req, res ) {
		User.findByIdAndUpdate(req.params.id, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	},

	updateUserEvents: function( req, res ) {
		User.findByIdAndUpdate(req.params.id, {$push: {"myVolunteeredEvents": req.body}},function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	},	
	


	deleteUser: function( req, res ) {
		User.findByIdAndRemove(req.params.id, function( err, response ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(response);
			}
		});
	}

}