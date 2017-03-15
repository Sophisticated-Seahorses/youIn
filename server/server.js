var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('this is a get route');
});

app.listen(port, function() {
  console.log('we are now listening on your port');
});