import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h4>{props.name}</h4>
      <Link to={props.url} className="project-card-photo">
        <img src={props.img} />
      </Link>
    </div>
  );
};

export default ProjectCard;