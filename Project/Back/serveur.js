var http = require('http');
var router = require('./Route/route.js');

http.createServer(router.handleRequest).listen(8080);
console.log(`Server demarer `);



