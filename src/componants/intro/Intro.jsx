import React from "react";
import "./Intro.css";
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import bag from "../../image/file-60.png";
import me from "../../image/me.jpg";

const Intro = () => {
  const clickOpenPdf = () => {
    const urlGoogleDrive = "https://docs.google.com/document/d/1cJxT28Yb7Dcg9x26vlFGC8VAT8Q9qEutZmGWv-6At_c/edit?usp=sharing";
    window.open(urlGoogleDrive, '_blank')
  }

  return (
    <section className="section-intro" id="intro">
      <div className="intro-conainer">

          <div className="intro-info">
            <div className="info-top">
              <div className="info-links">
                <div className="info-img">
                  <img src={me} alt="my logo" className="logo-head"/>
                  <div className="icons">
                    <a
                      href="https://www.facebook.com/profile.php?id=100064105302365"
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
                <button className="btn" onClick={clickOpenPdf}>
                  <img src={bag} alt="bag" className="bag"></img> CV Front End
                </button>
              </div>
              <h3>
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      'Hello there',
                      'Welcome to',
                      'My Wep Site',
                      'My name is Mohamed Abd Elghany'
                    ]}
                  />
                </h3>
            </div>

              <div className="info-text">
                <p>
                  <Typewriter
                      words={[
                        "This is my website. I can design websites and have skills in HTML, CSS, Bootstrap, JavaScript, React.js, Redux, Redux Toolkit, and Tailwind CSS. These are the skills I use to build and design interfaces.",
                      ]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                </p>
              </div>

          </div>
          
      </div>
    </section>
  );
};

export default Intro;
