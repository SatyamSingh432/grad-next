import React from "react";
import "../styles/BookSession.css";

export default function BookSession() {
  return (
    <section className="mentorship-slide">
      <div className="mentorship-content">
        <h2 className="mentorship-title">Book a 45-min session</h2>
        <p className="mentorship-subtitle">
          Kickstart your journey with a single session
        </p>

        <h3 className="mentorship-heading">Consulting Mentorship</h3>
        <p className="mentorship-description">
          Mentorship session with an MBB Consultant
        </p>

        <button className="mentorship-button">Know More</button>

        <div className="carousel-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}
