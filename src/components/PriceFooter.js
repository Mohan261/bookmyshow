import React from "react";
import "./PriceFooter.css";
import { useDispatch, useSelector } from "react-redux";
import { changePayActive } from "../Slicer/TicketSlicer";
const PriceFooter = () => {
  const { ticketPrice } = useSelector((store) => store.ticketbook);
  const dispatch = useDispatch();
  return (
    <div className="price-bg">
      <button className="price-btn" onClick={() => dispatch(changePayActive())}>
        Pay Rs.{ticketPrice}
      </button>
    </div>
  );
};

export default PriceFooter;
