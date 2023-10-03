const express = require('express');
const tradeController = require('../controllers/trade-controller');
const axios = require('axios');

const router = express.Router();

router.post('/price', tradeController.getCurrentPrice);

module.exports = router;
