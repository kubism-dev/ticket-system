const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authHandler');
const { getTickets, createTicket } = require('../controllers/ticketController')

router
  .route('/')
  .get(getTickets, protectRoute)
  .post(createTicket, protectRoute);

module.exports = router;
