import React from "react";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import bag from "../../image/bag.webp";
import me from "../../image/me.jpg";

const Intro = () => {

  const clickOpenPdf = () => {
    const urlGoogleDrive = "https://docs.google.com/document/d/1cJxT28Yb7Dcg9x26vlFGC8VAT8Q9qEutZmGWv-6At_c/edit?usp=sharing";
    window.open(urlGoogleDrive, '_blank')
  }

  return (
    <section className="sectionx" id="intro">
      <div className="intro-conainer">
        <div className="intro-info">
          <div className="rotate">
            <div style={{
              borderBottom: '2px solid #fff',
              marginBottom:'5px'
            }}>
              <img src={me} alt="my logo" className="logo-head"/>

              <div className="icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100047980277283"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="icon face" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-abd-elghany-b6b74a281"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon linked" />
                </a>
                <a
                  href="https://github.com/3fhs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon git" />
                </a>
                <a
                  href="https://wa.me/01023853105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="icon what" />
                </a>
              </div>
            </div>


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
