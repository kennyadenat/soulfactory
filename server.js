const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/yinkweb'));

app.listen(4400 || 8000, () => {
  console.log(`Server started on port`);
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/yinkweb/index.html'))
});
