import React from "react";
import "./MovieCard.css";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMovie } from "../Slicer/TicketSlicer";
const MovieCard = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <div className="movie-card" onClick={()=>dispatch(changeMovie(data.title))}>
      <Link to={`/bookmyshow/book/${data.title}`}>
        <div className="movie-img">
          <img src={data.img} alt={data.title} />
          <div className="movie-rating">
            <Star sx={{ color: "#DC334B" }} />
            <p>{data.rating}/10</p>
            <p> {data.votes}K Votes</p>
          </div>
        </div>
        <div className="movies-details">
          <p>{data.title}</p>
          <p>{data.genre}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
