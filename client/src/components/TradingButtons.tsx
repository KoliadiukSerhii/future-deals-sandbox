import React from 'react';

interface TradingButtonsProps {
	onLongClick: () => void;
	onShortClick: () => void;
	onCloseClick: () => void;
}

const TradingButtons: React.FC<TradingButtonsProps> = ({ onLongClick, onShortClick, onCloseClick }) => {
	return (
		<div trading-buttons__wrapper>
			<button className="trading-button green" onClick={onLongClick}>
				LONG
			</button>
			<button className="trading-button red" onClick={onShortClick}>
				SHORT
			</button>
			<button className="trading-button yellow" onClick={onCloseClick}>
				CLOSE
			</button>
		</div>
	);
};

export default TradingButtons;
