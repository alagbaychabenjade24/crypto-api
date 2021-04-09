import React from 'react';
import './Coins.scss';

const Coin = ({ image, name, symbol, price, marketcap, volume }) => {
	return (
		<div className='coin-container'>
			<div className='minmax'>
				<div className='coin-row'>
					<div className='coin'>
						<div>
							<img src={image} alt='crypto' />
							<h1>{name}</h1>
						</div>
						<p className='coin-symbol'>{symbol.toUpperCase()}</p>
					</div>

					<div className='coin-data'>
						<p className='coin-price'>${price}</p>
						<p className='coin-volume'>${volume.toLocaleString()}</p>

						<p className='coin-marketcap'>
							Mkt Cap: ${marketcap.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coin;
