const { Schema, model } = require('mongoose');

const tradeSchema = new Schema({
	type: { type: String, required: true },
	openingPrice: { type: Number, required: true },
	closingPrice: { type: Number },
	leverage: { type: Number, default: 50 },
});

module.exports = model('Trade', tradeSchema);
