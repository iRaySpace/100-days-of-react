import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <div className="App-nav-container">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <a className="active" href="#home">Home</a>
          <a href="#prices">Prices</a>
          <a href="#accounts">Accounts</a>
          <div className="App-nav-right">
            <div className="App-coa">
              <button>
                <span>Trade</span>
              </button>
            </div>
            <div className="App-profile">
              <div className="App-profile-circle">I</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
