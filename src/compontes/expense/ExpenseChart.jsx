import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const charDataPoints = [
    { label: "Jan", price: 0 },
    { label: "Feb", price: 0 },
    { label: "Mar", price: 0 },
    { label: "Apr", price: 0 },
    { label: "May", price: 0 },
    { label: "Jun", price: 0 },
    { label: "Jul", price: 0 },
    { label: "Aug", price: 0 },
    { label: "Sep", price: 0 },
    { label: "Oct", price: 0 },
    { label: "Nov", price: 0 },
    { label: "Dec", price: 0 },
  ];
  for (let record of props.filterRecord) {
    let months = record.date.getMonth();

    charDataPoints[months].price += record.price;
  }
  return (
    <div>
      <Chart charDataPoints={charDataPoints} />
    </div>
  );
};

export default ExpenseChart;
