import React from "react";
import { Outlet } from "react-router-dom";
import MoviesSec from "./MoviesSec";

const Bookmyshow = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Bookmyshow;
