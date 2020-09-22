
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var moveme = require('mv');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/var/services/homes/zbysiuk/' + files.filetoupload.name;
     moveme(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      
  fs.appendFile('/var/services/homes/zbysiuk/mojtekst.txt', ' This is my text, ktory sobie dodalem', function (err) {
  if (err) throw err;
  console.log('Updated!'); /* Ta czesc jescze nie chodzi - sprawdzic oddzielnie */
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
