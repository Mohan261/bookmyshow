import React, { useState } from "react";
import "./Banners.css";
const Banners = () => {
  const [slide, setSlide] = useState(1);
  const [next, setnext] = useState(2);
  const [prev, setPrev] = useState(4);
  function startBanner() {
    if (slide === 4) {
      setSlide(1);
    }
    if (slide < 4) {
      setSlide(slide + 1);
    }

    if (prev === 1) {
      setPrev(4);
    }
    if (prev > 1) {
      setPrev(slide - 1);
    }
    if (next === 4) {
      setnext(1);
    }
    if (next < 4) {
      setnext(slide + 1);
    }
  }
  console.log(prev, slide, next);
  return (
    <div className="banner-sec">
      <div className="container">
        <div className={`slide`}>
          <img
            src="./assets/banner-1.jpeg"
            alt="banner-1"
            className={
              slide === 1
                ? "center"
                : "" || prev === 1
                ? "prev"
                : "" || next === 1
                ? "next"
                : ""
            }
          />
          <img
            src="./assets/banner-2.jpeg"
            alt="banner-1"
            className={
              slide === 2
                ? "center"
                : "" || slide === 2
                ? "prev"
                : "" || next === 2
                ? "next"
                : ""
            }
          />
          <img
            src="./assets/banner-3.jpeg"
            alt="banner-1"
            className={
              slide === 3
                ? "center"
                : "" || prev === 3
                ? "prev"
                : "" || next === 3
                ? "next"
                : ""
            }
          />
          <img
            src="./assets/banner-4.jpeg"
            alt="banner-1"
            className={
              slide === 4
                ? "center"
                : "" || prev === 4
                ? "prev"
                : "" || next === 4
                ? "next"
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
