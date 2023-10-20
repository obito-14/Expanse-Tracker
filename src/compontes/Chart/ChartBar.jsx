import React from "react";
import "./chartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 150);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barHeight }}></div>
      </div>
      <label className="chart-bar-label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
