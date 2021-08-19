/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__up">
        <h2>Work together</h2>
        <p>
          Do you have an idea ? Let's <br /> make it real together.
        </p>
        <button>Let's go</button>
      </div>
      <div className="footer__down">
        <div className="footer__down__container">
          <h1>M & G</h1>
          <h2>
            He believed he could, <br /> so he did.
          </h2>
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
            <li>
              <a href="mailto:muharemgunal@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
          <p>Created with React</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
