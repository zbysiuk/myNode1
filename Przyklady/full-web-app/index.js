#!/usr/bin/env node

// Prosta aplikacja WWW
// - przykład zastosowania Node.js
// Na bazie przykładów z książki: "The Node Beginner Book: A comprehensive Node.js tutorial" Manuela Kiesslinga 

// Moduły
var server = require("./server");
var router = require("./router");
var handlers = require("./request_handlers");

// Tablica asocjacyjna (tutaj obiekt języka JavaScript), zawierająca identyfikatory funkcji
// obsługi poszczególnych żądań (a w zasadzie "referencje" do tych funkcji...)
var handle = {}
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/upload"] = handlers.upload;

// Uruchomienie serwera
// - parametr pierwszy to nazwa funkcji obsługującej routing, drugi - tablica funkcji obsługi żądań
server.start(router.route, handle);

