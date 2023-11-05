import React from "react";
import SeatComp from "./SeatComp";
import "./SeatView.css";
import Data from "../theater.json";
import { useSelector } from "react-redux";
const SeatView = () => {
  const { theaters } = Data;
  console.log(theaters);

  const { seatsBooked } = useSelector((store) => store.ticketbook);
  console.log(seatsBooked);
  return (
    <div className="seat-view">
      {theaters.seatTypes.map((list) => (
        <div key={list.seatType}>
          <p>{list.seatType}</p>
          <table>
            <tbody>
              {list.seat.map((list) => (
                <tr className="s-row" key={list.rowId}>
                  <td>{list.rowId}</td>
                  <td className="d-flex row">
                    {list.rowNo.map((list) => (
                      <SeatComp seat={list.seatNo} key={list.seatId} />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className="screen">
        <img src="/assets/screen.png" alt="screen" />
        <p>All eyes this way please!</p>
      </div>
    </div>
  );
};

export default SeatView;
