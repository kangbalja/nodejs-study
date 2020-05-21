const http = require('http');
const dt = require('./myfirstmodule');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("The date and time are currently: " + dt.myDateTime());
    // res.write('\nHello, World!\n');
    // res.write('url: ' + req.url);

    // const q = url.parse(req.url, true).query;
    // const txt = q.year + " " + q.month;

    // res.write('\n' + txt);

    // res.end();

    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});