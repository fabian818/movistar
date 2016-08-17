var movistar = require('./models/user');

module.exports = {
  configure: function(app) {
    app.get('/todo/', function(req, res) {
      movistar.get(res);
    });
  }
};