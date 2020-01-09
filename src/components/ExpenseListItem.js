import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  const { description, amount, createdAt, id } = props;
  return (
    <div>
      <li>
        <Link to={`/edit/${id}`}>
          <h3>Description: {description}</h3>
        </Link>
        <p>
          Amount: {amount} - {createdAt}
        </p>
      </li>
    </div>
  );
};

export default ExpenseListItem;
