import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses.selectors";

export const ExpenseList = props => {
  const { expenses } = props;
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          <div>
            {expenses.map(expense => (
              <ExpenseListItem {...expense} key={expense.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
