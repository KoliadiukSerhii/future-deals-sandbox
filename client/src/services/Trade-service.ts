import $api from '../http';

export default class TradeService {
	static async fetchCurrentPrice(tradingPair: string) {
		return $api.post('/price', { tradingPair });
	}
}
