import React from "react";
import LikeButton from "./../Backdrop/likeButton";
import "./contact.css";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-body">
        <Title
          title="Contact"
          quote="See first, think later, then test. But always see first. 
            Otherwise you will only see what you were expecting."
          quotee="Douglas Adams"
        />
        <div className="contacts">
          <a href="https://www.linkedin.com/in/brian-guterl-6622855b/">
            <img
              src="./img/iconfinder_linkedin.png"
              alt="linkedin-icon"
              className="icon"
            />
            <span className="link">https://linkedin.com/in/brian-guterl</span>
          </a>
          <a href="mailto:brianguterl99@gmail.com">
            <img
              src="./img/iconfinder_contact.png"
              alt="contact-icon"
              className="icon"
            />
            <span className="link">brianguterl99@gmail.com</span>
          </a>
        </div>
        <div className="line" />
        <div className="social-buttons">
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
