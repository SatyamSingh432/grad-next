import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import "../styles/Coaching.css";

import imgOne from "../assets/01.png";
import imgTwo from "../assets/02.png";
import imgThree from "../assets/03.png";
import imgFour from "../assets/04.png";
import imgFive from "../assets/05.png";
import imgSix from "../assets/06.png";
import imgSeven from "../assets/07.png";
import imgEight from "../assets/08.png";
import imgNine from "../assets/09.png";

export default function Coaching() {
  return (
    <section className="coaching-section">
      <div className="coaching-section-left">
        <div className="text-content">
          <h2>1:1 Coaching Programs</h2>
          <p className="desc">
            Work with consultants from <em>McKinsey, BCG, and Bain</em> to
            create a personalized interview plan and preparation strategy.
          </p>
        </div>

        <div className="cta-buttons">
          <div className="cta-block">
            <p>New to the program?</p>
            <button>Book Free Discovery Call</button>
          </div>
          <div className="cta-block">
            <p>Have an interview already?</p>
            <button>Book Free Roadmap Call</button>
          </div>
        </div>
      </div>
      <div className="coaching-section-right">
        <div className="swiper-sec">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-img-sec">
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

        <p className="community">
          Join 1,000+ aspiring consultants across 13+ countries
        </p>
      </div>
    </section>
  );
}
