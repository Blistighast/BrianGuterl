import React from 'react';
import "./experience.css";

const Experience = () => {
    return ( 
        <div className='experience-container' id="experience">
        <div className="experience-body">
          <div className='title'>
          <h1>Experience</h1>
          <h2>
            "The only source of knowledge is experience" <br /> - Albert Einstein
          </h2>
          <div className="line" />
            <div className="experience-list">
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>Freelance Web Developer</h4>
                            <p className="career-period">Sep 2019 - Current</p>
                        </div>
                        <div className="career-info">
                            <h4>Owner</h4>
                            <p className="career-description">
                             Utilize modern designs to create websites based on client needs using Javascript, HTML, CSS, 
                             and React. Design websites with standards-compliant code, emphasizing accessibility, compatibility, 
                             and search engine optimization (SEO). Collaborate with clients to develop all graphics and copy.
                             Continue to work with clients to update and maintain their websites. Research and test new methods 
                             and technologies for use in current and future projects.
                            </p>
                        </div>
                    </span>
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>Brian Construction Services</h4>
                            <p className="career-period">Sep 2019 - Current</p>
                        </div>
                        <div className="career-info">
                            <h4>Owner</h4>
                            <p className="career-description">
                                Owner of general construction contracting business. Solicit pricing from subcontractors 
                                and create material takeoffs by analysing plans and specs to create a bid. Examine 
                                plans and specs and submit RFI's to clarify details. Create and manage schedules 
                                and submittals based on client and engineer needs and feedback. Run project meetings 
                                with foremen, architects, engineers, and subcontractors to ensure projects stay on schedule.
                                Create and submit change orders based on new developments outside the original scope of the project.
                            </p>
                        </div>
                    </span>
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>United Electric Power</h4>
                            <p className="career-period">Jan 2017 - Sep 2019</p>
                        </div>
                        <div className="career-info">
                            <h4>Application Engineer</h4>
                            <p className="career-description">
                                Managed all aspects of projects, including customer relations, pricing,
                                ordering, and coordinating delivery for electrical equipment like switchboards
                                and transformers. Coordinated with inside and outside sales, suppliers, 
                                contractors, and clients in order to maintain and meet schedules and budgets. Used 
                                AutoCad to create custom room and electrical equipment layouts 
                                for examination and approval by the NYC Advisory board. </p>
                        </div>
                    </span>
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>Kitchen Designs by Ken Kelly</h4>
                            <p className="career-period">Apr 2015 - Jan 2017</p>
                        </div>
                        <div className="career-info">
                            <h4>Kitchen Designer</h4>
                            <p className="career-description">
                                Designed high-end kitchen and living space layouts using AutoCad. 
                                Consulted with clients to establish their needs and priorities. Created design concepts in 
                                accordance with client direction. Used designs to create bills of materials. Coordinated with clients, designers, and construction, 
                                installation, and factory personnel to manage deadlines and maintain project 
                                schedule and budget.</p>
                        </div>
                    </span>
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>Cabinet Connection</h4>
                            <p className="career-period">Aug 2013 - Apr 2015</p>
                        </div>
                        <div className="career-info">
                            <h4>Kitchen Designer & Industrial Engineer</h4>
                            <p className="career-description">
                                Designed standard kitchen layouts using AutoCad and 20/20 Design
                                for commercial and residential buildings. Helped create a new system for
                                organizing job orders and capacity planning for a new expansion to the
                                warehouse and manufacturing area.</p>
                        </div>
                    </span>
                    <span className="experience-row">
                        <div className="career-title">
                            <h4>Binghamton University</h4>
                            <p className="career-period">Sep 2009 - May 2013</p>
                        </div>
                        <div className="career-info">
                            <h4> BS in Industrial & Systems Engineering</h4>
                            <p className="career-description">
                                Studied how to design and develop complex processes and systems involving 
                                people, information, equipment, financial, and material assets, with an emphasis on 
                                probabilistic methods, experiment design, and simulation. Learned the basics
                                of MatLab, C and C++ to conduct simulations for experiments and the differences between
                                development practices of Agile like Kanban and Scrum. Designed, modeled, and optimized
                                a theoretical computer chip manufacturing factory for my Senior Design Project.</p>
                        </div>
                    </span>
                </div>
          </div>
        </div>
      </div>
     );
}
 
export default Experience;