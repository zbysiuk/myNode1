
var fs = require('fs');

fs.writeFile('/home/ziggy/Desktop/Node/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
