import React from "react";
import mohit from "../assets/mohit.avif";
import aditi from "../assets/aditi.avif";
import bcg from "../assets/bcg-logo.avif";

import "../styles/Testimonial.css";

const testimonials = [
  {
    name: "Mohit Jain",
    image: mohit,
    companyLogo: bcg,
    quote:
      "The session was well-structured, making it easy to follow and understand. Kashish provided clear, targeted answers to each question, guiding me toward the right approach and helping me understand the rationale behind it. I feel confident that I made the right choice by choosing and paying for this session. For anyone seeking clarity in consulting, this session is exactly what I needed. I’d say I truly bet on the right horse.",
  },
  {
    name: "Aditi Sharma",
    image: aditi,
    companyLogo: bcg,
    quote:
      "Kashish helped me identify my weak points with pinpoint accuracy. The session gave me immense clarity and boosted my confidence. I really appreciated the personalized approach and direct feedback. It made all the difference in my consulting prep.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial-wrapper">
      <h2 className="testimonial-heading">Testimonials</h2>
      <p className="testimonial-subheading">
        Join the <i>club</i> who have trusted us and started their journey
      </p>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-text">
              <p>{t.quote}</p>
            </div>
            <div className="testimonial-image-section">
              <div className="person-cont">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <h3 className="testimonial-name">{t.name}</h3>
              </div>

              <img
                src={t.companyLogo}
                alt="Company Logo"
                className="company-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
