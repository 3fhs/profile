import React from "react";
import "./Intro.css";
import bag from "../../image/bag.webp";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-conainer">
        <div className="intro-info" style={{ maxWidth: "700px" }}>
          <span className="hello">hello there,</span>
          <span className="intro-text">
            i'm <span className="name">Mohamed Abdelghany</span>
            <br />
            Front-end Developer
          </span>
          <p className="intro-p">
            This is my website. I can design websites and have skills in HTML,
            CSS, Bootstrap, JavaScript, React.js, Redux, and Redux Toolkit.
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
