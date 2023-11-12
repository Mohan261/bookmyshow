import React from "react";
import ShowItem from "./ShowItem";
import Data from "../data.json";
import { useParams } from "react-router-dom";
const Shows = () => {
  const { data } = Data;
  const { id } = useParams();
  let movie = data.find((list) => id === list.title);
  console.log(movie);
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
          {movie.theatersList.map((list) => (
            <ShowItem key={list.theaterId} data={list} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;
