// Moduł "server"
// Funkcja uruchamiająca serwer WWW
// Na bazie przykładów z książki: "The Node Beginner Book: A comprehensive Node.js tutorial" Manuela Kiesslinga 

var http = require("http");
var url = require("url");

function start(route, handle) {

  // Callback - wstępne parsowanie adresu URL
  // i przekazanie obsługi żądania funkcji routingu.
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var postData = "";
    console.log("Przyjęto żądanie dla " + pathname);

    request.setEncoding("utf8");
    
    request.on("data", function(postDataChunk) {
        postData += postDataChunk;
        console.log("Odebrano fragment danych strumienia POST:\n’"+ postDataChunk + "’.\n\n");
    });

    request.on("end", function() {
        route(handle, pathname, response, postData);
    });
   
    console.log("---> Idziemy dalej...");
  }

  http.createServer(onRequest).listen(8888);
  console.log("Serwer został uruchomiony.");
}

// Interfejs modułu
exports.start = start;
