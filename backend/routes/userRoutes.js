const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  profileUser,
} = require('../controllers/userController');
const { protectRoute } = require('../middleware/authHandler');

router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/profile', protectRoute, profileUser);

module.exports = router;
