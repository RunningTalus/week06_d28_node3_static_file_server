var fs = require('fs');
var path = require('path');

module.exports = { 

	walterSobchak: function(req, res) {
		var lebowskiIpsum = path.join(__dirname, '../data.txt');
		fs.readFile(lebowskiIpsum, 'utf-8', function(err, data) {
			if (err) {
				console.error('You\'ll get better at coding over time, but right now your CODE IS BROKEN');
				res.send(500, 'this is an error from your asyncController');
				return;
			}
			res.send(data);
		});
	}
};