// Moduł "router"
// Definicja funkcji routingu dla żądanych zasobów
// Na bazie przykładów z książki: "The Node Beginner Book: A comprehensive Node.js tutorial" Manuela Kiesslinga 

function route(handle, pathname, response, postData) {
  console.log("Obsługa żądania dla " + pathname + "...");
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log("Nie ma funkcji obsługi żądania dla " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

// Interfejs modułu

exports.route = route;
