import React from "react";
import "./DateItem.css"
import { useDispatch, useSelector } from "react-redux";
import { ChangeDate } from "../Slicer/TicketSlicer";
const DateItem = ({ data }) => {
  let dateStr = data.split(" ");
  const {bookDate}=useSelector((store)=>store.ticketbook);
  function handleClick(setdate){
    dispatch(ChangeDate(setdate));
  }
  console.log(dateStr[2]);
  const dispatch =useDispatch();
  return (
    <div className={`${bookDate==dateStr[2]?"date-active":"date"} d-flex flex-dir`} onClick={()=>handleClick(dateStr[2])}>
      <p className="day">{dateStr[0].toLocaleUpperCase()}</p>
      <p className="d-date">{dateStr[2]}</p>
      <p className="month">{dateStr[1].toLocaleUpperCase()}</p>
    </div>
  );
};

export default DateItem;
