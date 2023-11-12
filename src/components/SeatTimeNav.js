import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import SeatDate from "./SeatDate";
import { useSelector } from "react-redux";

const SeatTimeNav = () => {
  const { timeArr } = useSelector((store) => store.ticketbook);
  return (
    <div className="seat-time">
      <div className="times-container d-flex gap-10p">
        {timeArr.map((list, indx) => (
          <SeatDate time={list} key={indx + "-" + list} />
        ))}

        <button className="back">
          <ArrowBackIos />
        </button>
        <button className="forward">
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default SeatTimeNav;
