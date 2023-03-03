const mongoose = require('mongoose');

// wedding schema for MongoDB
const weddingSchema = new mongoose.Schema(
  {
    agent: String,
    name: String,
    email: String,
    date: Date,
    venue: String,
    decoration: String,
    photographer: String,
    videographer: String,
    vendorProgress: String,
    payments: [
      {
        date: Date,
        amount: Number,
      },
    ],
    todos: [
      {
        task: String,
        dateAdded: Date,
        deadline: Date,
        done: Boolean,
        default: false,
      },
    ],
  },
  { collection: 'weddings' }
);

// create a new model from the mongoose model
const Wedding = mongoose.model('Wedding', weddingSchema);

// export wedding
module.exports = Wedding;
