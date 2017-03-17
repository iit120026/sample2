const express = require('express');
const path = require('path');
const http = require('http');
const MongoClient = require('mongodb').MongoClient

const app = express();

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

var db
MongoClient.connect('mongodb://root:1234@ds131340.mlab.com:31340/sample', (err, database) => {
  if (err) return console.log(err)
  console.log("db connected successfully");
  db = database
  server.listen(port, () => console.log(`App running on localhost:${port}`));
})


app.get('/', (req, res)=>{
 //res.send('<h1>Hello World</h1>')
  res.sendFile(path.join(__dirname, 'dist'));
});


app.get('/api/spaces', (req, res)=>{
  db.collection('spaces').find().toArray(function(err, results) {
    if (err) return console.log(err)
  else console.log(results)
  res.send(results);
})

});





app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})