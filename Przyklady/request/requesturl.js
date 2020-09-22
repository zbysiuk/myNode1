#!/usr/bin/env node

// Bardzo^3 prosty CURL-like
// Wywołanie: 
// node requesturl.js adres_strony_bez_http
// np.:
// node requesturl.js wileczeknet.blogspot.com

var http = require("http");

// Parametry wywołania (linia polecenia)
var argv = [];
process.argv.forEach(function (val, index, array) {
  argv[index] = val;
});

if (argv.length > 2) {
    // Prawdopodobnie podano adres strony, można rozpocząć pobieranie
    console.log("Rozpoczynam pobieranie strony '" + argv[2] + "'");
    // Port 80 hardcoded ;-)
    // A przy okazji: można użyć http.get zamiast http.request (jesli już hardcodujemy)...
    var req = http.request({ host: argv[2], port: 80, path: "/", method: "GET" }, function(response) {
        var data = "";
        var chunks = 0;
        response.on("data", function(chunk) {
            data += chunk;
            chunks++;
        });
        response.on("end", function() {
            console.log(data);
            console.log("\nLiczba paczek: " + chunks);
            console.log("Liczba odebranych znaków: " + data.length);
        });
    });
    req.on("error", function(err) {
        console.log("Błąd: " + err.message);
    });
    req.end();    
} else {
    console.log("Błędna liczba parametrów");
}

