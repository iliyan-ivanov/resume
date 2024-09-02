import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import repos from "../../reposDB";
import "./ProjectDetailsPage.css";

const ProjectDetailsPage = () => {
  const [repo, setRepo] = useState({});
  const { project } = useParams();

  useEffect(() => {
    const currentRepo = repos.find((x) => x.url == project);
    setRepo(currentRepo);
  }, []);
  return (
    <main>
      <section className="project-details-header-section">
        <h1>{repo.name}</h1>
        <article className="project-image">
          <img src={repo.img} alt="Project image" />
        </article>
      </section>
      <section className="project-info">
        <article className="project-urls">
          <Link className="project-link">Live</Link>
          <Link to={`https://github.com/iliyan-ivanov/${repo.url}`} className="project-link">GitHub repository</Link>
        </article>
        <article className="project-technologies">
          {repo.technologies?.map((technology) => (
            <div className="technology" key={technology}>
              <img src={technology} alt="Technology image" />
            </div>
          ))}
        </article>
      </section>
      <section className="project-description">
        <p>
          Project description .... Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem eveniet alias excepturi fugit sequi illo
          vitae, accusantium, perspiciatis sint, eos eius non nisi officia rem
          magnam? Dicta corporis laborum soluta. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequatur sint provident aut in,
          incidunt maxime! Minus porro nam rerum molestiae possimus fugiat
          quibusdam, vel ipsam debitis aut similique eaque quam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse corporis ab ducimus
          laborum aliquid odio, assumenda itaque at. Quaerat dolor obcaecati
          maiores mollitia, quo at ad molestiae sit incidunt culpa. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Dicta temporibus
          architecto, totam id at natus consectetur porro similique
          exercitationem in minus explicabo nemo et quo repellat eius eaque sed
          non?
        </p>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
