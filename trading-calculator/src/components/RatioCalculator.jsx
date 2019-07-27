import React, { useState } from 'react';

function RatioCalculator(props) {
  const [risk, setRisk] = useState('');
  const [reward, setReward] = useState('');
  const [capital, setCapital] = useState('');

  const { onCalculate } = props;

  const onChangeRisk = (event) => {
    setRisk(event.target.value);
  };

  const onChangeReward = (event) => {
    setReward(event.target.value);
  };

  const onChangeCapital = (event) => {
    setCapital(event.target.value);
  };

  const onCalculateRiskReward = (event) => {
    event.preventDefault();
    onCalculate(risk, reward, capital);    
  };

  return (
    <div className="App-calculator">
      <form className="App-calculator-form">
        <div className="form-input">
          <label htmlFor="capital">Capital</label>
          <input
            type="text"
            name="capital"
            placeholder="Capital"
            value={capital}
            onChange={onChangeCapital}
          />
        </div>
        <div className="form-input">
          <label htmlFor="risk">Risk Ratio</label>
          <input 
            type="text"
            name="risk"
            placeholder="Risk"
            value={risk}
            onChange={onChangeRisk}
          />
        </div>
        <div className="form-input">
          <label htmlFor="reward">Reward Ratio</label>
          <input
            type="text"
            name="reward"
            placeholder="Reward"
            value={reward}
            onChange={onChangeReward}
          />
        </div>
        <button
          className="form-button"
          onClick={onCalculateRiskReward}
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default RatioCalculator;
