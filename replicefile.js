var fs = require('fs');


fs.writeFile('/home/ziggy/Desktop/Node/mynewfile2.html', 
'<html>+
<body><h1>To moj naglowek</h1><p>To jest moj html.</p></body></html>'
, function (err) 
{
  if (err) throw err;
  console.log('Replaced!');
});