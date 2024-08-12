import React from "react";
import "./Skills.css";
import html from "../../image/html.png";
import css from "../../image/css.webp";
import js from "../../image/javascript.webp";
import bootstrap from "../../image/bootstrap.png";
import react from "../../image/react.png";

function Skills() {
  return (
    <section id="skills">
      <div className="head-section">
        <h2>Skills</h2>
        <p>
          I can design the interface of websites. I have learned a lot of skills
          and I am still learning until I gain a lot of experience, and these
          are some of the skills
        </p>
      </div>
      <div className="section-content">
        <div className="card">
          <div className="cart-text">
            <img src={html} alt="it is skills" />
            <h3>HTML5</h3>
          </div>
          <p>HTML stands for Hyper Text Markup Language</p>
        </div>
        <div className="card">
          <div className="cart-text">
            <img src={css} alt="it is skills" />

            <h3>CSS</h3>
          </div>
          <p>CSS stands for Cascading Style Sheets</p>
        </div>
        <div className="card">
          <div className="cart-text">
            <img src={js} alt="it is skills" />
            <h3>JavaScript</h3>
          </div>
          <p>JavaScript Can Change HTML Styles (CSS)</p>
        </div>
        <div className="card">
          <div className="cart-text">
            <img src={react} alt="it is skills" />

            <h3>React JS</h3>
          </div>
          <p>React is a JavaScript library for building user interfaces</p>
        </div>
        <div className="card">
          <div className="cart-text">
            <img src={bootstrap} alt="it is skills" />

            <h3>Bootstrap</h3>
          </div>
          <p>
            Bootstrap is a free front-end framework for faster and easier web
            development
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
