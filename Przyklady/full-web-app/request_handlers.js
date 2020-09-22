// Moduł "requestHandlers"
// Definicje funkcji obsługi żądań
// Na bazie przykładów z książki: "The Node Beginner Book: A comprehensive Node.js tutorial" Manuela Kiesslinga 

var querystring = require("querystring");

function start(response, postData) {
    console.log("Funkcja obsługi żądania zasobu 'start'.");

    var body = '<html>'+
               '<head>'+
               '<meta http-equiv="Content-Type" content="text/html; '+
               'charset=UTF-8" />'+
               '</head>'+
               '<body>'+
               '<form action="/upload" method="post">'+
               '<textarea name="text" rows="20" cols="60"></textarea>'+
               '<br /><input type="submit" value="Wyślij tekst" />'+
               '</form>'+
               '</body>'+
               '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  console.log("Funkcja obsługi żądania zasobu 'upload'.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Wysłano: \n\n" + querystring.parse(postData).text);
  response.end();  
}

// Interfejs modułu

exports.start = start;
exports.upload = upload;

