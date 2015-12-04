var Provider = require('./back_end_server/models/Provider');

module.exports = {
	
	createProvider: function(req, res){
		new Provider(req.body).save(function(err, data) {
			if (err) {
				res.status(500).send(err);
			}
			else {
				res.send(data);
			}
			
		});
	}
}