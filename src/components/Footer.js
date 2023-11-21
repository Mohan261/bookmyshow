import React from "react";
import "./Footer.css";
import logo from "../assets/hut.svg";
import blogo from "../assets/bookmyshow-logo.svg";
import icon1 from "../assets/call-center.svg";
import icon2 from "../assets/tickets-ticket.svg";
import icon3 from "../assets/newsletter.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container ">
          <div className="footer-top-inside d-flex justify-content-space-between">
            <div className="footer-t-l d-flex gap-15p align-center">
              <div>
                <img src={logo} alt="tent" />
              </div>
              <div className="footer-top-text-1">List your Show</div>
              <div className="footer-top-text-2">
                Got a show, event, activity or a great experience? Partner with
                us & get listed on BookMyShow
              </div>
            </div>
            <div className="footer-t-r ">
              <button className="btn-contact">Contact today!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-icons">
        <div className="container">
          <div className="icon-call">
            <div className="icon">
              <img src={icon1} alt="call-center" />
            </div>
            <p className="icon-p">24/7 CUSTOMER CARE</p>
          </div>
          <div className="icon-call">
            <div className="icon">
              <img src={icon2} alt="tickets" />
            </div>
            <p className="icon-p">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="icon-call">
            <div className="icon">
              <img src={icon3} alt="newsletter" />
            </div>
            <p className="icon-p">SUBCRIBE TO NEWS LETTER</p>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="container">
          <div className="links-container">
            <p className="links-title">MOVIES BY GENRE</p>
            <ul className="links-list">
              <li>Drama Movies</li>
              <li>|</li>
              <li>Action Movies</li>
              <li>|</li>
              <li>Comedy Movies</li>
              <li>|</li>
              <li>Thriller Movies</li>
              <li>|</li>
              <li>Adventure Movies</li>
              <li>|</li>
              <li>Romantic Movies</li>
              <li>|</li>
              <li>Crime Movies</li>
              <li>|</li>
              <li>Animation Movies</li>
              <li>|</li>
              <li>Fantasy Movies</li>
              <li>|</li>
              <li>Horror Movies</li>
            </ul>

            <p className="links-title">MOVIES BY LANGUAGE</p>
            <ul className="links-list">
              <li>Movies in Tamil</li>
              <li>|</li>
              <li>Movies in English</li>
              <li>|</li>
              <li>Movies in Hindi</li>
              <li>|</li>
              <li>Movies in Malayalam</li>
              <li>|</li>
              <li>Movies in Telugu</li>
              <li>|</li>
              <li>Movies in Tulu</li>
              <li>|</li>
              <li>Movies in Kanada</li>
              <li>|</li>
              <li>Movies in Japanese</li>
              <li>|</li>
              <li>Movies in French</li>
              <li>|</li>
              <li>Movies in Chattisgahari</li>
            </ul>

            <p className="links-title">SPORTS EVENTS IN CHENNAI</p>
            <ul className="links-list">
              <li>Football</li>
              <li>|</li>
              <li>Running</li>
              <li>|</li>
              <li>Online Games</li>
              <li>|</li>
              <li>E Sports</li>
              <li>|</li>
              <li>Chess</li>
              <li>|</li>
              <li>Athletics</li>
              <li>|</li>
              <li>Archery</li>
              <li>|</li>
              <li>Baseball</li>
              <li>|</li>
              <li>Badminton</li>
              <li>|</li>
              <li>Cycling</li>
            </ul>
            <p className="links-title">EVENTS IN TOP CITIES</p>
            <ul className="links-list">
              <li>Events in Mumbai</li>
              <li>|</li>
              <li>Events in Chennai</li>
              <li>|</li>
              <li>Events in Delhi-NCR</li>
              <li>|</li>
              <li>Events in Bengaluru</li>
              <li>|</li>
              <li>Events in Hyderabad</li>
              <li>|</li>
              <li>Events in Pune</li>
              <li>|</li>
              <li>Events in Ahemedabad</li>
              <li>|</li>
              <li>Events in Kolkata</li>
              <li>|</li>
              <li>Events in Kochi</li>
            </ul>
            <p className="links-title">CINEMAS IN TOP CITIES</p>
            <ul className="links-list">
              <li>cinemas in Mumbai</li>
              <li>|</li>
              <li>cinemas in Chennai</li>
              <li>|</li>
              <li>cinemas in Delhi-NCR</li>
              <li>|</li>
              <li>cinemas in Bengaluru</li>
              <li>|</li>
              <li>cinemas in Hyderabad</li>
              <li>|</li>
              <li>cinemas in Pune</li>
              <li>|</li>
              <li>cinemas in Ahemedabad</li>
              <li>|</li>
              <li>cinemas in Kolkata</li>
              <li>|</li>
              <li>cinemas in Kochi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-btm">
        <img src={blogo} alt="logo" />
      </div>
      <div className="social-icons">
        <FacebookIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
        <TwitterIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
        <InstagramIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
        <YouTubeIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
        <PinterestIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
        <LinkedInIcon sx={{ color: "#7f7f7f", fontSize: "34px" }} />
      </div>
      <div className="texts">
        <p className="copy-text">
          Copyright 2023 &copy; Bigtree Entertainment Pvt. Ltd. All Rights
          Reserved
          <br /> The content and images used on this site are copyright
          protected and copyrights vests with the respective owners. The usage
          of the content and images on this website is intended to promote the
          works and no endorsement of the artist shall be implied. Unauthorized
          use is prohibited and punishable by law.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
