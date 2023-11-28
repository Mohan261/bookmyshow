import React from "react";
import "./SeatNav.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../Slicer/TicketSlicer";
import { useNavigate } from "react-router-dom";
const SeatNav = () => {
  const { seatCount, movieName, screenName, time } = useSelector(
    (store) => store.ticketbook
  );
  const nav = useNavigate();
  const dispatch = useDispatch();
  function handleBack() {
    nav("/bookmyshow/book");
  }
  const d = new Date();
  const td = d.getDate();
  const { bookDate } = useSelector((store) => store.ticketbook);
  const d1 = new Date();
  d1.setDate(bookDate);
  const d1Str = d1.toDateString();
  const arr = d1Str.split(" ");
  return (
    <>
      <header>
        <div className="seat-nav">
          <div className="d-flex gap-15p">
            <p>{movieName}</p>
            <div className="info-box">UA</div>
          </div>
          <p>
            {screenName} |{" "}
            {td == bookDate ? <span>Today</span> : <span>{arr[0]}</span>},{" "}
            <span>{arr[2]}</span> <span>{arr[1]}</span>, {time}
          </p>
          <button className="arrow-btn">
            <ArrowBackIos sx={{ color: "#fff" }} onClick={handleBack} />
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
