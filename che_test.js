var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.get('/nation', function(req, res) {
  var url = 'http://www.standardmedia.co.ke';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);

      var results = [];
      var classes = ['#col-xs-4'];

      classes.forEach(function(val){
        var data = $(val).find('#sub-stories').each(function(i, story){
          var obj = {}
          obj.title = $(this).find('li a').text();
          obj.url = $(this).find('li a').attr('href');
          results.push(obj);

        });

      });
     return res.send(results);
    }
  });
});

app.listen(8080, function(err) {
  if(!err) {
    console.log('Listening at port 8080');
  }
});
