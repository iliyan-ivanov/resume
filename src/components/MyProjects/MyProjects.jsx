import repos from "../../reposDB";
import ProjectCard from "../common/ProjectCard/ProjectCard";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <main className="my-projects">
      {repos.map((repository) => (
        <ProjectCard
          name={repository.name}
          url={repository.url}
          id={repository.id}
          technologies={repository.technologies}
          img={repository.img}
          key={repository.id}
        />
      ))}
    </main>
  );
};

export default MyProjects;
