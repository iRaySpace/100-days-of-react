import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="App-expense">
        <div>{this.props.description}</div>
        <div>{this.props.category}</div>
        <div className="App-expense-val">
          {this.props.expense}
        </div>
      </div>
    );
  }
}