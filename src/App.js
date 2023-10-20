import React, { useState } from "react";
import "./App.css";
import Expense from "./compontes/expense/Expense.jsx";
import NewExpense from "./compontes/expenseForm/NewExpense.jsx";

const dummyData = [
  {
    id: "ex1",
    date: new Date(2020, 3, 18),
    item: "New Desk (Wooden)",
    price: "231.5",
  },
  {
    id: "ex2",
    date: new Date(2020, 5, 10),
    item: "New Laptop",
    price: "337.5",
  },
  {
    id: "ex3",
    date: new Date(2021, 5, 24),
    item: "New TV",
    price: "536.5",
  },
  {
    id: "ex3",
    date: new Date(2021, 3, 24),
    item: "New Bike",
    price: "739.5",
  },
  {
    id: "ex3",
    date: new Date(2022, 6, 24),
    item: "New Bat",
    price: "136.5",
  },
  {
    id: "ex3",
    date: new Date(2022, 3, 20),
    item: "New Mobile",
    price: "633.5",
  },
  {
    id: "ex3",
    date: new Date(2023, 5, 24),
    item: "New Shirt",
    price: "50.5",
  },
];
const App = () => {
  const [expenseData, setExpenseData] = useState(dummyData);

  function transferData(data) {
    setExpenseData([data, ...expenseData]);
  }
  return (
    <div>
      <NewExpense transferData={transferData} />

      <div className="expense1">
        <Expense expenseData={expenseData} />
      </div>
    </div>
  );
};

export default App;
