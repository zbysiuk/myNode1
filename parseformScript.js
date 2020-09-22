var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/var/services/homes/zbysiuk/myparsefile.js' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');

    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<style>');
     
    res.write('body {');    
    res.write('background-color:crimson;');       
    res.write('}');
        
         
    res.write('div { ');     
    res.write('box-shadow:3px 3px 6px black;');            
    res.write('margin:10px auto;');        
    res.write('padding:15px;');        
    res.write('border:2px black;');        
    res.write('border-radius: 6px 6px 6px 6px;');        
    res.write('background-color:deepskyblue;');        
           
    res.write('} ');      
               
    res.write('p { ');             
    res.write('box-shadow:0 0 6px 2px black inset;');        
    res.write('background-color:gainsboro;');       
    res.write('border-radius: 6px 6px 6px 6px;');       
    res.write('padding:5px;');       
    res.write('text-align:center;');       
    res.write(' } ');        
    res.write('ol { ');             
    res.write('background-color:lightblue;');            
    res.write('padding-top:10px; ');            
    res.write('padding-bottom:5px;');            
    res.write('border-radius: 6px 6px 6px 6px;');            
    res.write('box-shadow:3px 3px 6px black; ');            
    res.write('font-size:17px;');            
    res.write('font-family:"Times New Roman", Georgia, serif; ');            
    res.write('} ');                    
    res.write('input { ');            
    res.write('background-color:deepskyblue; ');             
    res.write('padding-top:3px; ');              
    res.write('padding-bottom:3px; ');              
    res.write('border-radius: 13px 13px 13px 13px; ');              
    res.write('box-shadow:3px 3px 6px black; ');              
    res.write('font-size:18px; ');              
    res.write('font-family:"Times New Roman", Georgia, serif; ');              
    res.write(' }  ');                               
    res.write('button { ');              
    res.write('background-color:deepskyblue; ');                
    res.write('padding-top:3px; ');                
    res.write('padding-bottom:3px; ');                
    res.write('border-radius: 10px 10px 10px 10px; ');                 
    res.write('box-shadow:3px 3px 6px black; ');              
    res.write('font-size:18px; '); 
    res.write('font-family:"Times New Roman", Georgia, serif; '); 
    res.write(' } '); 

    res.write('select { '); 
    res.write('background-color:deepskyblue; '); 
    res.write('padding-top:3px; '); 
    res.write('padding-bottom:3px; '); 
    res.write('border-radius: 10px 10px 10px 10px; ');  
    res.write('box-shadow:3px 3px 6px black; ');  
    res.write('font-size:18px; ');  
    res.write('margin: auto; ');   
    res.write('width: 25%; ');   
    res.write(' } ');  
                    
    res.write('</style>');
    res.write('</head>');  
    res.write('<body>'); 
    
    res.write('<h2>Przyszly formularz do wpisu danych</h2>');

    res.write('<table>');
    res.write('<tr>');
    res.write('<td>');                     
    res.write('<div id="2019div13"></div>');    
    res.write('<p><input type="text"><br/><input type="text"></p>');
    res.write('<ol>'); 

    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
    res.write('<li><input type="text"></li>');
              
    res.write('</ol>');              
    res.write('</div>');               
    res.write('</td>');   
    res.write('</tr>');  
 
    res.write('</table>'); 
    res.write('</body>');
    res.write('</html>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();

    
                   
  }
}).listen(8080);
