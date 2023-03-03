const mongoose = require('mongoose');

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
        deadline: Date,
        done: Boolean,
        default: false,
      },
    ],
  },
  { collection: 'weddings' }
);

const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
