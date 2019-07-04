import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }
  
  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className={_getDeviceClassName(this.state.isOn)}>
        <div className="App-device-name">
          {this.props.name}
        </div>
        <button
          className="App-device-toggle"
          onClick={this.toggle}
        >
          Toggle
        </button>
      </div>
    )
  }
}

const _getDeviceClassName = (isOn) => {
  let deviceClassName = "App-device";
  if (isOn) deviceClassName += " active";
  return deviceClassName;
}
