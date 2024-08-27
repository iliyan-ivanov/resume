import SwiperProjects from "../common/SwiperProjects/SwiperProjects";
import profile from "../../assets/profile.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main>
      <section className="home-main-section">
        <article className="home-main-section-photo">
          <img src={profile} alt="My photo" />
        </article>
        <article className="home-main-section-info">
          <div>
            <h1>I am Iliyan</h1>
            <h2>About me:</h2>
            <p className="home-main-section-description">
              I am very motivated to start working as a programmer, to learn new
              technologies and to develop my knowledge. I am searching a
              company, from where i can start my career as programmer and to
              grow in it.
            </p>
          </div>
          <div className="home-swiper">
            <h3>My projects</h3>
            <SwiperProjects />
          </div>
        </article>
      </section>
      <section className="skill-section">
        <h2>Skills</h2>
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
    </main>
  );
};

export default HomePage;
