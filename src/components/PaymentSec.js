import React, { useState } from "react";
import "./PaymentSec.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addCharityAmt, removeCharityAmt } from "../Slicer/TicketSlicer";
const PaymentSec = () => {
  const [exp, setExp] = useState(false);
  const dispatch = useDispatch();
  const { ticketPrice, baseAmt, taxAmt, charityAmt } = useSelector(
    (store) => store.ticketbook
  );
  return (
    <div className="booking-card">
      <div className="booking-div">
        <div className="booking">
          <h3 className="pay-title">BOOKING SUMMARY</h3>
          <div className="d-flex justify-content-space-between">
            <p>
              EL-E20,E19 <span className="ticket-no">( 2 Tickets )</span>
            </p>
            <p>Rs.{ticketPrice}</p>
          </div>
          <div className="d-flex justify-content-space-between">
            <p className="conven-text">
              <button className="accord-btn" onClick={() => setExp(!exp)}>
                {exp ? (
                  <ExpandLess sx={{ fontSize: "16px" }} />
                ) : (
                  <ExpandMore sx={{ fontSize: "16px" }} />
                )}
              </button>
              Convenience fees
            </p>
            <p>Rs.{baseAmt + taxAmt}</p>
          </div>
          <div className={`${exp ? "expand" : "d-none"}`}>
            <div className="line d-flex justify-content-space-between">
              <p>Base Amount</p>
              <p>Rs.{baseAmt}</p>
            </div>
            <div className="line d-flex justify-content-space-between">
              <p>Integrated GST (IGST) @ 18%</p>
              <p>Rs.{taxAmt}</p>
            </div>
          </div>
          <div className="d-flex justify-content-space-between sub-total">
            <p>Sub Total</p>
            <p>Rs.{ticketPrice + baseAmt + taxAmt}</p>
          </div>
          <div className="contribution d-flex justify-content-space-between">
            <div>
              Contribution to BookASmile
              <p className="contri-text">(₹1 per ticket has been added)</p>
              <p className="contri-text b-dashed">View T&C</p>
            </div>
            <p>
              Rs.{charityAmt}
              {charityAmt > 0 ? (
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeCharityAmt())}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="remove-btn"
                  onClick={() => dispatch(addCharityAmt())}
                >
                  Add
                </button>
              )}
            </p>
          </div>
          <p className="state-text">
            Your current state is
            <button className="state-btn">Tamil Nadu</button>
          </p>
        </div>
        <div className="amt-pay d-flex justify-content-space-between">
          <p>Amount Payable</p>
          <p>Rs.{ticketPrice + baseAmt + taxAmt + charityAmt}</p>
        </div>
        <div className="g-circle circle-l"></div>
        <div className="g-circle circle-r"></div>
      </div>
      <button className="proceed-btn d-flex justify-content-space-between">
        <p>TOTAL:Rs.{ticketPrice + baseAmt + taxAmt + charityAmt}</p>
        <p>PROCEED</p>
      </button>
    </div>
  );
};

export default PaymentSec;
