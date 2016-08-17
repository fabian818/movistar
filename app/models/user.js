var connection = require('../../connection');
var crypto = require('crypto');
function User() {
	this.login = function(req, res) {
		var email = req.body.email;
		var password = crypto.createHash('md5').update(req.body.password).digest("hex");
		connection.acquire(function(err, con) {
			con.query('select email, role_id from users where email = ? and password = ?', [email, password], function(err, result) {
				con.release();
				res.send(result);
			});
		});
	};
}
module.exports = new User();