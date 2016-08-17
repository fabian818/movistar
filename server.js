var express = require('express');
var bodyparser = require('body-parser');


var connection = require('./connection');
var routes = require('./app/routes');


var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// var data = "do shash'owania";
// var crypto = require('crypto');
// console.log(crypto.createHash('md5').update(data).digest("hex"));




app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});