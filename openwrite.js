

var fs = require('fs');

fs.open('/home/ziggy/Desktop/Node/mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
