import React from "react";

import "./About.scss";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="about__content">
          <h1>
            Hi, I’m Muharrem. <br /> Nice to see you.
          </h1>
          <p>
            I graduated from Anadolu University as Industrial Designer. When i
            realize that software makes me exciting which has similarities with
            my department, i decided to give a chance myself. So, here i am.
            Below you can see the skills i can offer joyful. I'm also currently
            looking for my next development position, don't hesitate to reach
            out if you want to talk!
          </p>
        </div>
      </div>
      <div className="about__skill">
        <div className="about__skill__designer">
          <h2>UI Designer</h2>
          <p>
            Design has been always part of me. I always aim to create simplicity
            on every projects.
          </p>
          <h4>Things I can do for you</h4>
          <p>UI Design, Web Design</p>
          <h4>Design Tools</h4>
          <ul>
            <li>Adobe xd</li>
            <li>Adobe Photoshop CC</li>
          </ul>
        </div>
        <div className="about__skill__developer">
          <h2>Frontend Developer</h2>
          <p>
            Coding sth is like bringing pieces of puzzle together for me. I love
            it and enjoy with it.
          </p>
          <h4>Software I can offer you</h4>
          <p>
            Html5, Css3, Scss, Bootstrap, MaterialUI, Styled-Component,
            <br />
            Javascript, React, Redux
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
