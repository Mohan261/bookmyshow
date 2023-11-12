import React from "react";
import "./ShowTime.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectShow } from "../Slicer/TicketSlicer";
const ShowTime = ({ time, id }) => {
  let nav = useNavigate();
  const dispatch = useDispatch();

  function handleShowTime(value) {
    nav("seat");
    dispatch(selectShow(value));
  }
  return (
    <button className="showtime-btn" onClick={(e) => handleShowTime(id)}>
      <p>{time}</p>
      <p>DOLBY ATMOS</p>
    </button>
  );
};

export default ShowTime;
