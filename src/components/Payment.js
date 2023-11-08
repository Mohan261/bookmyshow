import React from "react";
import PaymentSec from "./PaymentSec";
import "./Payment.css";
const Payment = () => {
  return (
    <div className="payment">
      <div className="container d-flex gap-15p">
        <div className="add-ons"></div>
        <PaymentSec />
      </div>
    </div>
  );
};

export default Payment;
