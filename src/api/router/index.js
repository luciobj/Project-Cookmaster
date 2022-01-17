const express = require('express');
const {
  userCreateController,
  userLoginController,
} = require('../controllers/userControllers');

const router = express.Router();

router.post('/users', userCreateController);
router.post('/login', userLoginController);

module.exports = router;
