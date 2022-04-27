import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as star1 } from "@fortawesome/free-solid-svg-icons";
import { faStar as star2 } from "@fortawesome/free-regular-svg-icons";
import Title from "./Title";

const solidStar = <FontAwesomeIcon icon={star1} className="solidStar" />;
const emptyStar = <FontAwesomeIcon icon={star2} className="emptyStar" />;

const skills = [
  { skill: "JavaScript", stars: 5 },
  { skill: "React", stars: 5 },
  { skill: "HTML", stars: 5 },
  { skill: "NextJS", stars: 5 },
  { skill: "Git", stars: 5 },
  { skill: "Project Management", stars: 5 },
  { skill: "CSS", stars: 4 },
  { skill: "NodeJS", stars: 4 },
  { skill: "GraphQL", stars: 4 },
  { skill: "TypeScript", stars: 4 },
  { skill: "Redux", stars: 4 },
  { skill: "SQL", stars: 4 },
  { skill: "MongoDB", stars: 4 },
  { skill: "Apollo", stars: 4 },
  { skill: "Docker", stars: 4 },
  { skill: "PostgreSQL", stars: 3 },
  { skill: "TypeORM", stars: 3 },
  { skill: "URQL", stars: 3 },
  { skill: "Express", stars: 3 },
  { skill: "Bootstrap", stars: 3 },
  { skill: "Sass", stars: 3 },
  { skill: "Materialize", stars: 3 },
  { skill: "Python", stars: 3 },
  { skill: "XML", stars: 3 },
  { skill: "Django", stars: 3 },
  { skill: "MySQL", stars: 3 },
  { skill: "C++", stars: 1 },
  { skill: "C", stars: 1 },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-body">
        <Title
          title="Skills"
          quote="...what you were made as wasn't what you had to be or what you might become."
          quotee="Terry Pratchett"
          source="The Fifth Elephant"
        />
        <ul key={"skills"} className="skills">
          {skills.map((skill) => (
            <li className="ability" key={skill.skill}>
              <span className="ability-title">{skill.skill}</span>
              <span className="stars-span">
                {Array.from({ length: skill.stars }, (_, i) => (
                  <span key={i}>{solidStar}</span>
                ))}
                {Array.from({ length: 5 - skill.stars }, (_, i) => (
                  <span key={i}>{emptyStar}</span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
