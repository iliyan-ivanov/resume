import repos from "../../reposDB";
import ProjectCard from "../common/ProjectCard/ProjectCard";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <main className="my-projects-page">
      <h1 className="my-projects-page-main-heading">Projects</h1>
      <h3 className="my-projects-page-sub-heading">Here are some of the projects I'd like to share</h3>
      <section className="my-projects">
        {repos.map((repository) => (
          <ProjectCard
            title={repository.title}
            name={repository.name}
            technologies={repository.technologies}
            img={repository.img}
            key={repository.id}
            url={repository.url}
          />
        ))}
      </section>
    </main>
  );
};

export default MyProjects;
