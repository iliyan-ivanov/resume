import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navList = document.getElementsByClassName("navigation-list")[0];

    window.innerWidth > 816 
    ? navList.style.display = "flex"
    : navList.style.display = "none"

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 816) {
        navList.style.display = "none";
      } else if (window.innerWidth > 816) {
        navList.style.display = "flex";
      }
    });
  }, []);

  const onShowNav = (e) => {
    e.preventDefault(e);

    const navList = document.getElementsByClassName("navigation-list")[0];

    navList.style.display == "block"
      ? (navList.style.display = "none")
      : (navList.style.display = "block");
  };

  return (
    <header className="header-navigation">
      <h2 className="nav-heading">Iliyan Ivanov</h2>
      <nav className="navigation">
        <div className="nav-icon" onClick={onShowNav}>
          <FaBars />
        </div>
        <ul className="navigation-list">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about-me">About me</Link>
          </li>
          <li className="nav-link">
            <Link to="/my-projects">My projects</Link>
          </li>
          <li className="nav-link">
            <Link>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
