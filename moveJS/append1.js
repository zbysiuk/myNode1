
var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) 
	{	
		console.log('jestem w http');
	  if (req.text == 'textupload') // tu dodac '/' i reszta sama sie wykona
		{
		fs.appendFile('/var/services/homes/zbysiuk/mojtekst.txt', text, function (err) 
			{
		if (err) throw err;
		console.log('Updated!');
			});	
		}	
		else
			{
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write('<form action="textupload" method="post" enctype="multipart/form-data">');
				res.write('<input type="text" name="textupload"><br>');
				res.write('<input type="submit">');
				res.write('</form>');
				return res.end();
			}
	}).listen(8080); 
	



