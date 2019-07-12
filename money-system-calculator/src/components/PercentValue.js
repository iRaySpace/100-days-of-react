import React from 'react';

function PercentValue(props) {
  const { value, percent } = props;
  const multiplier = parseFloat(percent) / 100;
  const calculated = parseFloat(value) * multiplier;

  return (
    <div className="App-pv" onClick={props.onClick}>
      <div className="App-pv-percent">{percent}%</div>
      <div className="App-pv-calculated">{calculated.toFixed(2)}</div>
    </div>
  );
}

export default PercentValue;
