import { Link } from "react-router-dom";
import "./Certificates.css";

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h3>Certificates</h3>
      <div className="certificates">
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">React JS</li>
            <li className="certificate-info">Software University (Softuni)</li>
            <li className="certificate-info">03/2021 - 04/2021</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/17WN5s1HwrDg04aYb-WMGLnkaqydopNkU/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">JavaScript Back-End</li>
            <li className="certificate-info">Software University (Softuni)</li>
            <li className="certificate-info">01/2021 - 02/2021</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/1GivOtB1dyedsyQs_xGol5ZOJStNaM2Yl/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">JavaScript Applications</li>
            <li className="certificate-info">Software University (Softuni)</li>
            <li className="certificate-info">10/2020 - 12/2020</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/1NuLvnLdvUzeKUk3wAG9h1L4iG4GMIUY1/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">JavaScript Advanced</li>
            <li className="certificate-info">Software University (Softuni)</li>
            <li className="certificate-info">09/2020 - 10/2020</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/1a6DYiUBif55tHoYGbNgrRx4G0tjwtXPf/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">JavaScript Fundamentals</li>
            <li className="certificate-info" >Software University (Softuni)</li>
            <li className="certificate-info" >01/2020 - 04/2020</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/1Af4XlmrZ6LxkAc34VwLhNt7VtWN-DATJ/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
        <article className="certificate">
          <div className="certificates-logo">
            <img src="./softuni.svg" alt="Software university logo" />
          </div>
          <ul>
            <li className="certificate-heading">
              Programming Basics with JavaScript
            </li>
            <li className="certificate-info">Software University (Softuni)</li>
            <li className="certificate-info">10/2019 - 12/2019</li>
            <li className="certificate-link">
              <Link to="https://drive.google.com/file/d/1z_MEy0yCfLkqV6j80fKB0zaBIL1DouzF/view">
                Show credantial
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Certificates;
