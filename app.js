var express = require('express');
var fs = require('fs');
var app = express();
var asyncController = require('./controllers/asyncController.js');

// Synchronous/Blocking from Part II
	// var fileContents = fs.readFileSync('./data.txt', 'utf8'); 

app.get('/', asyncController.walterSobchak);

var server = app.listen(7701, function() {
	console.log('Express server listening on port ' + server.address().port);
});