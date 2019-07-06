import React from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from "./components/Sidebar";
import Attendances from "./components/Attendances";

const Events = ['Bonbon Clean-up Drive', 'Formal Meeting', 'Charity Event'];
const Persons = ['Ivan Ivanovich', 'Katerina the Great'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: null,
      attendances: {}
    };
  }

  onEventClick = (event) => {
    this.setState({ currentEvent: event.target.innerHTML });
  }

  onRecordClick = () => {
    alert("Recorded... (not really)");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>#100DaysOfReact #AttendanceTracker</div>
        </header>
        <div className="App-content">
          <Sidebar
            events={Events}
            onClick={this.onEventClick}
            event={this.state.currentEvent} 
          />
          <Attendances
            onClick={this.onRecordClick}
            event={this.state.currentEvent}
            persons={Persons}
          />
        </div>
      </div>
    );
  }
}

export default App;
