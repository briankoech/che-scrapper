var cheerio = require('cheerio'),
  request = require('request');

module.exports = {
  getHeadlines: function(req, res) {
      var url = 'http://citizentv.co.ke/';

      request(url, function(err, ress, html) {
          if (err) {
              return res.status(500).send(err);
          } else {
              // we have some res and html to show
              // load them to cheerio
              var $ = cheerio.load(html);
              // get story teasers dom elementstext

              var results = [];

              var data = $('.top-news-thumb').find('.top-news-thumb-table');
              data.each(function(val) {
                  var obj = {};
                  obj.title = $(this).find('a').text();
                  obj.url = $(this).find('a').attr('href');
                  // obj.description = $(this).find('p').text();
                  results.push(obj);

              });
              return res.send(results);

          }
      });
  }
};
