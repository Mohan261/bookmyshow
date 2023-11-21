import React from "react";
import SeatComp from "./SeatComp";
import screenImg from "../assets/screen.png";
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
          <p>
            {list.seatType}-Rs.{list.seatPrice}
          </p>
          <table>
            <tbody>
              {list.seat.map((list) => (
                <tr className="s-row" key={list.rowId}>
                  <td>{list.rowId}</td>
                  <td className="d-flex row">
                    {list.rowNo.map((list) => (
                      <SeatComp
                        seat={list.seatNo}
                        seatId={list.seatId}
                        key={list.seatId}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className="screen">
        <img src={screenImg} alt="screen" />
        <p className="screen-text">All eyes this way please!</p>
      </div>
    </div>
  );
};

export default SeatView;
