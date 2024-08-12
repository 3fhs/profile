import React from "react";
import web from "../../image/WebDesigner.jpg";
import "./About.css";
import "../Skills/Skills.css";

function About() {
  return (
    <section id="about">
      <div className="head-section">
        <h2>About Us</h2>
      </div>
      <div className="about-count">
        <div className="about-info">
          <h3>
            My name is Mohamed Abdelghany, and I work as a front-end developer
          </h3>
          <p>
            I have extensive experience in React.js, allowing me to create
            modern, interactive, and user-friendly websites. I have successfully
            worked on various projects, including e-commerce platforms, book
            stores, and safari stores.
          </p>
          <p>
            I am committed to delivering high-quality work within agreed
            timelines, ensuring that your project meets all your expectations. I
            am always open to new projects and collaborations. Feel free to
            reach out to discuss your next web development project. You can
            contact me anytime.
          </p>
          <p>
            This version highlights your skills, the types of projects you've
            worked on, and your commitment to quality.
          </p>
        </div>
        <div className="about-cart">
          <img src={web} alt="web" style={{ width: "100%" }} />
          <div className="cart-skills">
            <div className="ex">
              <div className="cart">
                <h3>1</h3>
                <p>years experience</p>
              </div>
              <div className="cart">
                <h3>23</h3>
                <p>Project challenge</p>
              </div>
            </div>
            <div className="ex">
              <div className="cart">
                <h3>500 +</h3>
                <p>positive reviews</p>
              </div>
              <div className="cart">
                <h3> 10 </h3>
                <p>trusted students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
