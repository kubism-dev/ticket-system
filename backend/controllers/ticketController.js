const asyncHandler = require('express-async-handler');
const UserModel = require('../models/userModel');
const TicketModel = require('../models/ticketModel');

// @desc Get Tickets
// @route /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

// @desc Create Ticket
// @route /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create Ticket' });
});

module.exports = { getTickets, createTicket };
