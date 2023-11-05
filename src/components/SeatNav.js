import React from "react";
import "./SeatNav.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShowTime from "./ShowTime";
import { ArrowForwardIos } from "@mui/icons-material";
import SeatView from "./SeatView";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../Slicer/TicketSlicer";
const SeatNav = () => {
  const { seatCount } = useSelector((store) => store.ticketbook);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className="seat-nav">
          <div className="d-flex gap-15p">
            <p>Leo</p>
            <div className="info-box">UA</div>
          </div>
          <p>PVR: Escape-Express, Avenue Mall | Today, 28 Oct, 12:30 PM</p>
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
              <ArrowForwardIos />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default SeatNav;
