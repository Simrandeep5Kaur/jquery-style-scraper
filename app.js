const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('crypto.csv');
writeStream.write("CRYPTO");

request('https://www.imdb.com/title/tt10669608/fullcredits', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        // console.log($);
        var text = $('.character a').each(function (i, j) {
            var val1 = $(j).text();
            // console.log(val1);
            var val2 = $(j).attr('href');
            // console.log(val2);
        })
    }
});
request('https://www.cointracker.io/price', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        console.log($);
        var text = $('.d-block').each(function (i, j) {
            var price = $(".text-body").text()
            console.log(price);
            writeStream.write(`${price}\n`)
        })
    }
});

// us series cast