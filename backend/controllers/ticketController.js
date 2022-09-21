const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const ticketModel = require('../models/ticketModel');

// @desc Get Tickets
// @route /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const tickets = await ticketModel.find({ user: req.user.id });
  res.status(200).json(tickets);
});

// @desc Create Ticket
// @route /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add product and description');
  }

  const user = await userModel.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const ticket = await ticketModel.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  });
  res.status(201).json(ticket);
});

module.exports = { getTickets, createTicket };
