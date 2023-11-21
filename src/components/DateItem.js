import React from "react";
import "./DateItem.css"
const DateItem = ({ data }) => {
  let dateStr = data.split(" ");
  return (
    <div className="date d-flex flex-dir">
      <p className="day">{dateStr[0].toLocaleUpperCase()}</p>
      <p className="d-date">{dateStr[2]}</p>
      <p className="month">{dateStr[1].toLocaleUpperCase()}</p>
    </div>
  );
};

export default DateItem;
