import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses.selectors";

export const ExpenseList = props => {
  const { expenses } = props;
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <ExpenseListItem {...expense} key={expense.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
