import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      category: '',
      expense: '',
    };
  }

  handleChange  = (event) => {
    const nextState = {};

    const fieldname = event.target.name;
    nextState[fieldname] = event.target.value;
    
    this.setState(nextState);
  }

  handleOnRecord = () => {
    this.props.onRecord(this.state);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({
      description: '',
      category: '',
      expense: '',
    });
  }
  render() {
    return (
      <div className="App-input">
        <div className="App-input-title">
          Expense Input
        </div>
        <label htmlFor="description">
          Description
        </label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label htmlFor="category">
          Category
        </label>
        <input
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <label htmlFor="expense">
          Expense
        </label>
        <input
          type="text"
          name="expense"
          value={this.state.expense}
          onChange={this.handleChange}
        />
        <button onClick={this.handleOnRecord}>
          Record
        </button>
      </div>
    );
  }
}