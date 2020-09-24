#!/usr/bin/env node

var http = require("http");

var req_opts = {
    host: "192.168.0.107",
    port: 8080,
    method: "POST",
    path: "/upload"
};
/* jescze cos dodam */
/* a teraz to */


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
req.end();
