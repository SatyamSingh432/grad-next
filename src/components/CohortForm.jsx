import { useState } from "react";
import { useNavigate } from "react-router";

import "../styles/CohortForm.css";

const CohortForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Submitted:", formData);
    navigate("/");
    setTimeout(() => {
      alert("Form Submitted");
    }, 1000);
  };

  return (
    <div className="form-container-main">
      <div className="form-container">
        <div className="cohort-close-form">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            X
          </button>
        </div>
        <h2 className="cohort-form-heading">Contact Form</h2>

        <form onSubmit={handleSubmit} className="cohort-form">
          <label htmlFor="name" className="cohort-form-label">
            Name
          </label>
          <input
            className="cohort-form-input"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="cohort-form-label">
            Email
          </label>
          <input
            className="cohort-form-input"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone" className="cohort-form-label">
            Mobile Number
          </label>
          <input
            className="cohort-form-input"
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button className="cohort-form-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div />
    </div>
  );
};

export default CohortForm;
