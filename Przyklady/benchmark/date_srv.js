#!/usr/bin/env node

var http = require("http");

http.createServer(function(req, res) {
    res.end(Date());
}).listen(8081);

console.log("Usługa daty i czasu uruchomiona");
