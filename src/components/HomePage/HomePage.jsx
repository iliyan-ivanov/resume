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
    </main>
  );
};

export default HomePage;
