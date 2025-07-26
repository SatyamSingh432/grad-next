import React from "react";

import mckinseyLogo from "../assets/mckinsey.avif";
import bcgLogo from "../assets/bcg.avif";
import bainLogo from "../assets/bain.avif";
import "../styles/HeroSec.css";
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Making your <span className="highlight">consulting</span> dream
          possible.
        </h1>
        <p>
          Elevate your consulting preparation. Learn from McKinsey, BCG and Bain
          consultants to set you on the path to success
        </p>
      </div>

      <div className="hero-logos">
        <img src={mckinseyLogo} alt="McKinsey & Company" />
        <img src={bcgLogo} alt="BCG" />
        <img src={bainLogo} alt="Bain & Company" />
      </div>

      <div className="hero-cta">
        <div className="cta-card">
          <h3>1:1 Coaching Program</h3>
          <p>Tailored 1:1 program for personalized preparation</p>
        </div>
        <div className="cta-card">
          <h3>Consulting Cohort 101</h3>
          <p>Consulting foundations with global like-minded peers</p>
        </div>
        <div className="cta-card">
          <h3>CaseBuddy</h3>
          <p>Self-practice cases at your own pace</p>
        </div>
      </div>
    </section>
  );
}
