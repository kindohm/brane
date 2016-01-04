var express = require('express');
var app = express();

//app.get('/', function (req, res) {
//	res.send('Hello World!');
//});

app.use('/', express.static(__dirname + '/../public'));
app.use('/vendor', express.static(__dirname + '/../node_modules'));



var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening on http://%s:%s', host, port);
});


