import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="profile">
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
            I am an engineer with 5 years of industrial engineering experience. I also have experience with 
            programming and am seeking a career opportunity that will enable me to demonstrate my skillset.
            While pursuing my degree in Industrial and Systems Engineering, I gained experience with C, C++ and Matlab. 
            While working in the industrial engineering field, I realized my interest in pursuing programming as a 
            career.  I have further developed my programming skills by working with friends on web development and my 
            own personal projects. This further ignited my interest and passion for programming! I continue to hone 
            my skillset and work to learn new programming techniques, while focusing on front-end development. 
            Below you can view a few of my “passion projects” as well as my resume and contact information.</p>
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
      </div>
    </div>
  );
};

export default About;
