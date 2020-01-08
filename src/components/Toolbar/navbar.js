import React from "react";
import { Link } from "react-scroll"
import "./navbar.css";
import DrawerToggleButton from "./DrawerToggleButton";

const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <div className="nav-toggle">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <ul className="nav-items">
        <Link
            className="nav-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >About</Link>
        <Link
            className="nav-item"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Skills</Link>
        <Link
            activeClass="active"
            className="nav-item"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Experience</Link>
        <Link
            className="nav-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Projects</Link>
        <Link
            className="nav-item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
