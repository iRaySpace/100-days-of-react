import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="App-expense">
        <input
          type="text"
          name="description"
          value={this.props.description}
          onChange={(e) => this.props.onChange(e.target.value, this.props.id, 'description')}
        />
        <div>{this.props.category}</div>
        <div className="App-expense-val">
          {this.props.expense}
        </div>
      </div>
    );
  }
}