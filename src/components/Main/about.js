import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <body className="profile">
        <div className="title">
          <h1>Profile</h1>
          <h2>
          "He who laughs most, learns best." 
          <br /> - John Cleese
        </h2>
          <div className="line" />
        </div>
        <div className="row">
          <div>
            <h2>About me</h2>
            <p>
              I'm an engineer with 5 years of experience in industrial engineering and some programming 
              experience. I used C, C++, and MatLab while pursuing my Industrial and Systems Engineering 
              Degree, but didn't think to pursue programming as a career until late 2018. After talking 
              with some friends who work in web development, I decided to pick it back up and started
              some personal projects. From there I was immediately hooked in a way that didn't happen
              in college. Since then I have spent almost every day practicing and learning new programming 
              techniques in my spare time, focusing on front end development. I love building new 
              and different projects, so I made this website as a place to collect them all together.</p>
          </div>
          <div className="pic-holder">
            <img src="./img/briansuit.png" alt="me" className="about-pic" />
          </div>
          <div className="details">
            <h2>Details</h2>
            <h3>Name:</h3>
            <p>Brian Guterl</p>
            <h3>Age:</h3>
            <p>29</p>
            <h3>Location:</h3>
            <p>Queens, New York</p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default About;
