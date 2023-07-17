const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
  const db= client.db('moviematch');
  const favouritesCollection= db.collection('favourites');
  const favouritesRouter= createRouter(favouritesCollection);
  app.use('/favourites', favouritesRouter);
  const moviesCollection= db.collection('movies');
  const moviesRouter= createRouter(moviesCollection);
  app.use('/movies', moviesRouter);
}).catch(console.err);

app.listen(9000, function () {
    console.log(`listening on Port ${this.address().port}`)  
});

