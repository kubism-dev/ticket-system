const express = require('express')
const dotenv = require('dotenv').config()
const color = require('colors')
const { errorHandler } = require('../backend/middleware/errorHandler')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// MongoDB connection
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
    res.status(200).send('hi')
})

// API Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`We runnin' on port ${PORT}`))