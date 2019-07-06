import React from 'react';

class Sidebar extends React.Component {
  render() {
    const currentEvent = this.props.event;
    const Events = this.props.events.map((event, id) => 
      <div
        key={`event-${id}`}
        className={"App-event" + (currentEvent === event ? " active" : "")}
        onClick={this.props.onClick}
      >
        {event}
      </div>
    );

    return (
      <div className="App-sidebar">
        {Events}
      </div>
    )
  }
}

export default Sidebar;