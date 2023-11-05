import React from "react";
import SeatNav from "./SeatNav";
import SeatView from "./SeatView";
import TicketCount from "./TicketCount";

const SeatLayout = () => {
  return (
    <>
      <TicketCount />
      <SeatNav />
      <div className="seat-layout-bg">
        <SeatView />
      </div>
    </>
  );
};

export default SeatLayout;
