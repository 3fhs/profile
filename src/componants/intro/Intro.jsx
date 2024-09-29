import React from "react";
import "./Intro.css";
import bag from "../../image/bag.webp";
import logo from "../../image/mhdlogo.webp";

const Intro = () => {

  const clickOpenPdf = () => {
    const urlGoogleDrive = "https://drive.google.com/file/d/1TLJ-FH0wYL0FVmBYdXnqGuEa-eOZEqNX/view?usp=drive_link";
    window.open(urlGoogleDrive, '_blank')
  }

  return (
    <section id="intro">
      <div className="intro-conainer">
        <div className="intro-info">
          <span className="hello">hello there,</span>
          <div className="rotate"><img src={logo} alt="my logo" className="logo-head"/></div>
          <span className="intro-text">
            i'm <span className="name">Mohamed Abdelghany</span>
            <br />
            Front-end Developer
          </span>
          <p className="intro-p">
            This is my website. I can design websites and have skills in HTML, CSS, Bootstrap, JavaScript, React.js, Redux, Redux Toolkit, and Tailwind CSS. These are the skills I use to build and design interfaces.
          </p>
            <button className="btn" onClick={clickOpenPdf}>
              <img src={bag} alt="bag" className="bag"></img> MY CV
            </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
