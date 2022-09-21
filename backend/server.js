const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const color = require('colors');
const { errorHandler } = require('../backend/middleware/errorHandler');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// MongoDB connection
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`We runnin' on port ${PORT}`));
