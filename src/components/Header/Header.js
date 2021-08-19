import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <img
          className="navbar__profile"
          src="./img/myphoto.jpeg"
          alt="personal"
        />
        <a
          className="navbar__button"
          href="mailto:mailto:muharemgunal@gmail.com"
        >
          Contact
        </a>
      </div>
      <div className="header__content">
        <h1>Frontend Developer </h1>
        <p>
          Everything you can imagine is real. <br /> Let's make it real.
        </p>
        <img className="header__png" src="./img/hacker.png" alt="hacker" />
        <ul>
          <li>
            <a href="https://github.com/muharremgunal">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/muharremgnal1">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muharrem-g%C3%BCnal-946448175/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
        <div className="bounce">
          <i className="fas fa-chevron-down fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
