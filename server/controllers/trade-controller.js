const axios = require('axios');
const tradeServise = require('../services/trade-service');

class TradeController {
	async getCurrentPrice(req, res, next) {
		try {
			const { tradingPair } = req.body;
			const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradingPair}`);

			console.log(response);

			const price = parseFloat(response.data.price);
			return res.json(price);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new TradeController();
