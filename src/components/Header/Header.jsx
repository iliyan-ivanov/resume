import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-navigation">
      <h2 className="nav-heading">Iliyan Ivanov</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/projects">My projects</Link>
        </li>
        <li>
          <Link>Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
