const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const weddingRoutes = require('./backend/routes/weddingRoutes');

const db = require('./backend/utils/database');

app.use(express.static(path.join(__dirname)));

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // green lists the ip
  res.setHeader('Access-Control-Allow-Origin', '*');
  // allows all methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // sets content type
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  // console.log(req);
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1/weddings', weddingRoutes);

app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
