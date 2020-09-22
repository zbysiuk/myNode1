
var fs = require('fs');

fs.unlink('/home/ziggy/Desktop/Node/mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
