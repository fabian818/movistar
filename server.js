var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});