import React from "react";
import ShowItem from "./ShowItem";
const Shows = () => {
  return (
    <div className="shows-sec">
      <div className="container">
        <div className="avail-shows">
          <div className="attributes d-flex">
            <div className="info d-flex">
              <div className="circle green"></div>
              <p className="p-1">AVAILABLE</p>
              <div className="circle red"></div>
              <p className="p-1">FAST FILLING</p>
              <div className="subs">LAN</div>
              <p className="p-1">SUBTITLES LANGUAGE</p>
            </div>
          </div>
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
        </div>
      </div>
    </div>
  );
};

export default Shows;
