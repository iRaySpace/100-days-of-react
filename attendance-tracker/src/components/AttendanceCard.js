import React from 'react';

class AttendanceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attended: false
    };
  }

  onClick = () => {
    this.setState({ attended: !this.state.attended });
  }

  render() {
    let className = "App-attendance";
    if (this.state.attended) className += " attended";

    return (
      <div
        className={className}
        onClick={this.onClick}
      >
        {this.props.name}
      </div>
    );
  }
}

export default AttendanceCard;