// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Connetions //
var port = 10000;
var mongoUri = 'mongodb://localhost:27017/timber';


// Controllers //
var userCtrl = require('./back_end_server/controllers/userCtrl');
var providerCtrl = require('./back_end_server/controllers/providerCtrl');


// Express //
var app = express();


// Express Middleware //
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
console.log(__dirname);


// Endpoints //

// provider
app.post('api/provider', providerCtrl.addProvider);
app.get('/api/provider', providerCtrl.getProvider);
app.put('/api/provider/:id', providerCtrl.updateProvider);
app.delete('/api/provider/:id', providerCtrl.deleteProvider);

//user
app.post('/api/user', userCtrl.addUser);
app.get('/api/user', userCtrl.getUser);
app.put('/api/user/:id', userCtrl.updateUser);
app.delete('/api/user/:id', userCtrl.deleteUser);

app.listen(port, function() {
  console.log('listening on port: ' + port);
});

//mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to mongoDB at: '+ mongoUri);
});
