import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import HeroImg from "../../../images/hero.jpg";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Call us</p>
        <p>071 563 4345</p>
        <p>Major Subjects</p>
        <p>Physical Sciences and Mathematics</p>
        <Link
          className="button_hero"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          View Classes
        </Link>
      </div>
    </div>
  );
};

export default Hero;
