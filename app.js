var cites = require('./data.json').values;
var data = {};

for (var citation of cites) {
	var lot = citation[2];
	var type = citation[1];
	if (!data[lot]) {
		data[lot] = {};
		data[lot][' INVALID PERMIT FOR LOCATION*'] = 0;
		data[lot][' LOADING ZONE VIOLATION *'] = 0;
		data[lot][' MALFUNCTIONING METER*'] = 0;
		data[lot]['1 - FAILURE TO PAY FEE'] = 0;
	} else {
		data[lot][type]++;
	}
}

var fs = require('fs');
fs.writeFile('./parsed.json', JSON.stringify(data), function(err) {
	if (err) {
		return console.log(err);
	}

	console.log('The file was saved!');
});
