import React from "react";
import "./About.css";

import AboutBox from "./AboutBox";
import MySvgComponent from "./LogoAnimation";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <MySvgComponent />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              After I dropped out(getting out off from my parents).I was
              propelled by apassion for innovation and a vision for a greater
              world, knowing I could make a massive impact if I stayed true to
              that mission. This bold decision marked the beginning of an
              extraordinary career in technology and philanthropy.
              <br />
              <br />
              I am currently acting as the CEO of Persist Ventures and President
              Of Systemic Altrusim.My expertise is within 1st principles
              thinking,growth hacking and leading leaders.My approach is a
              consistent attempt to blend entrepreneurial acumen with a deep
              commmitment to build on what matters for the world at large.
              <br />
              <br />
              My long term goal is to create the most efficient and effective
              charity in the world and Persist Ventures acts as a PBO (Public
              Benefit Organization) that aligns with the world of venture
              capital.
              <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="about__list">
              <li>Azure Devops</li>
              <li>MongoDB</li>
              <li>Prompt Engineering</li>
              <li>Swaggger API</li>
              <li>Kubernetes</li>
              <li>Artificial Intelligence</li>
              <li>Docker</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
