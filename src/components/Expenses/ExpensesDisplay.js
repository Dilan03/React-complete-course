import React, {useState} from 'react';

import './ExpensesDisplay.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpernseChart from './ExpensesChart';

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
        <ExpernseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpensesDisplay;