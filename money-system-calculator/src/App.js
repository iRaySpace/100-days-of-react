import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import PercentValue from './components/PercentValue';

function App() {
  const [percentages, setPercentages] = useState([]);
  
  const [percentage, setPercentage] = useState('');
  const [value, setValue] = useState('');

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  const onPercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setPercentage('');
    setPercentages([...percentages, percentage]);
  };

  const removePercentage = (id) => {
    const clone = _copyArr(percentages);
    clone.splice(id, 1);
    setPercentages(clone);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>#100DaysOfReact</div>
      </header>
      <div className="App-content">
        <div className="App-content-value">
          <label className="App-label" htmlFor="money">
            Input Money
          </label>
          <input
            className="App-input"
            type="text"
            name="money"
            placeholder="$"
            value={value}
            onChange={onValueChange}
          />
        </div>
        <div className="App-content-percent">
          <form onSubmit={onHandleSubmit}>
            <label className="App-label" htmlFor="percent">
              Input Percent
            </label>
            <input
              className="App-input"
              type="text"
              name="percent"
              placeholder="%"
              value={percentage}
              onChange={onPercentageChange}
            />
          </form>
          <div className="App-pvs">
            {percentages.map((percent, id) => 
              <PercentValue
                percent={percent}
                value={value}
                key={`percent-${id}`}
                onClick={() => removePercentage(id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function _copyArr(arr) {
  const cloneArr = [];
  for(let i = 0; i < arr.length; i++) {
    cloneArr.push(arr[i]);
  }
  return cloneArr;  
}

export default App;
