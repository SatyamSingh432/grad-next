import React from "react";
import "../styles/Stats.css";

const stats = [
  {
    value: "1K+",
    description: "community of aspiring consultants",
  },
  {
    value: "67%",
    description:
      "of candidates who have completed the program have received an offer",
  },
  {
    value: "13+",
    description: "countries represented among candidates",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      {stats.map((item, index) => (
        <div className="stat-box" key={index}>
          <h2 className="stat-value">{item.value}</h2>
          <p className="stat-description">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
