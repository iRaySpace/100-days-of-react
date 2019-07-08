import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(60);
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    const timer = setInterval(decrement, 1000);
    return () => {
      console.log("This will only get triggered if state is changed.");
      clearInterval(timer);
    }
  });

  const decrement = () => {
    // This is running forever
    if (!countdown) return;
    setCount(count - 1);
  }

  return (
    <div className="App-timer">
      <div className="App-timer-text">
        <div className="count">{count}</div>
        <div className="label">second(s) left</div>
      </div>
      <div className="App-timer-button">
        <button
          className="App-timer-toggle"
          onClick={() => setCountdown(!countdown)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default Timer;