import React from "react";
import "./Intro.css";
import bag from "../../image/bag.webp";
import logo from "../../image/mohamedflogo.png";

const Intro = () => {

  const clickOpenPdf = () => {
    const urlGoogleDrive = "https://drive.google.com/file/d/1C3FflWo6tYO1FI3PHHXpy9y5YaB6-VUi/view?usp=sharing";
    window.open(urlGoogleDrive, '_blank')
  }

  return (
    <section className="sectionx" id="intro">
      <div className="intro-conainer">
        <div className="intro-info">
          <div className="rotate">
            <img src={logo} alt="my logo" className="logo-head"/>
            <span className="intro-text">
              <span className="hello">hello there , </span>
              <span className="name">my name is Mohamed Abd elghany</span>
              <br />
              <span style={{display:"flex", fontSize:"20px", alignItems:"center", justifyContent:"center", marginTop: "20px"}}>Front end Developer</span>
            </span>
          </div>

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
