import React from "react";
import "./BookTicket.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DateItem from "./DateItem";
import SearchIcon from "@mui/icons-material/Search";
import Shows from "./Shows";
import Data from "../data.json";

import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
const BookTicket = () => {
  let { data } = Data;
  let date = new Date();
  let dateArr = [];
  for (let i = 0; i < 5; i++) {
    dateArr.push(date.toDateString());
    date.setDate(date.getDate() + 1);
  }
  const { id } = useParams();
  console.log(id);
  let movie = data.find((list) => id === list.title);
  console.log(movie);
  return (
    <>
      <NavBar />
      <div className="book-sec">
        <div className="container">
          <h2 className="movie-title">
            {movie.title} - {movie.language}
          </h2>
          <div className="d-flex pad-top-15p">
            <div className="info-box margin-right-15p">{movie.ageRating}</div>
            {movie.genre.map((list, indx) => (
              <div className="genre margin-right-15p" key={indx}>
                {list.toLocaleUpperCase()}
              </div>
            ))}
            {/* <div className="genre margin-right-15p">ROMANTIC</div> */}
          </div>
        </div>
      </div>
      <div className="movie-dates">
        <div className="container ">
          <div className="book-nav d-flex justify-content-space-between">
            <div className="date-nav d-flex">
              <ArrowBackIosIcon />
              <div className="dates d-flex gap-15p">
                {dateArr.map((list, ind) => (
                  <DateItem key={ind} data={list} />
                ))}
              </div>
              <ArrowForwardIosIcon />
            </div>
            <div className="filters-nav d-flex">
              <div className="movie-ver">TAMIL-2D</div>
              <div className="movie-ver">TAMIL-2D</div>
              <div className="movie-ver">TAMIL-2D</div>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <Shows />
    </>
  );
};

export default BookTicket;
