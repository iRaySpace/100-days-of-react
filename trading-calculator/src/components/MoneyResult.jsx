import React from 'react';

function MoneyResult(props) {
  return (
    <div className="App-calculator">
      <div className="money-card">
        From <span className="money neutral">{props.money}</span>
      </div>
      <div className="money-card">
        Lose <span className="money negative">{props.riskMoney}</span>
      </div>
      <div className="money-card">
        Win <span className="money positive">{props.rewardMoney}</span>
      </div>
    </div>
  )
}

export default MoneyResult;