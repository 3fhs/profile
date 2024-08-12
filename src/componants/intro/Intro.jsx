import React from "react";
import "./Intro.css";
// import ballon1 from "../../image/ballon1.png";
import bag from "../../image/bag.webp";

const Intro = () => {
  return (
    <section id="intro">
      {/* <img className="bg-head" src={ballon1} alt="pallon1" /> */}
      <div className="intro-conainer">
        <div className="intro-info" style={{ maxWidth: "700px" }}>
          <span className="hello">hello there,</span>
          <span className="intro-text">
            i'm <span className="name">mohamed abd el ghany</span>
            <br />
            front end developer
          </span>
          <p className="intro-p">
            this is my wep site, i can make design wep site, skills html, css,
            bootstrap, js, react js, redux, redux tool-kit
          </p>
          <a
            href="https://drive.google.com/file/d/1TLJ-FH0wYL0FVmBYdXnqGuEa-eOZEqNX/view?usp=drive_link"
            download
          >
            <button className="btn">
              <img src={bag} alt="bag" className="bag"></img>hire me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
