#!/usr/bin/env node

// Klasyczne (synchroniczne) podejście do operacji wejścia/wyjścia

var fs = require("fs");

console.log("Początek...");

var file_one = fs.readFileSync("lorem-long.txt", "utf-8");
console.log("Odczytano plik lorem-long.txt: " + file_one.length + " znaków");

var file_two = fs.readFileSync("lorem-short.txt", "utf-8");
console.log("Odczytano plik lorem-short.txt: " + file_two.length + " znaków");

console.log("Koniec.");

