    var url = require('url');
    var fs = require('fs');
  
    module.exports = {
        handleRequest(req,res){
            
            var page = url.parse(req.url).pathname;
            var lister = fs.readFileSync('./note.json', 'utf8');
            var tester = fs.readFileSync('./test.json', 'utf8');
   
        if (page == '/') {
            res.write('');
        }
        else if (page == '/list') {
            res.write(lister);
        }
        else if (page == '/test') {
            res.write(tester);
        }
        res.end();
        }
    }
    
//     var http = require('http'); 
// var fs = require('fs'); 

// var server = http.createServer(function (req, res) { 
//     fs.readFile(__dirname + '/data.txt', function (err, data) { 
//         res.end(data); 
//     }); 
// }); 
// server.listen(8000);


