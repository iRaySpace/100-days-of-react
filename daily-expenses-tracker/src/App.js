import React from 'react';
import logo from './logo.svg';
import './App.css';

import InputCard from "./components/InputCard";
import ExpenseCard from "./components/ExpenseCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
  }

  onRecord = (input) => {
    this.setState(state => {
      // View here for more info
      // https://www.robinwieruch.de/react-state-array-add-update-remove/
      const expenses = state.expenses.concat(input);
      return { expenses }; 
    })
  }

  handleChange = (value, id, name) => {
    this.setState(state => {
      const expenses = state.expenses;
      const expense = expenses[id];
      expense[name] = value;
      return { expenses };
    });
    console.log(this.state.expenses);
  }

  render() {
    const Expenses = this.state.expenses.map((expense, id) => 
      <ExpenseCard
        key={id}
        id={id}
        description={expense.description}
        category={expense.category}
        expense={expense.expense}
        onChange={this.handleChange}
      />
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>#100DaysOfReact</div>
        </header>
        <div className="App-content">
          <InputCard onRecord={this.onRecord} />
          <div className="App-expenses">
            <div className="App-expenses-header">
              <div>Description</div>
              <div>Category</div>
              <div>Expenses</div>
            </div>
            {Expenses}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
