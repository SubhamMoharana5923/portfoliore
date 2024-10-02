import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <img src={profile_img} alt="" />
      <h1><span>I am Subham Moharana</span>, Web Developer based in Odisha .</h1>
      <p>
      Have more than 2 years of experience in frontend and backend, working as a full-stack developer.
       </p>
      <div className="hero-action">
        <div className="hero-connect">Conect With me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
