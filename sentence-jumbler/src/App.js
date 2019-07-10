import React from 'react';
import logo from './logo.svg';
import './App.css';
import SentenceJuggler from './components/SentenceJuggler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>#100DaysOfReact</div>
      </header>
      <div className="App-content">
        <SentenceJuggler />
      </div>
    </div>
  );
}

export default App;
