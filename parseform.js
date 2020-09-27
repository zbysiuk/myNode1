var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('Text uploaded');
      res.end();
    });
  }/* else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  } */
}).listen(8080);

/* te dwa przyklady nalezy polaczyc 

var req_opts = {
    host: "192.168.0.107",
    port: 8080,
    method: "POST",
    path: "/upload"
};
  
var req = http.request(req_opts);

req.on("response", function(response) {
    console.log("<response> Odpowiedź:");
    response.setEncoding("utf-8");
    response.on("data", function(chunk) {
        console.log("<response, data> " + chunk);
    });
    response.on("end", function() {
        console.log("<response, end> Koniec danych odpowiedzi.");
    });
});

req.on("error", function(err) {
    console.log("<request, error> Błąd: " + err.message);
});

console.log("Wysyłanie danych...");
req.write("text=Pierwsza linijka tekstu...\n");
req.write("I ostania ;-)");
req.end();*/
