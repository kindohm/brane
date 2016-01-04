var express = require('express')
	, http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//var express = require('express');
//var app = express();

//app.get('/', function (req, res) {
//	res.send('Hello World!');
//});

app.use('/public', express.static(__dirname + '/../public'));
app.use('/vendor', express.static(__dirname + '/../node_modules'));

//var server = app.listen(8000, function () {
//var host = server.address().address;
//var port = server.address().port;
//console.log('Listening on http://%s:%s', host, port);

server.listen(8000);

console.log(server);

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('thingie', function(msg){
		console.log('message:', msg);
	});

});



//});


