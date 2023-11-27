import React, { useState } from "react";
import "./Banners.css";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
const Banners = () => {
  const [prev, setPrev] = useState(1);
  const [curr, setCurr] = useState(2);
  const [next, setnext] = useState(3);
useEffect(() => {
  let slide= setInterval(handleNext,5000)

  return () => {
    clearInterval(slide);
  }
}, [prev],[curr],[next])

  function handlePrev() {
    if (prev === 1) {
      setPrev(4);
      setCurr(1);
      setnext(2);
    } else if (curr === 1) {
      setPrev(3);
      setCurr(4);
      setnext(1);
    } else if (next === 1) {
      setPrev(prev - 1);
      setCurr(curr - 1);
      setnext(4);
    } else {
      setCurr(curr - 1);
      setPrev(prev - 1);
      setnext(next - 1);
    }
    console.log(prev, curr, next);
  }
  function handleNext() {
    if (next === 4) {
      setCurr(4);
      setPrev(3);
      setnext(1);
    } else if (curr === 4) {
      setPrev(4);
      setCurr(1);
      setnext(2);
    } else if (prev === 4) {
      setPrev(1);
      setCurr(2);
      setnext(3);
    } else {
      setCurr(curr + 1);
      setPrev(prev + 1);
      setnext(next + 1);
    }
    console.log(prev, curr, next);
  }
  return (
    <div className="banner-sec">
      <div className="container">
        <div className={`slide`}>
          <img
            src="./assets/banner-1.jpeg"
            alt="banner-1"
            className={
              curr === 1
                ? "center"
                : prev === 1
                ? "prev"
                : next === 1
                ? "next"
                : "ban"
            }
          />
          <img
            src="./assets/banner-2.jpeg"
            alt="banner-1"
            className={
              curr === 2
                ? "center"
                : prev === 2
                ? "prev"
                : next === 2
                ? "next"
                : "ban"
            }
          />
          <img
            src="./assets/banner-3.jpeg"
            alt="banner-1"
            className={
              curr === 3
                ? "center"
                : prev === 3
                ? "prev"
                : next === 3
                ? "next"
                : "ban"
            }
          />
          <img
            src="./assets/banner-4.jpeg"
            alt="banner-1"
            className={
              curr === 4
                ? "center"
                : prev === 4
                ? "prev"
                : next === 4
                ? "next"
                : "ban"
            }
          />
          <div className="indicators">
            <div className={`${curr === 1 ? "active" : "indicate"}`}></div>
            <div className={`${curr === 2 ? "active" : "indicate"}`}></div>
            <div className={`${curr === 3 ? "active" : "indicate"}`}></div>
            <div className={`${curr === 4 ? "active" : "indicate"}`}></div>
          </div>
        </div>
      </div>
      <button className="pre-btn" onClick={handlePrev}>
        <ArrowBackIos />
      </button>
      <button className="next-btn" onClick={handleNext}>
        <ArrowForwardIos />
      </button>
    </div>
  );
};

export default Banners;
