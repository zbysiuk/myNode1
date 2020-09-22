
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var moveme = require('mv');

http.createServer(function (req, res) {
	console.log("jestem na poczatku funkcji");
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      console.log('oldpath ', oldpath);
      var newpath = '/home/ziggy/Desktop/Node/moveJS/' + files.filetoupload.name;
      moveme(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      
      
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
