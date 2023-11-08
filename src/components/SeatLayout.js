import React, { useState } from "react";
import SeatNav from "./SeatNav";
import SeatView from "./SeatView";
import TicketCount from "./TicketCount";
import PriceFooter from "./PriceFooter";
import Payment from "./Payment";
import SeatTimeNav from "./SeatTimeNav";
import { useSelector } from "react-redux";

const SeatLayout = () => {
  const { payActive } = useSelector((store) => store.ticketbook);
  return (
    <>
      <TicketCount />
      <SeatNav />

      {payActive ? (
        <Payment />
      ) : (
        <>
          <SeatTimeNav />
          <div className="seat-layout-bg">
            <SeatView />
          </div>
          <PriceFooter />
        </>
      )}
    </>
  );
};

export default SeatLayout;
