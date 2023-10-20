import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import "./expense.css";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseChart from "./ExpenseChart.jsx";

const Expense = ({ expenseData }) => {
  const [filterYear, setFilterYear] = useState("2020");
  const updateFilterYear = (year) => {
    setFilterYear(year);
  };
  let filterRecord = expenseData.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear.toString();
  });
  return (
    <div>
      <ExpenseFilter
        updateFilterYear={updateFilterYear}
        filterYear={filterYear}
      />
      <ExpenseChart filterRecord={filterRecord} />
      {filterRecord.length > 0 ? (
        filterRecord.map((value, index) => {
          return <ExpenseItem key={index} expenseData={value} />;
        })
      ) : (
        <h1 className="expenseError">No Data Found</h1>
      )}
    </div>
  );
};

export default Expense;
