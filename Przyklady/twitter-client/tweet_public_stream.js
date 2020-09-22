#!/usr/bin/env node

// Publiczny strumień Twittera
// Na podstawie przykładu do tutoriala:
// http://net.tutsplus.com/tutorials/javascript-ajax/learning-serverside-javascript-with-node-js/

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    events = require("events");

// Przesłanie do przeglądarki (klienta) wskazanego pliku
function load_static_file(uri, response) {
    var filename = path.join(process.cwd(), uri);
    path.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not Found\n");
	    response.end();
	    return;
	}
	fs.readFile(filename, "binary", function(err, file) {
	    if(err) {
	        response.writeHead(500, {"Content-Type": "text/plain"});
		response.write(err + "\n");
		response.end();
		return;
	    }			
	    response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file);
	    response.end();
	}); // fs.readFile
    }); // path.exists
}

// Emiter zdarzeń
var tweet_emitter = new events.EventEmitter();
// Gdybyśmy nie usuwali listenerów po obsłużeniu zdarzenia, moglibyśmy np. 
// odkomentować poniższe polecenie (i zwiększyć wartość - niebezpieczne ze względu
// na możliwe wycieki pamięci):
//tweet_emitter.setMaxListeners(100);

// Pobieranie wpisów twittera (publiczny strumień)
function get_tweets() {
    // Klient HTTP - parametry żądania
    var req_opts = {
        host: 'api.twitter.com',
        port: 80,
        path: '/1/statuses/public_timeline.json',
        method: 'GET'
    };
    // Wysłanie żądania do serwera usługi Twitter (parametry żądania w zmiennej req_opts)
    var request = http.request(req_opts, function(response) {
        var body = "";
        // zbieranie danych
        response.on("data", function(data) {
            body += data;   
        });
        // jeśli odebrano jakieś znaki ze strumienia, to 
        // tweet_emitter ganaruje zdarzenie "tweets"
        response.on("end", function() {
	    var tweets = JSON.parse(body);
	    if(tweets.length > 0) {
	        tweet_emitter.emit("tweets", tweets);
	    }            
        });
    });
    // Zakończenie żądania    
    request.end();
}

// Pobieranie wpisów ze strumienia co 5 sekund
setInterval(get_tweets, 5000); 

// Serwer :-)
http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    if(uri === "/stream") {  
        // tweets_cb - callback do obsługi zdarzenia "tweets"
        var tweets_cb = function(tweets) {
  	    response.writeHead(200, { "Content-Type" : "text/plain" });
    	    response.write(JSON.stringify(tweets));
    	    response.end();    	
            // usunięcie listenera powinno zlikwidować problem ew. wycieku pamięci
            // - tzn. można ustalić maksymalną liczbę listenerów, ale szkoda zasobów.
            tweet_emitter.removeListener("tweets", tweets_cb);   	
 	    clearTimeout(timeout);
    	}
        
        // Dodajemy listener do obsługi zdarzenia "tweets";
        // po jego wystąpieniu uruchamiana jest funkcja twee_cb, która generuje treść i wyłącza timer.
        tweet_emitter.on("tweets", tweets_cb);
    	
        // Po włączeniu nasłuchu zdarzenia "tweets", włączany jest również timer, który po 10 sekundach uruchomi funkcję wysyłającą do przeglądarki pusty ciąg znaków
        // i usunie listener dla tego zdarzenia. Podczas bezproblemowej pracy aplikacji funkcja timera nie zostanie ani razu wywołana (wyłączanie timera 
        // przez funkcję tweets_cb, wywołaną do obsługi zdarzenia). 
        // Jeśli jednak to nastąpi, będzie to oznaczać, że w ciągu 10 sekund od uruchomienia nasłuchu zdarzenia "tweets", zdarzenie to nie wystąpiło.
    	var timeout = setTimeout(function() {
   	    response.writeHead(200, { "Content-Type" : "text/plain" });
    	    response.write(JSON.stringify([]));
    	    response.end();    		
    	    tweet_emitter.removeListener("tweets", tweets_cb);   
            console.log("Listener dla zdarzenia 'tweets' usunięty");         
    	}, 10000); // setTimeout    	
    } else {
        // W przypadku żądania zasobu domyślnego (strony domyślnej) ładujemy plik tweet_streamer.html.
        load_static_file("/index.html", response);
    }
}).listen(8081);

console.log("Serwer uruchomiony pod adresem http://localhost:8081");
