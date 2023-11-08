import React from "react";
import ShowTime from "./ShowTime";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const SeatTimeNav = () => {
  return (
    <div className="seat-time">
      <div className="times-container d-flex gap-10p">
        <ShowTime />
        <ShowTime />
        <ShowTime />
        <ShowTime />
        <ShowTime />
        <ShowTime />
        <button className="back">
          <ArrowBackIos />
        </button>
        <button className="forward">
          <ArrowForwardIos   />
        </button>
      </div>
    </div>
  );
};

export default SeatTimeNav;
