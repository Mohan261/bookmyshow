import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../Slicer/TicketSlicer";

const SeatComp = ({ seat, seatId }) => {
  const dispatch = useDispatch();
  const { seatsBooked } = useSelector((store) => store.ticketbook);
  return (
    <>
      {seat === 0 ? (
        <div className="e-seat"></div>
      ) : (
        <div
          className={`${seatsBooked.includes(seatId) ? "seat-active" : "seat"}`}
          onClick={() => dispatch(addSeat(seatId))}
        >
          {seat}
        </div>
      )}
    </>
  );
};

export default SeatComp;
