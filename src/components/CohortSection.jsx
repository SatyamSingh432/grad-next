import React from "react";
import { FaTv } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "../styles/CohortSection.css";

import imgOne from "../assets/01.png";
import imgTwo from "../assets/02.png";
import imgThree from "../assets/03.png";
import imgFour from "../assets/04.png";
import imgFive from "../assets/05.png";
import imgSix from "../assets/06.png";
import imgSeven from "../assets/07.png";
import imgEight from "../assets/08.png";
import imgNine from "../assets/09.png";

export default function CohortSection() {
  const navigate = useNavigate();

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
          <SwiperSlide>
            <img src={imgOne} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgThree} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgFour} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgFive} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgSix} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgSeven} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgEight} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgNine} />
          </SwiperSlide>
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

      <button
        className="cohort-btn"
        onClick={() => {
          navigate("/cohort");
        }}
      >
        Enrol for Sep Cohort
      </button>
    </section>
  );
}
