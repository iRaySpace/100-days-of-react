import React from 'react';
import logo from './logo.svg';
import './App.css';

import CryptoCard from './components/CryptoCard';

// based from CoinMarketCap as of 12mn July 15 2019 GMT+8
const DATA = [
  {
    name: 'Bitcoin',
    marketCap: '$186,671,177,096',
    price: '$10,476.94',
    volume: '$23,002,785,502',
    circulating: '17,817,337 BTC',
    change: '-8.20%'
  },
  {
    name: 'Ethereum',
    marketCap: '$25,359,670,356',
    price: '$237.23',
    volume: '$8,239,787,012',
    circulating: '106,896,856 ETH',
    change: '-12.35%'
  },
  {
    name: 'XRP',
    marketCap: '$13,152,588,272',
    price: '$0.308988',
    volume: '$1,258,287,102',
    circulating: '42,566,596,173 XRP *',
    change: '-7.92%'
  }
];

function App() {
  const CryptoCards = DATA.map(row =>
    <CryptoCard
      name={row.name}
      marketCap={row.marketCap}
      price={row.price}
      volume={row.volume}
      circulating={row.circulating}
      change={row.change}
    /> 
  );

  const CryptoHeader = (
    <CryptoCard
      header
      name="Name"
      marketCap="Market Cap"
      price="Price"
      volume="Volume (24h)"
      circulating="Circulating Supply"
      change="Change (24h)"
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        #100DaysOfReact
      </header>
      <div className="App-content">
        <div className="App-crypto-cards">
          {CryptoHeader}
          {CryptoCards}
        </div>
      </div>
      <div className="App-footer">
        Data as of 12mn Jul-15-2019 (GMT+8)
      </div>
    </div>
  );
}

export default App;
