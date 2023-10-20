import React from "react";
import ChartBar from "./ChartBar";
import "./chart.css";

const Chart = (props) => {
  let PriceArray = props.charDataPoints.map((row) => row.price);

  let maxPrice = Math.max(...PriceArray);
  console.log(maxPrice);
  return (
    <div className="chart">
      {props.charDataPoints.map((record, index) => {
        return (
          <ChartBar
            key={index}
            label={record.label}
            value={record.price}
            maxValue={maxPrice}
          />
        );
      })}
    </div>
  );
};

export default Chart;
