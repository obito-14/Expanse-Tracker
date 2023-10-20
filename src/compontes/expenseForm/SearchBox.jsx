import React, { useState } from "react";
import "./searchBox.css";
const SearchBox = (props) => {
  const [title, setTitle] = useState("test");
  const [amount, setAmount] = useState(0);
  const [date, setdate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random().toString(),
      item: title,
      price: amount,
      date: new Date(date),
    };
    // console.log(data);

    setTitle("");
    setAmount("");
    setdate("");

    props.getData(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mainContainer1">
          <div className="Box1">
            <div className="Title1">
              <label className="label">Title</label>
              <input
                type="text"
                name=""
                id=""
                className="inputBox"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="Amount1">
              <label className="label">Amount</label>
              <input
                type="number"
                name=""
                id=""
                className="inputBox"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
          </div>
          <div className="Box2">
            <div className="Date1">
              <label className="label">Date</label>
              <input
                type="date"
                name=""
                id=""
                className="inputBox"
                onChange={(e) => setdate(e.target.value)}
                value={date}
              />
            </div>
            <div className="BtnS">
              <button
                type="reset"
                onClick={() => props.SearchBarClose()}
                className="Btn1"
              >
                Close
              </button>
              <button type="submit" className="Btn1">
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
