import React, { useState, useEffect } from 'react';
import TradingButtons from './TradingButtons';
import tradeService from '../services/Trade-service';

const TradingPage: React.FC = () => {
	const [balance, setBalance] = useState(100);
	const [leverage, setLeverage] = useState(50);
	const [pair, setPair] = useState('BTCUSDT');
	const [price, setPrice] = useState(0);

	useEffect(() => {
		const fetchPrice = async () => {
			try {
				const fetchedPrice = await getCurrentPrice();
				setPrice(fetchedPrice);
			} catch (error) {
				console.error('Error fetching price:', error);
			}
		};

		fetchPrice();
	}, [pair]);

	async function getCurrentPrice() {
		try {
			const response = await tradeService.fetchCurrentPrice(pair);
			console.log(response);
			return response.data;
		} catch (error) {
			console.error('Error when getting the value of the coin:', error);
			return 0;
		}
	}

	const handleLongClick = async () => {
		getCurrentPrice().then((coinPrice) => {
			if (coinPrice !== null) {
				const contractValue = (price / coinPrice) * leverage;
				setBalance(balance - contractValue);

				if (coinPrice !== price) {
					setPrice(coinPrice);
				}
			}
		});
	};

	const handleShortClick = async () => {
		getCurrentPrice().then((coinPrice) => {
			if (coinPrice !== null) {
				const contractValue = (price / coinPrice) * leverage;
				setBalance(balance + contractValue);

				if (coinPrice !== price) {
					setPrice(coinPrice);
				}
			}
		});
	};

	const handleMarketCloseClick = async () => {
		getCurrentPrice().then((coinPrice) => {
			if (coinPrice !== null) {
				const contractValue = (price / coinPrice) * leverage;
				setBalance(balance + contractValue);

				if (coinPrice !== price) {
					setPrice(coinPrice);
				}
			}
		});
	};

	return (
		<div className="card">
			<h1>Trading sandbox</h1>
			<p>Balance: {balance.toFixed(3)}$</p>
			<p>
				Trading pair:
				<select
					value={pair}
					onChange={(event) => {
						setPair(event.target.value);
					}}
				>
					<option value="BTCUSDT">BTC/USDT</option>
					<option value="ETHUSDT">ETH/USDT</option>
					<option value="BNBUSDT">BNB/USDT</option>
				</select>
			</p>
			<p>
				<label>Leverage: </label>
				<input type="number" min="1" max="100" value={leverage} onChange={(event) => setLeverage(Number(event.target.value))} />
			</p>
			<p>Current price: {price}</p>
			<TradingButtons onLongClick={handleLongClick} onShortClick={handleShortClick} onCloseClick={handleMarketCloseClick} />
		</div>
	);
};

export default TradingPage;
