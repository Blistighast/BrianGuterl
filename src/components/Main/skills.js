import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as star1 } from "@fortawesome/free-solid-svg-icons";
import { faStar as star2 } from "@fortawesome/free-regular-svg-icons";

const solidStar = <FontAwesomeIcon icon={star1} className="solidStar" />;
const emptyStar = <FontAwesomeIcon icon={star2} className="emptyStar" />;

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
    <body className="skills-body">
      <div className="title">
        <h1>Skills</h1>
        <h2>
          "...what you were made as wasn't what you had to be or what you might become." 
          <br /> - Terry Pratchett,{" "}
          <i>The Fifth Elephant</i>
        </h2>
        <div className="line" />
      </div>
      <ul key={"skills"} className="skills">
        <li className="ability">
          <span className="ability-title">Javascript</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">React ES6</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">HTML</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Project Management</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">CSS</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Redux</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">SQL</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Git</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Bootstrap</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Materialize</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Python</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">Django</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">MySQL</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">MongoDB</span>
          <span className="stars-span">
            {solidStar}
            {solidStar}
            {solidStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">C++</span>
          <span className="stars-span">
            {solidStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
        <li className="ability">
          <span className="ability-title">C</span>
          <span className="stars-span">
            {solidStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </span>
        </li>
      </ul>
      </body>
    </div>
  );
};

export default Skills;
