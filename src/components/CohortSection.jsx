import React from "react";
import { FaTv } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "../styles/CohortSection.css";

export default function CohortSection() {
  return (
    <section className="cohort-section">
      <h1 className="cohort-title">Consulting Cohort 101</h1>
      <p className="cohort-subtitle">
        Join an exclusive group of driven individuals to sharpen your consulting
        fundamentals
      </p>
      <div className="cohort-swiper">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper-cohort"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div className="features">
        <div className="feature">
          <FaTv style={{ fontSize: "40px" }} />
          <p>
            Live Interactive <br />
            Sessions
          </p>
        </div>

        <div className="feature">
          <FaUserTie style={{ fontSize: "40px" }} />
          <p>
            1:1 Mentorship with MBB <br />
            Consultant
          </p>
        </div>

        <div className="feature">
          <FaHandshakeSimple style={{ fontSize: "40px" }} />
          <p>
            Network with Cohort <br />
            Members
          </p>
        </div>
      </div>

      <button className="cohort-btn">Enrol for Sep Cohort</button>
    </section>
  );
}
