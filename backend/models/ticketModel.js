const mongoose = require('mongoose');
const ticketSchema = mongoose.Schema;

const ticketModel = new ticketSchema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Select a product'],
      enum: ['iPhone', 'iPad', 'MacBook', 'iMac', 'Mac Pro', 'Apple Watch'],
    },
    description: {
      type: String,
      required: [true, 'Fill out the discription'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tickets', ticketModel);
