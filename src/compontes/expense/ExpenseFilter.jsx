import React from "react";
import "./expenseFilter.css";
const ExpenseFilter = (props) => {
  return (
    <div className="filterContainer">
      <div>
        <label>Filter By Year :</label>
      </div>
      <div>
        <select
          onChange={(e) => props.updateFilterYear(e.target.value)}
          value={props.filterYear}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
