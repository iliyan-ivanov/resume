import "./Skills.css";

const Skills = () => {
  return (
      <section className="skill-section">
      <h3>Skills</h3>
      <article className="skills">
        <div className="skills-icons">
          <img src="./javascript.svg" alt="Javascript icon" />
          <h4>Javascript</h4>
        </div>
        <div className="skills-icons">
          <img src="./react.svg" alt="React icon" />
          <h4>React</h4>
        </div>
        <div className="skills-icons">
          <img src="./html.svg" alt="HTML icon" />
          <h4>HTML</h4>
        </div>
        <div className="skills-icons">
          <img src="./css.svg" alt="CSS icon" />
          <h4>CSS</h4>
        </div>
        <div className="skills-icons">
          <img src="./node.svg" alt="NodeJS icon" />
          <h4>NodeJS</h4>
        </div>
        <div className="skills-icons">
          <img src="./mongo.svg" alt="MongoDB icon" />
          <h4>MongoDB</h4>
        </div>
        <div className="skills-icons">
          <img src="./express.svg" alt="Express icon" />
          <h4>Express</h4>
        </div>
        <div className="skills-icons">
          <img src="./firebase.svg" alt="Firebase icon" />
          <h4>Firebase</h4>
        </div>
      </article>
    </section>
  );
};

export default Skills;