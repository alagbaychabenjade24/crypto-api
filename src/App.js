import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Coin from './Coin';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then(response => {
				setCoins(response.data);
			})
			.catch(error => console.log(error));
	}, []);

	const handleChange = event => setSearch(event.target.value);

	const filteredCoins = coins.filter(coin =>
		coin.name.toLowerCase().includes(search.toLocaleLowerCase())
	);

	return (
		<div className='coin'>
			<div className='coin--search'>
				<h1>Search a currency</h1>

				<form>
					<input
						type='text'
						className='coin__input'
						placeholder='Search'
						onChange={handleChange}
					/>
				</form>
			</div>

			{filteredCoins.map(coin => {
				return (
					<Coin
						key={coin.id}
						name={coin.name}
						price={coin.current_price}
						symbol={coin.symbol}
						marketcap={coin.total_volume}
						volume={coin.market_cap}
						image={coin.image}
						priceChange={coin.price_change_percentage_24h}
					/>
				);
			})}
		</div>
	);
}

export default App;
