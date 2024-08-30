import SwiperProjects from "../common/SwiperProjects/SwiperProjects";
import profile from "../../assets/profile.png";
import Skills from "../common/Skills/Skills";
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
              Detail-oriented web developer with experience in building
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
          </div>
          <div className="home-swiper">
            <h3>My projects</h3>
            <SwiperProjects />
          </div>
        </article>
      </section>
      <Skills />
    </main>
  );
};

export default HomePage;
