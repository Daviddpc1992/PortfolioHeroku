
const path = require('path');
const express = require('express');
const app = express();
const server = http.createServer(process.env.PORT || 3000);

// Serve static files
app.use(express.static(__dirname + '/dist/portfolio'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});
