import React from 'react';
import logo from './logo.svg';
import './App.css';

import Device from "./components/Device";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Smart Home</h1>
      </header>
      <div className="App-devices">
        <Device name="Main Room" />
        <Device name="Electric Fan" />
      </div>
    </div>
  );
}

export default App;
