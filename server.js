

//Express gives us a function, require it
var express = require('express');

// set var app and port
var app = express();
var port = 5000;

app.use(express.static('public'));

//create listener, console log port, will run when accessing localhost:5000

app.listen(port, function(){
  console.log('listening on port', port);
});