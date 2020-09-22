var fs = require('fs');

fs.appendFile('', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});