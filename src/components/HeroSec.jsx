import React from "react";

import NavBar from "./NavBar";
import Coaching from "./Coaching";
import Stats from "./Stats";
import CohortSection from "./CohortSection";
import Testimonial from "./Testimonial";
import BookSession from "./BookSession";
import Footer from "./Footer";

import mckinseyLogo from "../assets/mckinsey.avif";
import bcgLogo from "../assets/bcg.avif";
import bainLogo from "../assets/bain.avif";
import meeting from "../assets/meeting.png";
import peers from "../assets/peers.png";
import self from "../assets/self.png";

import "../styles/HeroSec.css";
export default function HeroSection() {
  return (
    <>
      <div className="header-container">
        <NavBar />
      </div>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Making your <span className="highlight">consulting</span> dream
            possible.
          </h1>
          <p>
            Elevate your consulting preparation. Learn from McKinsey, BCG and
            Bain consultants to set you on the path to success
          </p>
        </div>

        <div className="hero-logos">
          <img src={mckinseyLogo} alt="McKinsey & Company" />
          <img src={bcgLogo} alt="BCG" />
          <img src={bainLogo} alt="Bain & Company" />
        </div>

        <div className="hero-cta">
          <div className="cta-card">
            <img src={meeting} alt="" />
            <h3>1:1 Coaching Program</h3>
            <p>Tailored 1:1 program for personalized preparation</p>
          </div>
          <div className="cta-card">
            <img src={peers} alt="" />

            <h3>Consulting Cohort 101</h3>
            <p>Consulting foundations with global like-minded peers</p>
          </div>
          <div className="cta-card">
            <img src={self} alt="" />

            <h3>CaseBuddy</h3>
            <p>Self-practice cases at your own pace</p>
          </div>
        </div>
      </section>
      <Coaching />
      <Stats />
      <CohortSection />
      <Testimonial />
      <BookSession />
      <Footer />
    </>
  );
}
