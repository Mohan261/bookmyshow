import React from "react";
import PaymentSec from "./PaymentSec";
import "./Payment.css";
import Success from "./Success";
import { useSelector } from "react-redux";
const Payment = () => {
  const {paySuccess}=useSelector((store)=>store.ticketbook);
  return (
    <div className="payment">
      <div className="container d-flex gap-15p">
        <div className="add-ons">{paySuccess&&<Success/>}</div>
        {paySuccess?"":<PaymentSec />}
      </div>
    </div>
  );
};

export default Payment;
