import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <main>
      <section className="contacts-icons">
        <Link to="https://github.com/iliyan-ivanov">
          <FaGithub className="github-icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/iliyan-ivanov-45981516b/">
          <FaLinkedin className="linkedin-icon" />
        </Link>
      </section>
    </main>
  );
};

export default ContactsPage;
