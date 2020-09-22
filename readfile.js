var http = require('http');
var fs = require('fs');
var madat;
http.createServer(function (req, res) {
  fs.readFile('/var/services/homes/zbysiuk/alejaja.txt', function(err, data) {
    res.write(data);
  madat = data;
    return res.end();
    
  });
 console.log('moja data', madat); 
}).listen(8080); 
