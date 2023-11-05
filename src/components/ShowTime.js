import React from "react";
import "./ShowTime.css";
import { useNavigate } from "react-router-dom";
const ShowTime = () => {
  let nav = useNavigate();
  function handleShowTime() {
    nav("seat");
  }
  return (
    <button className="showtime-btn" onClick={handleShowTime}>
      <p>10:00 AM</p>
      <p>DOLBY ATMOS</p>
    </button>
  );
};

export default ShowTime;
