import React from "react";
import MovieCard from "./MovieCard";
import Data from "../data.json";
import Banners from "./Banners";
import NavBar from "./NavBar";
import Footer from "./Footer";
const MoviesSec = () => {
  const { data } = Data;
  console.log(data);
  return (
    <>
      <NavBar />

      <Banners />
      <div className="container">
        <div className="movie-sec">
          <h1 className="heading">Recommended Movies</h1>
          <div className="d-flex flex-wrap gap-15p">
            {data.map((list) => (
              <MovieCard key={list.id} data={list} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoviesSec;
