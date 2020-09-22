#!/usr/bin/env node

// Serwer plików

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");
	
http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);

    path.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.end("404 Not Found\n"); // skrócona forma
            return;
    	}
    	
        fs.readFile(filename, "binary", function(err, file) {
    	    if(err) {
    	        response.writeHead(500, {"Content-Type": "text/plain"});
    	        response.write(err + "\n");
    	        response.end();
    	        return;
            }
    		
    	    response.writeHead(200);
    	    response.write(file, "binary");
    	    response.end();
        }); // fs.readFile
    }); // path.exists

}).listen(8081);

console.log("Serwer uruchomiony pod adresem http://localhost:8081");
