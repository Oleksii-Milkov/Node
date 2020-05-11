//1-e задание ====================================================================

/* const http = require('http');
const fs = require('fs');

const port = 3000;

http.createServer(function (req, res) {
    if (req.url == '/') {
        res.write('Hello, Node');
        res.end();
    } else if (req.url == '/about') {
        console.log(req);
        res.end();
    } else if (req.url == '/contact') {
        fs.readFile('index.html', function (err, data) {
            if (err) throw err;
            res.end(data);
        });
    } else {
        res.write("Nothing to view");
        res.end();
    }
}).listen(port, function () {
    console.log('Server at http://localhost:' + port);
}); */

//3-e задание ====================================================================

const request = require('request');

request("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", function (err, res, body) {
    if (err) throw error;
    console.log(JSON.parse(body));
});

//4-e задание ====================================================================