var http = require('http');

http.createServer(function (req, res) {
	console.log('jestem na serverze');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="textupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="text" name="texttoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
