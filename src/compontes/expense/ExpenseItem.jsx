import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
const ExpenseItem = ({ expenseData }) => {
  return (
    <div>
      <div className="mainContainer">
        <div className="dateBlock">
          <ExpenseDate expenseData={expenseData} />
        </div>
        <div className="description">{expenseData.item}</div>
        <div className="price">$ {expenseData.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
