//1-e задание ====================================================================

const http = require('http');
const fs = require('fs');

const port = 3000;

http.createServer(function (request, response) {
    if (request.url == '/') {
        response.write('Hello, Node');
        response.end();
    } else if (request.url == '/about') {
        console.log(request);
        response.end();
    } else if (request.url == '/contact') {
        fs.readFile('index.html', function(err, data){
            if (err) throw err;
            response.end(data);
        });
    } else {
        response.write("Nothing to view");
        response.end();
    }
}).listen(port, function () {
    console.log('Server at http://localhost:' + port);
});

//3-e задание ====================================================================



//4-e задание ====================================================================