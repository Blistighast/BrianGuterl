import React from "react";
import Title from "./Title";
import "./experience.css";

const jobs = [
  {
    position: "Owner",
    company: "Freelance Web Developer",
    dates: "Sep 2019 - Current",
    description:
      "Utilize modern designs to create websites based on client needs using Javascript, HTML, CSS, and React. Design websites with standards-compliant code, emphasizing accessibility, compatibility, and search engine optimization (SEO). Collaborate with clients to develop all graphics and copy. Continue to work with clients to update and maintain their websites. Research and test new methods and technologies for use in current and future projects.",
  },
  {
    position: "Owner",
    company: "Brian Construction Services",
    dates: "Sep 2019 - Current",
    description:
      "Owner of general construction contracting business. Solicit pricing from subcontractors and create material takeoffs by analysing plans and specs to create a bid. Examine plans and specs and submit RFI's to clarify details. Create and manage schedules and submittals based on client and engineer needs and feedback. Run project meetings with foreman, architects, engineers, and subcontractors to ensure projects stay on schedule. Create and submit change orders based on new developments outside the original scope of the project.",
  },
  {
    position: "Application Engineer",
    company: "United Electric Power",
    dates: "Jan 2017 - Sep 2019",
    description:
      "Managed all aspects of projects, including customer relations, pricing, ordering, and coordinating delivery for electrical equipment like switchboards and transformers. Coordinated with inside and outside sales, suppliers, contractors, and clients in order to maintain and meet schedules and budgets. Used AutoCad to create custom room and electrical equipment layouts for examination and approval by the NYC Advisory board.",
  },
  {
    position: "Kitchen Designer",
    company: "Kitchen Designs by Ken Kelly",
    dates: "Apr 2015 - Jan 2017",
    description:
      "Designed high-end kitchen and living space layouts using AutoCad. Consulted with clients to establish their needs and priorities. Created design concepts in accordance with client direction. Used designs to create bills of materials. Coordinated with clients, designers, and construction, installation, and factory personnel to manage deadlines and maintain project schedule and budget.",
  },
  {
    position: "Industrial Engineer & Kitchen Designer",
    company: "Cabinet Connection",
    dates: "Aug 2013 - Apr 2015",
    description:
      "Designed standard kitchen layouts using AutoCad and 20/20 Design for commercial and residential buildings. Helped create a new system for organizing job orders and capacity planning for a new expansion to the warehouse and manufacturing area.",
  },
  {
    position: "BS in Industrial & Systems Engineering",
    company: "Binghamton University",
    dates: "Sep 2009 - May 2013",
    description:
      "Studied how to design and develop complex processes and systems involving people, information, equipment, financial, and material assets, with an emphasis on probabilistic methods, experiment design, and simulation. Learned the basics of MatLab, C and C++ to conduct simulations for experiments and the differences between development practices of Agile like Kanban and Scrum. Designed, modeled, and optimized a theoretical computer chip manufacturing factory for my Senior Design Project.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <div className="experience-body">
        <Title
          title="Experience"
          quote="The only source of knowledge is experience"
          quotee="Albert Einstein"
        />
        <div className="experience-list">
          {jobs.map((job, i) => {
            return (
              <span className="experience-row" key={i}>
                <div className="career-title">
                  <h4>{job.company}</h4>
                  <p className="career-period">{job.dates}</p>
                </div>
                <div className="career-info">
                  <h4>{job.position}</h4>
                  <p className="career-description">{job.description}</p>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
