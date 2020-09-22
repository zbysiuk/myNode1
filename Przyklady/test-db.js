#!/usr/bin/env node

/* Dostęp do bazy danych - odczyt zawartości tabeli utworzonej przy pomocy polecenia
   (MySQL):

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `secname` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1

*/

var mysql = require('mysql'),
    db_connection_data = { user: 'monouser', 
                           password: 'monouser', 
                           database: 'testbase', 
                         }, // nazwa hosta, port i inne parametry - domyślne
    select_query = 'select name, secname from users';

var dbclient = mysql.createClient(db_connection_data);

dbclient.query(select_query, function(error, results, fields) {
    if (error) {
        console.log(error);
    } else {
//        for (var i = 0; i < results.length; i++) {
//           console.log("Imię: " + results[i].name);
//            console.log("Nazwisko: " + results[i].secname + "\n");
//        }
        for (var i in results) {
            console.log("Imię:     " + results[i].name);
            console.log("Nazwisko: " + results[i].secname + "\n------------------");
        }
    }
    dbclient.end();
});

console.log("Demonstracja użycia modułu mysql\n------------------");
