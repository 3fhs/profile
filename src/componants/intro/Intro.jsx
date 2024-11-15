import React from "react";
import "./Intro.css";
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {

  return (
    <section className="section-intro" id="intro">
      <div className="intro-conainer">

          <div className="intro-info">
            <div className="info-top">
              <h3>
                  <i className="bi bi-chat"></i>
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
              <p>
                <i className="bi bi-chat"></i>
                <Typewriter
                      words={[
                        "This is my website. I can design websites and have skills in HTML, CSS, Bootstrap, JavaScript, React.js, Redux, Redux Toolkit, and Tailwind CSS. These are the skills I use to build and design interfaces.",
                      ]}
                      loop={1}
                      cursor
                      cursorStyle="|>"
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
