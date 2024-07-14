import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero_img.jpg";
import { PiHandWaving } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <PiHandWaving className="w-20 h-20" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="hero-right">
      <img src={hero_img} alt="Hero Image" className="h-[530px] w-[430px] object-cover border-none rounded-3xl" />

      </div>
    </div>
  );
};

export default Hero;
