import React from "react";
import { Link } from "react-scroll"
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
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
            offset={-40}
            duration= {500}
        >Skills</Link>
        <Link
            activeClass="active"
            className="nav-item"
            to="experience"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
        >Experience</Link>
        <Link
            className="nav-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
        >Projects</Link>
        <Link
            className="nav-item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration= {500}
        >Contact</Link>
      </ul>
    </nav>
  );
};

export default SideDrawer;
