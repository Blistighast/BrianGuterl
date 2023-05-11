import React from "react";
import Title from "./Title";
import arrChunker from "../../utils/arrChunker";
import "./projects.css";

const projects = [
  {
    name: "smite-sage",
    url: "https://www.smitesage.com/",
    pic: "./img/smitesage.png",
  },
  {
    name: "game-exchange",
    url: "https://game-exchange.brianguterl.com/",
    pic: "./img/game-exchange.png",
  },
  {
    name: "greenit",
    url: "https://greenit.brianguterl.com/",
    pic: "./img/greenit.png",
  },
  {
    name: "harkin",
    url: "https://www.harkin.io/",
    pic: "./img/harkin.png",
  },
  {
    name: "restaurantmenu",
    url: "https://restaurant.brianguterl.com/",
    pic: "./img/restaurantmenu.png",
  },
  {
    name: "calculator",
    url: "https://calculator-eight-gilt.vercel.app/",
    pic: "./img/calculator.png",
  },
  {
    name: "tip-calculator",
    url: "https://tip-calculator-nu.vercel.app/",
    pic: "./img/Tip-Calc.png",
  },
  {
    name: "project-planner",
    url: "https://project-planner-7327b.web.app/",
    pic: "./img/project-planner.png",
  },
  {
    name: "learning-log",
    url: "https://brians-learning-log.herokuapp.com/",
    pic: "./img/LearningLog.png",
  },
  {
    name: "reading-list",
    url: "https://brian-reading-list.herokuapp.com/",
    pic: "./img/ReadingList.png",
  },
  {
    name: "movie-rentals",
    url: "https://mockmovierental.herokuapp.com/Movies",
    pic: "./img/MovieRentals.png",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-body">
        <Title
          title="Projects"
          quote="A journey of a thousand miles begins with a single step. So just take it step by step"
          quotee="Waka"
          source="Okami"
        />
        <div className="projects-grid">
          {arrChunker(projects, 2).map((row, i) => (
            <div className="projects-row" key={i}>
              {row.map((project) => (
                <a href={project.url} key={project.name}>
                  <img
                    src={project.pic}
                    alt={project.name}
                    className="project-link-pic"
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
