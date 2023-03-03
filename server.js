const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const weddingRoutes = require('./backend/routes/weddingRoutes');

// reqiuring in database to initiate connection
const db = require('./backend/utils/database');

// setting the static routes
app.use(express.static(path.join(__dirname)));

// logging for backend requests
app.use(morgan('short'));

// body parser url encoding
app.use(bodyParser.urlencoded({ extended: true }));

// body parsing to json format
app.use(bodyParser.json());

// access control endpoint options
app.use((req, res, next) => {
  // green lists the ip
  res.setHeader('Access-Control-Allow-Origin', '*');
  // allows all methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // sets content type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// the get options for the home directory
app.get('/', (req, res) => {
  // console.log(req);
  res.sendFile(__dirname + '/index.html');
});

// Weddings api endpoint
app.use('/api/v1/weddings', weddingRoutes);

// server listening and port setup
app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
