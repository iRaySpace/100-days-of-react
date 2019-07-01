import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">Sign in to Demo</h1>
      </header>
      <div className="App-form">
        <label htmlFor="login_field">
          Email Address
        </label>
        <input type="text" name="login" id="login_field" className="App-input-block" autoComplete="off" autoCorrect="off" />
        <label htmlFor="password_field">
          Password
        </label>
        <input type="password" name="password" id="password_field" className="App-input-block" />
        <input type="submit" value="Sign in" className="App-btn-block" />
      </div>
      <div className="App-callout">
        <p>New to Demo? <a href="#">Create an account</a>.</p>
      </div>
      <footer className="App-footer">
        <p>#100DaysOfReact</p>
      </footer>
    </div>
  );
}

export default App;
