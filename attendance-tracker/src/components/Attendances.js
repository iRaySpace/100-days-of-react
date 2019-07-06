import React from 'react';

import AttendanceCard from "./AttendanceCard";

class Attendances extends React.Component {
  render() {
    const Persons = this.props.persons.map((person, id) => 
      <AttendanceCard key={id} name={person} />
    );

    return (
      <div className="App-attendances">
        <div className="event-title">
          {this.props.event || 'Select an event'}
        </div>
        <div className="attendees">
          {Persons}
        </div>
        <div className="App-record">
          <button
            className="App-record-button"
            onClick={this.props.onClick}
          >
            Record
          </button>
        </div>
      </div>
    );
  }
}

export default Attendances;