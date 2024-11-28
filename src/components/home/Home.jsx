import React from "react";
import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="home__name">
          <div className="animate-character">Hey! It's Jack.</div>
          <h1 className="animate-paragraph">
            I <span></span>
            <span>
              am <span></span>
            </span>
            <span>
              a <span></span>
            </span>
            <span>
              dynamic <span></span>
            </span>
            <span>
              entrepreneur, <span></span>
            </span>
            <span>dreamer,</span>
            <span>
              and <span></span>
            </span>
            <span>
              technologist <span></span>
            </span>
            <span>
              known <span></span>
            </span>
            <span>
              for <span></span>
            </span>
            <span>
              pioneering <span></span>
            </span>
            <span>
              the <span></span>
            </span>
            <span>
              first <span></span>
            </span>
            <span>
              PayPal <span></span>
            </span>
            <span>
              to <span></span>
            </span>
            <span>
              Ethereum <span></span>
            </span>
            <span>Exchange.</span>
          </h1>
        </div>
        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
