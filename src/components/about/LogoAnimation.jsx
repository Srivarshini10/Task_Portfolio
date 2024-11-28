import React from "react";
import "./LogoAnimation.css";

const MySvgComponent = () => {
  return (
    <>
      <svg className="snurra" width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="linGradient">
            <stop className="stopp1" offset="0" />
            <stop className="stopp2" offset="1" />
          </linearGradient>
          <linearGradient
            y2="160"
            x2="160"
            y1="40"
            x1="40"
            gradientUnits="userSpaceOnUse"
            id="gradient"
            xlinkHref="#linGradient"
          />
        </defs>
        <circle className="strecken" cx="100" cy="100" r="64" />
      </svg>
    </>
  );
};

export default MySvgComponent;
