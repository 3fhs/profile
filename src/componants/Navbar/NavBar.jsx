import React, { useState } from "react";
import "./NavBar.css";
import folder from "../../image/folder.webp";
import { Link } from "react-scroll";
import logo from '../../image/mohamedflogo.png';

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
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projectes"
            spy={true}
            smooth={true}
            duration={500}
            className="menu"
          >
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
