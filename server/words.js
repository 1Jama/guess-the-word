const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const wordsRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;
//const Spanish = require('mongodb').Spanish;
//const number = require('mongodb').Number;

// This section will help you get a list of all the records.
wordsRoutes.route('/words').get(function (req, res) {
  let db_connect = dbo.getDb('SpanishWords');
  db_connect
    .collection('SpanishWords')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
wordsRoutes.route('/words/:id').get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection('SpanishWords')
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

wordsRoutes.route('/words/getByNumber/:num').get(async function (req, res) {
  let db_connect = dbo.getDb('SpanishWords');
  let wordNumber = { num: parseInt(req.params.num) };
  console.log(req.params.num);
  let getWordNumber = await db_connect
    .collection('SpanishWords')
    .findOne(wordNumber);

  return res.json(getWordNumber);
});

wordsRoutes
  .route('/words/getByEnglish/:english')
  .get(async function (req, res) {
    let db_connect = dbo.getDb('SpanishWords');
    let englishWord = { english: req.params.english };
    console.log(req.params.english);
    let getEnglishWord = await db_connect
      .collection('SpanishWords')
      .findOne(englishWord);
    return res.json(getEnglishWord);
  });

wordsRoutes.route('/getFour').get(function (req, res) {
  let db_connect2 = dbo.getDb('SpanishWords');
  db_connect2
    .collection('SpanishWords')
    .aggregate([{ $sample: { size: 4 } }])
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
module.exports = wordsRoutes;
