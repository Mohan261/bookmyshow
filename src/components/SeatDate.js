import React from "react";

const SeatDate = ({ time }) => {
  return (
    <button className="showtime-btn">
      <p>{time}</p>
      <p>DOLBY ATMOS</p>
    </button>
  );
};

export default SeatDate;
