var user = require('./models/user');

module.exports = {
	configure: function(app) {
		app.post('/api/users/login', function(req, res) {
			console.log(req.body.email);
			user.login(req, res);
		});
	}
};