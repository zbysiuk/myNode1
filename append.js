


var fs = require('fs');

fs.appendFile('/var/services/homes/zbysiuk/', 'A teraz kolejna linijka', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


