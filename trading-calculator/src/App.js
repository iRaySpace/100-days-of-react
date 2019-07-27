import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import RatioCalculator from './components/RatioCalculator';
import MoneyResult from "./components/MoneyResult";

function App() {
  const [money, setMoney] = useState('');
  const [riskMoney, setRiskMoney] = useState('');
  const [rewardMoney, setRewardMoney] = useState('');

  const onCalculate = (risk, reward, capital) => {
    const riskedCapital = parseFloat(capital) * parseFloat(risk);
    const rewardCapital = parseFloat(capital) * parseFloat(reward);
    setRiskMoney(riskedCapital.toFixed(2));
    setRewardMoney(rewardCapital.toFixed(2));
    setMoney(parseFloat(capital).toFixed(2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        #100DaysOfCode
      </header>
      <div className="row">
        <div className="column">
          <RatioCalculator onCalculate={onCalculate} />
        </div>
        <div className="column">
          <MoneyResult
            money={money}
            riskMoney={riskMoney}
            rewardMoney={rewardMoney}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
