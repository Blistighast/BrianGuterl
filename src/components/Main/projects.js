import React from "react";
import "./projects.css"

const Projects = () => {
  return (
    <div className='projects-container' id="projects">
      <body className="projects-body">
        <div className='title'>
        <h1>Projects</h1>
        <h2>
          "A journey of a thousand miles begins with a single step. So just take it step by step" 
          <br /> - Waka,{" "}
          <i>Okami</i> 
        </h2>
        <div className="line" />
        <div className="projects-row">
          <a href="https://game-exchange.brianguterl.com/">
            <img src="./img/game-exchange.png" alt="game-exchange" className="project-link-pic" />
          </a>
          <a href="https://greenit.brianguterl.com/">
            <img src="./img/greenit.png" alt="greenit" className="project-link-pic" />
          </a>
          <a href="https://project-planner-7327b.web.app/">
            <img src="./img/ProjectPlanner.png" alt="project-planner" className="project-link-pic" />
          </a>
          <a href="https://mockmovierental.herokuapp.com/Movies">
            <img src="./img/MovieRentals.png" alt="movie-rentals" className="project-link-pic" />
          </a>
        </div>
        <div className="projects-row">
          <a href="https://brians-learning-log.herokuapp.com/">
            <img src="./img/LearningLog.png" alt="learning-log" className="project-link-pic" />
          </a>
          <a href="https://brian-reading-list.herokuapp.com/">
            <img src="./img/ReadingList.png" alt="reading-list" className="project-link-pic" />
          </a>
        </div>
        </div>
      </body>
    </div>
  );
};

export default Projects;
