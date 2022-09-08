import React, {useState} from 'react';

import './ExpensesDisplay.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';

const ExpensesDisplay = (props) => {

  const [filteredYear, setFilteredYear] = useState();
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        {!filteredExpenses.length? ( <p>No expenses found.</p> ) : (
          filteredExpenses.map((expense ) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
          ))
        )}
      </Card>
    </div>
  );
}

export default ExpensesDisplay;