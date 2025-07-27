import React from "react";
import { useNavigate } from "react-router";

import "../styles/navBar.css";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">gradnext</div>

      <ul className="nav-links">
        <li>
          <a href="#">
            Home
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#">
            1:1 Coaching Program
            <span className="underline"></span>
          </a>
        </li>
        <li>
          <a href="#">
            Consulting Cohort 101
            <span className="underline"></span>
          </a>
        </li>
        <li className="dropdown">
          Book a 45-min Session
          <span className="arrow">&#9662;</span>
          <ul className="dropdown-menu">
            <li>Mock Interview</li>
            <li>Resume Review</li>
            <li>Career Counseling</li>
          </ul>
        </li>
      </ul>

      <div className="nav-right">
        <button className="casebuddy-btn">CaseBuddy</button>

        <div className="login">
          <button
            className="login-btn"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
