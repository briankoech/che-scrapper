var express = require('express');
var mongoose = require('mongoose');

var app = express();
var routes = require('./server/routes');
var config = require('./server/config/config');


// establish connection to mongoose
mongoose.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the database');
  }
});

routes(app, express);

app.listen(8080, function(err) {
  if (!err) {
    console.log('Listening at port 8080');
  }
});
