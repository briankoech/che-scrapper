var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.get('/nation', function(req, res) {
  var url = 'http://www.nation.co.ke';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elements
      var results = [];
      var classes = ['.row .five-eight', '.row .three-eight'];
      classes.forEach(function(val) {
        var data = $(val).find('.story-teaser').each(function(i, story) {
          var obj = {};
          obj.title = $(this).find('h1 a').text() || $(this).find('h2 a').text();
          obj.url = `${url}${$(this).find('a').attr('href')}`;
          obj.description = $(this).find('p').text();
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
