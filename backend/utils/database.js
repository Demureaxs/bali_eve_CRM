// required modules
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// uri coming from the .env file
const uri = process.env.DB_URL;

// db name for connection
const dbName = 'balievecrm';

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName,
});

// assigning the connection to db
const db = mongoose.connection;

// check for errors
db.on('error', console.error.bind(console, 'connection error'));
// console.log when db is ready
db.once('open', err => {
  console.log('MongoDB ready');
});

// export db
module.exports = db;
