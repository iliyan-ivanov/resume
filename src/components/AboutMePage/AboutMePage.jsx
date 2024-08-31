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
            ReactJS, HTML, CSS, NodeJs and web development.
          </p>
        </article>
      </section>
      <Certificates />
      <Skills />
      <section className="education-section">
        <h2>Education</h2>
        <div className="educations">
          <article className="education">
            <ul>
              <li className="education-header">JS Web Developer</li>
              <li>Software University</li>
              <li>10/2019 - 06/2021</li>
            </ul>
            <p className="education-city">Sofia</p>
          </article>
          <article className="education">
            <ul>
              <li className="education-header">
                Bachelor of Science in International Business
              </li>
              <li>International Business School</li>
              <li>09/2013 - 09/2017</li>
            </ul>
            <p className="education-city">Sofia</p>
          </article>
        </div>
      </section>
      <section className="work-section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <article className="previous-work">
            <ul>
              <li className="position">
                Electronics engineer / Product Manager
              </li>
              <li className="company-time">Octa Light</li>
              <li className="company-time">10/2017 - 11/2022</li>
              <li className="company-desctiption">
                Octa Light is completely vertically integrated manufacturer in
                LED lighting business producing
              </li>
              <li className="responsibilities">Responsibilities:</li>
              <li>
                <ul className="responsibilities-list">
                  <li>
                    Мanaging a team and assigning working tasks through the
                    entire product lifecycle.
                  </li>
                  <li>Working with Odoo and Kanban ERP systems.</li>
                  <li>
                    Developing effective maintenance, testing, and quality
                    control procedures.
                  </li>
                  <li>
                    Writing specifications, instructions, reports, and handling
                    other required administrative duties.
                  </li>
                  <li>
                    Observing existing processes and making recommendations for
                    improvement.
                  </li>
                  <li>
                    Create and edit AutoCad files for new or existing products.
                  </li>
                  <li>Recommend design modifications and equipment repair.</li>
                  <li>
                    Ensuring all equipment and products meet health and safety
                    regulations.
                  </li>
                  <li>
                    Negotiations about purchases of materials, samples and parts
                    for the machines with companies from other countries (USA,
                    China, Germany, etc.)
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="previous-work">
            <ul>
              <li className="position">Operator Manipulator</li>
              <li className="company-time">Octa Light</li>
              <li className="company-time">04/2014 - 10/2017</li>
              <li className="company-desctiption">
                Octa Light is completely vertically integrated manufacturer in
                LED lighting business producing
              </li>
              <li className="responsibilities">Responsibilities:</li>
              <li>
                <ul className="responsibilities-list">
                  <li>
                    Set up machines (calibration, cleaning etc.) to start a
                    production cycle.
                  </li>
                  <li>Control and adjust machine settings (e.g. speed).</li>
                  <li>
                    Feed raw material or parts to semi-automated machines.
                  </li>
                  <li>Understanding of how operated machine works.</li>
                  <li>Fix issues that might occur during the shift.</li>
                  <li>
                    Check output to spot any machine-related mistakes or flaws.
                  </li>
                  <li>
                    Keep records of approved and defective units or final
                    products.
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;
