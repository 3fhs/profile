import React, { useState } from "react";
import "./NavBar.css";
import folder from "../../image/message-icon-png-28.png";
import { Link } from "react-scroll";
import logo from '../../image/mohamedflogo.png';
import home from '../../image/house.svg';
import about from '../../image/about-12.png';
import projectes from '../../image/it-project-icon-1.png';
import skills from '../../image/professional-skills-icon.svg';

const NavBar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <nav className="navbar">
        {/* i make a buttom to use in small screen */}
        {openBurger ? <i className="bi bi-x-lg" onClick={() => setOpenBurger(false)}></i> : <i className="bi bi-list" onClick={() => setOpenBurger(true)}></i>}
        <img src={logo} alt="my logo" className="logo"/>
        <div className="navmenu" style={{clipPath: openBurger ? "polygon(0 0, 100% 0, 100% 99%, 0 100%)" : ""}}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
            onClick={() => setOpenBurger(false)}
          >
            <img src={home} alt="home" />
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
            onClick={() => setOpenBurger(false)}
          >
            <img src={about} alt="home" />
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
            onClick={() => setOpenBurger(false)}
          >
            <img src={skills} alt="home" />
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projectes"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
            onClick={() => setOpenBurger(false)}
          >
            <img src={projectes} alt="home" />
            Projects
          </Link>
        </div>
        <button
          className="navbuttom"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={folder} alt="my cv" className="navcontact" /> Cotact Me
        </button>
    </nav>
  );
};

export default NavBar;
