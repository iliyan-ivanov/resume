import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
    name,
    url,
    img,
    id,
    technologies
}) => {
  return (
    <Link to={`/my-projects/${url}`} className="project-card">
          <div className="project-card-photo">
            <img src={img} alt="Project photo" />
          </div>
          <div className="project-card-info">
            <h2>{name}</h2>
            <section className="technologies">
              {technologies.map(technology => (
                <article className="technology" key={technology}>
                    <img src={technology} alt="Technology" />
                </article>
              ))} 
            </section>
          </div>
        </Link>
  );
};

export default ProjectCard;