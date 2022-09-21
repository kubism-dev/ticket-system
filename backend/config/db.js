const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(`We connectin' ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
