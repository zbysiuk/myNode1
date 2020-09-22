#!/usr/bin/env node

// Hello World!
// Najprostszy webserver i aplikacja w jednym

var http = require("http");

http.createServer(function(request, response) {
    console.log("Przyjęto żądanie");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
    response.end();
}).listen(8081);

console.log("Serwer uruchomiony pod adresem http://localhost:8081");
