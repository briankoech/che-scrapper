var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.get('/news1', function(req, res) {
  var url = 'http://www.standardmedia.co.ke';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elementstext

        var results = [];

       var data = $('.sub-stories').find('li');
        data.each(function(val) {
          var obj = {};
          obj.title =  $(this).find('a').text();
          obj.url = $(this).find('a').attr('href');
         // obj.description = $(this).find('p').text();
          results.push(obj);
       
      });
 return res.send(results);
      
    }
  });
});
app.get('/news2', function(req, res) {
  var url = 'http://www.standardmedia.co.ke';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elementstext

        var results = [];

       var data = $('.sub-stories-2').find('li');
        data.each(function(val) {
          var obj = {};
          obj.title =  $(this).find('a').text();
          obj.url = $(this).find('a').attr('href');
          obj.time = $(this).find('span').text();
          results.push(obj);
       
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
