import React from "react";
import { useDispatch } from "react-redux";

const SeatComp = ({ seat }) => {
  const dispatch = useDispatch();
  return (
    <>
      {seat === 0 ? (
        <div className="e-seat"></div>
      ) : (
        <div className="seat" onClick={()=>dispatch(addSea)}>{seat}</div>
      )}
    </>
  );
};

export default SeatComp;
