// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var userCtrl = require('./server/controllers/userCtrl');
var eventCtrl = require('./server/controllers/eventCtrl');

// Connetions //
var port = 10000;
var mongoUri = 'mongodb://localhost:27017/volunteer';


// Controllers //
// var mainCtrl = require('./public/mainCtrl');


// Express //
var app = express();


// Express Middleware //
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
console.log(__dirname);


// Endpoints //

// User
app.post('/api/user', userCtrl.addNewUser);
app.post('/api/getUser', userCtrl.getUser);
app.get('/api/user/:id', userCtrl.getUserById);
app.delete('/api/user/:id', userCtrl.deleteUser);

app.put('/api/user/:id', userCtrl.updateUser);
app.put('/api/user/event/:id', userCtrl.updateUserEvents);


// Event
app.post('/api/event', eventCtrl.addNewEvent);
app.get('/api/event', eventCtrl.getEvent);
app.get('/api/event/:id', eventCtrl.getEventById);
app.get('/api/event/createdBy/:id', eventCtrl.getEventCreatedById);

app.delete('/api/event/:id', eventCtrl.deleteEvent);
app.put('/api/event/:id', eventCtrl.updateEvent);
app.put('/api/event/volunteers/:id', eventCtrl.updateEventVolunteers);

app.listen(port, function() {
  console.log('listening on port: ' + port);
});

//mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to mongoDB at: '+ mongoUri);
});
