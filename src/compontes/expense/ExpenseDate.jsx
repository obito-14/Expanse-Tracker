import React from "react";
import "./expenseDate.css";
const ExpenseDate = ({ expenseData }) => {
  // const month = months[expenseData.date.getMonth()];
  const month = expenseData.date.toLocaleString("en-us", { month: "long" });
  const Year = expenseData.date.getFullYear();
  const Date = expenseData.date.getDate();
  return (
    <div>
      <div className="month">{month}</div>
      <div className="year">{Year}</div>
      <div className="date">{Date}</div>
    </div>
  );
};

export default ExpenseDate;
