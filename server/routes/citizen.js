var citizen = require('../controllers/citizen');

module.exports = function(app, express) {
    var api = express.Router();

    api.get('/citizen', citizen.getHeadlines);

    app.use('/api', api);
}
