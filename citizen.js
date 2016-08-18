var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.get('/news1', function(req, res) {
  
});

app.get('/news2', function(req, res) {
  var url = 'http://citizentv.co.ke/';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elementstext

        var results = [];

       var data = $('.related-news').find('.col-sm-4');
        data.each(function(val) {
          var obj = {};
          obj.title =  $(this).find('a').text().trim();
          obj.url = $(this).find('a').attr('href');
          obj.time = $(this).find('p').text();
          results.push(obj);

      });
 return res.send(results);

    }
  });
});

app.get('/star', function(req, res) {
  var url = 'http://www.the-star.co.ke/';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elementstext

        var results = [];

       var data = $('.view.view-taxonomies.view-id-taxonomies.view-display-id-panel_pane_teaser_medium.view-dom-id-8b9aca5c11cd050306c8386b3937a74c', '.view-content').find('.views-row').length;
       console.log(data);
       /*
        data.each(function(val) {
          var obj = {};
          obj.title =  $(this).find('a').text().trim();
          obj.url = $(this).find('a').attr('href');
          //obj.time = $(this).find('p').text();
          results.push(obj);

      });
 return res.send(results);
      */
    }
  });
});

//Failed to fetch
app.get('/tuko', function(req, res) {
  var url = 'http://tuko.co.ke/';

  request(url, function(err, ress, html) {
    if(err) {
      return res.status(500).send(err);
    } else {
      // we have some res and html to show
      // load them to cheerio
      var $ = cheerio.load(html);
      // get story teasers dom elementstext

        var results = [];

       var data = $('ul','.news__top.news__cell').find('.news__top_item').length;
       console.log(data);
       /*
        data.each(function(val) {
          var obj = {};
          obj.title =  $(this).find('a').text().trim();
          obj.url = $(this).find('a').attr('href');
          //obj.time = $(this).find('p').text();
          results.push(obj);

      });
 return res.send(results);
      */
    }
  });
});

app.listen(8080, function(err) {
  if(!err) {
    console.log('Listening at port 8080');
  }
});
