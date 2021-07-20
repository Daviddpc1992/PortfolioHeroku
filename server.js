
const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/portfolio'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

http.listen(5000, function(){
    console.log('listening on *:5000');
  });