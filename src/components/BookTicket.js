import React from "react";
import "./BookTicket.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const BookTicket = () => {
  return (
    <>
      <div className="book-sec">
        <div className="container">
          <h2 className="movie-title">Irugapatru-Tamil</h2>
          <div className="d-flex pad-top-15p">
            <div className="info-box margin-right-15p">U</div>
            <div className="genre margin-right-15p">DRAMA</div>
            <div className="genre margin-right-15p">ROMANTIC</div>
          </div>
        </div>
      </div>
      <div className="movie-dates">
        <div className="container d-flex">
          <ArrowBackIosIcon />
          <div className="dates d-flex">
            <div className="date d-flex flex-dir">
              <p className="day">MON</p>
              <p className="d-date">22</p>
              <p className="month">OCT</p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default BookTicket;
