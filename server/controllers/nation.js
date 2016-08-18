var cheerio = require('cheerio'),
  request = require('request');

  module.exports = {
    getHeadlines: function(req, res) {
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
          var classes = ['.five-eight', '.row .three-eight'];
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
    },

    getSports: function(req, res) {
      res.send('Brian ni mzii');
    }
  };
