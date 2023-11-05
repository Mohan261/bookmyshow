import React from "react";
import "./NavBar.css";
import logo from "../assets/bookmyshow-logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const nav = useNavigate();
  function handleHome() {
    nav("/*");
  }
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-top d-flex justify-content-space-between">
          <div className="right-nav d-flex justify-content-space-between">
            <div className="logo" onClick={handleHome}>
              <img src={logo} alt="logo" />
            </div>
            <input
              type="text"
              className="search-inpt"
              placeholder="Search for Movies, Events, Plays, Sports, and Activities"
            />
          </div>
          <div className="d-flex">
            <button className="dropdown">
              Chennai <ArrowDropDownIcon />
            </button>
            <button className="sign-in-btn">Sign in</button>
            <button className="dropdown">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="nav-down">
        <div className="container d-flex justify-content-space-between">
          <div className="nav-right d-flex justify-content-space-between">
            <button className="btn-nav">Movies</button>
            <button className="btn-nav">Stream</button>
            <button className="btn-nav">Events</button>
            <button className="btn-nav">Plays</button>
            <button className="btn-nav">Sports</button>
            <button className="btn-nav">Activities</button>
            <button className="btn-nav">Buzz</button>
            <button className="btn-nav">ICC World cup</button>
          </div>
          <div className="nav-left">
            <button className="btn-nav">ListYourShow</button>
            <button className="btn-nav">Corporates</button>
            <button className="btn-nav">Offers</button>
            <button className="btn-nav">Gift Cards</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
