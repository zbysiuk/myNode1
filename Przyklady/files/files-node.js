#!/usr/bin/env node

// Operacje wejścia/wyjścia w stylu Node (asynchroniczne, czyli te normalne ;-))

var fs = require("fs");

console.log("Początek...");

fs.readFile("lorem-long.txt", "utf-8", function(err, data) {
    console.log("Odczytano plik lorem-long.txt: " + data.length + " znaków");
});

fs.readFile("lorem-short.txt", "utf-8", function(err, data) {
    console.log("Odczytano plik lorem-short.txt: " + data.length + " znaków");
});

console.log("Koniec???");
