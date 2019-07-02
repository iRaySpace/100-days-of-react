import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Day 2 - Task Card</h1>
      </header>
      <div className="App-tasks">
        <div className="App-task">
          <div className="App-task-title">Day #1</div>
          <div className="App-task-content">Objective: Make a React login form</div>
        </div>
        <div className="App-task">
          <div className="App-task-title">Day #2</div>
          <div className="App-task-content">Objective: Create a task card</div>
        </div>
      </div>
      <div className="App-footer">
        #100DaysOfReact
      </div>
    </div>
  );
}

export default App;
