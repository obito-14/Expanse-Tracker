import React from "react";
import SearchBox from "./SearchBox";
import "./newExpense.css";
const NewExpense = (props) => {
  function getData(data) {
    // console.log(data);
    props.transferData(data);
  }

  const SearchBarOpen = () => {
    document.querySelector(".searchBox").style.display = "block";
    document.querySelector(".SearchBtn").style.display = "none";
  };
  const SearchBarClose = () => {
    document.querySelector(".searchBox").style.display = "none";
    document.querySelector(".SearchBtn").style.display = "block";
  };
  return (
    <div>
      <div className="searchBox">
        <SearchBox getData={getData} SearchBarClose={SearchBarClose} />
      </div>
      <div className="SearchBtn">
        <button onClick={SearchBarOpen}> Add Expense</button>
      </div>
    </div>
  );
};

export default NewExpense;
