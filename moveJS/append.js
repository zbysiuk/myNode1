
var fs = require('fs');
var http = require('http');

/* lalala */
http.createServer(function (req, res) {
	
	fs.appendFile('/var/services/homes/zbysiuk/mojtekst.txt', ' This is my text i jeszcze cos ', function (err) {
		if (err) throw err;
		console.log('Updated!');
		});	
	

}).listen(8080); 




