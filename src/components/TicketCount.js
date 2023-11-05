import React, { useState } from "react";
import "./TicketCount.css";
import { useDispatch, useSelector } from "react-redux";
import { countSeat, toggleSeat } from "../Slicer/TicketSlicer";
const TicketCount = () => {
  const [sCount, setCount] = useState(2);
  // const countActive = false;
  const dispatch = useDispatch();
  const { seatActive } = useSelector((store) => store.ticketbook);
  console.log(seatActive);
  function handleSelect() {
    dispatch(countSeat(sCount));
    dispatch(toggleSeat());
  }
  return (
    <div className={`${seatActive ? "d-block" : "d-none"}`}>
      <div className="ticket-count">
        <div className="count-card">
          <p>How many seats?</p>
          <img className="count-img" src="/assets/count.png" alt="count" />
          <div className="d-flex gap-15p">
            <div
              className={`${sCount === 1 ? "num-active" : "num"} `}
              onClick={() => setCount(1)}
            >
              1
            </div>
            <div
              className={`${sCount === 2 ? "num-active" : "num"} `}
              onClick={() => setCount(2)}
            >
              2
            </div>
            <div
              className={`${sCount === 3 ? "num-active" : "num"} `}
              onClick={() => setCount(3)}
            >
              3
            </div>
            <div
              className={`${sCount === 4 ? "num-active" : "num"} `}
              onClick={() => setCount(4)}
            >
              4
            </div>
            <div
              className={`${sCount === 5 ? "num-active" : "num"} `}
              onClick={() => setCount(5)}
            >
              5
            </div>
            <div
              className={`${sCount === 6 ? "num-active" : "num"} `}
              onClick={() => setCount(6)}
            >
              6
            </div>
            <div
              className={`${sCount === 7 ? "num-active" : "num"} `}
              onClick={() => setCount(7)}
            >
              7
            </div>
            <div
              className={`${sCount === 8 ? "num-active" : "num"} `}
              onClick={() => setCount(8)}
            >
              8
            </div>
            <div
              className={`${sCount === 9 ? "num-active" : "num"} `}
              onClick={() => setCount(9)}
            >
              9
            </div>
            <div
              className={`${sCount === 10 ? "num-active" : "num"} `}
              onClick={() => setCount(10)}
            >
              10
            </div>
          </div>
          <div className="seat-available d-flex gap-15p">
            <div>
              <p className="s-type">ELITE</p>
              <p className="s-price">Rs.179.00</p>
              <p className="s-avail">Available</p>
            </div>
            <div>
              <p className="s-type">BUDGET</p>
              <p className="s-price">Rs.60.00</p>
              <p className="s-avail">Almost Full</p>
            </div>
          </div>
          <button className="count-btn" onClick={handleSelect}>
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCount;
