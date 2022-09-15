const express = require('express');

const ObjectId = require('mongodb').ObjectId;
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/../build'));
app.use('/static', express.static(__dirname + '/../build/static'));
app.use(cors());
app.use(express.json());
//app.use(require('./words'));

// get driver connection
const dbo = require('./db/conn');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('/getFour', (req, res) => {
  let db_connect2 = dbo.getDb('SpanishWords');
  db_connect2
    .collection('SpanishWords')
    .aggregate([{ $sample: { size: 4 } }])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
