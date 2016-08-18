var nation = require('../controllers/nation');

module.exports = function(app, express) {
    var api = express.Router();

    api.get('/nation', nation.getHeadlines);
    api.get('/nation/sports', nation.getSports)

    app.use('/api', api);
}
