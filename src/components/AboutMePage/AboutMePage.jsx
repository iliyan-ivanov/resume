import { Link } from "react-router-dom";
import profilePic from "../../assets/profile.png";
import Skills from "../common/Skills/Skills";
import "./AboutMePage.css";
import Certificates from "../common/Certificates/Certificates";

const AboutMePage = () => {
  return (
    <main>
      <section className="about-me-page-intro">
        <article>
          <div className="cv-picture">
            <img src={profilePic} alt="Profile picture" />
          </div>
        </article>
        <article className="about-me-description">
          <h2>Hi, I'm Iliyan Ivanov</h2>
          <p>
            I am detail-oriented web developer with some experience in building
            responsive and user-friendly websites. Passionate about creating
            efficient solutions and improving user experience. I am very
            motivated to learn new technologies and to develop my knowledge. I
            am searching a company, from where i can start my career as
            programmer and to grow in it.
          </p>
          <p>
            Explore my latest projects showcasing my expertise in JavaScript,
            ReactJS, HTML, CSS, NodeJs and web development
          </p>
        </article>
      </section>
      <Skills />
      <Certificates />
      <section className="education-section">
        <h3>Education</h3>
        <div className="educations">
          <article className="education">
            <ul>
              <li className="education-header" >JS Web Developer</li>
              <li>Software University</li>
              <li>10/2019 - 06/2021</li>
            </ul>
            <p className="education-city">Sofia</p>
          </article>
          <article className="education">
            <ul>
              <li className="education-header" >Bachelor of Science in International Business</li>
              <li>International Business School</li>
              <li>09/2013 - 09/2017</li>
            </ul>
            <p className="education-city">Sofia</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;
