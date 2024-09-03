import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import repos from "../../reposDB";
import "./ProjectDetailsPage.css";

const ProjectDetailsPage = () => {
  const [repo, setRepo] = useState({});
  const { project } = useParams();

  useEffect(() => {
    const currentRepo = repos.find((x) => x.name == project);
    setRepo(currentRepo);
  }, []);
  return (
    <main>
      <section className="project-details-header-section">
        <h1>{repo.title}</h1>
        <article className="project-image">
          <img src={repo.img} alt="Project image" />
        </article>
      </section>
      <section className="project-info">
        <article className="project-urls">
          <Link to={repo.url} className="project-link">
            Live
          </Link>
          <Link
            to={`https://github.com/iliyan-ivanov/${repo.name}`}
            className="project-link"
          >
            GitHub repository
          </Link>
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
        <p>{repo.description}</p>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
