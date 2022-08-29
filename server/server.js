const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv');
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(require('./words'));
// get driver connection
const dbo = require('./db/conn');

app.disable('etag');

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
