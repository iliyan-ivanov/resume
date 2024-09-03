import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ContactForm from "../common/ContactForm/ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <main>
      <section className="contact-section">
        <ContactForm />
        <article className="contacts-info">
          <Link className="contact-card" to="mailto:ivanov.iliyan28@gmail.com">
            <div>
              <MdOutlineMail className="contact-icon" />
              <h3>Email:</h3>
            </div>
            <h4>ivanov.iliyan28@gmail.com</h4>
          </Link>
          <Link className="contact-card" to="https://github.com/iliyan-ivanov">
            <div>
              <FaGithub className="contact-icon" />
              <h3>GitHub:</h3>
            </div>
            <h4>https://github.com/iliyan-ivanov</h4>
          </Link>
          <Link className="contact-card" to="https://www.linkedin.com/in/iliyan-ivanov-45981516b">
            <div>
              <FaLinkedin className="contact-icon linkedin-icon" />
              <h3>LinkedIn:</h3>
            </div>
            <h4>https://www.linkedin.com/in/iliyan-ivanov-45981516b</h4>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default ContactPage;
