const tradeModel = require('../models/trade-model');

class TradeServise {
	async saveTrade(type, openingPrice, closingPrice, leverage) {
		const trade = await tradeModel.create({
			type: type,
			openingPrice: openingPrice,
			closingPrice: closingPrice,
			leverage: leverage,
		});

		return trade;
	}
}

module.exports = new TradeServise();
