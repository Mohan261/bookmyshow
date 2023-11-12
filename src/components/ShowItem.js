import React from "react";
import "./ShowItem.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import food from "../assets/food.png";
import mticket from "../assets/m-ticket.png";
import ShowTime from "./ShowTime";
const ShowItem = ({ data }) => {
  console.log(data);
  return (
    <div className="show-item d-flex">
      <div className="show-item-left d-flex">
        <div className="fav-icon">
          <FavoriteBorderIcon sx={{ fontWeight: "100", fontSize: "16px" }} />
        </div>
        <div className="location d-flex flex-dir">
          <div className="location-name d-flex gap-15p">
            <p>{data.theaterName}</p>
            <button className="info-btn">
              <InfoOutlinedIcon sx={{ fontSize: "17px" }} />
              INFO
            </button>
          </div>
          <div className="m-tickets d-flex gap-15p">
            <p className="icon-text d-flex gap-10p">
              <img src={mticket} alt="m-ticket" />
              M-Ticket
            </p>
            <p className="icon-text-1 d-flex gap-10p">
              <img src={food} alt="food" />
              Food & Beverage
            </p>
          </div>
        </div>
      </div>
      <div className="show-item-right">
        <div className="show-timing d-flex gap-15p flex-wrap">
          {data.timings.map((list) => (
            <ShowTime
              key={data.theaterId + list}
              time={list}
              id={data.theaterId + "-" + list}
            />
          ))}
        </div>
        <div className="cancel-info d-flex">
          <div className="circle yellow"></div>
          <p>Cancellation Available</p>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
