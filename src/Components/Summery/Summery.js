import React from "react";
import "./Summery.css";

const Summery = () => {
  return (
    <section id="summery" data-aos="fade-right">
      <div className="summery-heading">
        <strong>My Skills</strong>
        <h2>website developer</h2>
        <h2>Product Management</h2>
        <h2>Communication</h2>
        <h2>Collaboration</h2>
        <a
          href="https://docs.google.com/document/d/1jG6Et30BsiuvY54NQxmVE522thNYl_ag/edit?usp=sharing&ouid=105305121172716761672&rtpof=true&sd=true"
          download
          className="btn-link"
        >
          {" "}
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summery-details" data-aos="fade-left">
        <p>
          Html, Css, Bootstrap, java script, React js, TailwindCss, ReactNative, wordpress, Figma, Git, VScode, tech training, user experience, mobile user
          experience, customer relationship management(crm), user interface,
          training delivery, (KPI) key performance indicator, product Life
          cycle. Product Life, product design, product launch, wireframing, user
          centered design, user stories, attention to details, design thinking
          and facilitation, team coordination, product roadmapping and
          prioritization, cross-functional team collaboration, mentorship and
          coaching, problem solving
        </p>
      </div>
    </section>
  );
};
export default Summery;
