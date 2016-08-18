module.exports = function(app, express) {
  require('./citizen')(app, express);
  require('./nation')(app, express);
}
