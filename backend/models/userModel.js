const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const userModel = new userSchema(
  {
    name: {
      type: String,
      required: [true, 'Add a name'],
    },
    email: {
      type: String,
      required: [true, 'Add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Add a password'],
    },
    isAdmin: {
      type: Boolean,
      required: [false],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userModel);
