var fs = require('fs');

fs.rename('/home/ziggy/Desktop/Node/demofile1.html', '/home/ziggy/Desktop/Node/myrenamedfile22.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
