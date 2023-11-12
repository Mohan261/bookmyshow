import React from "react";
import "./SeatNav.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../Slicer/TicketSlicer";
const SeatNav = () => {
  const { seatCount, movieName, screenName, time } = useSelector(
    (store) => store.ticketbook
  );
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className="seat-nav">
          <div className="d-flex gap-15p">
            <p>{movieName}</p>
            <div className="info-box">UA</div>
          </div>
          <p>
            {screenName} | Today, 28 Oct, {time}
          </p>
          <button className="arrow-btn">
            <ArrowBackIos sx={{ color: "#fff" }} />
          </button>
          <button className="close-btn">&times;</button>
          <button
            className="ticket-edit"
            onClick={() => dispatch(toggleSeat())}
          >
            {seatCount} Tickets
            <EditOutlinedIcon sx={{ fontSize: "16px", marginLeft: "10px" }} />
          </button>
        </div>
      </header>
    </>
  );
};

export default SeatNav;
