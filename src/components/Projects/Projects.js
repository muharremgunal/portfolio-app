import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.scss";

const movieapp = "Movie App";
const moviecontent =
  " This is one my favourite projects.I love having Movie watch in my life.So I decided to make meaningfull for myself.Also it is full responsive for every device.";
const createdwithmovieapp = "React Hooks, JScript,React";
const sourcenetmovie = "https://boring-leavitt-68be63.netlify.app/";

const Pizza = "Pizza Web Design";
const Pizzacontent =
  "I can easily say that pizza has huge impact in my daily taste.In this website you can easliy search recipe of pizzas.It is full responsive and has reusable components in every part.";
const createdwithPizza = "Html5, Css3,Js,React,MaterialUI";
const sourcePizza =
  "https://611b8266973c5e1068a62b25--nifty-engelbart-25fb59.netlify.app/";

const Dolla = "Dolla Banking";
const Dollacontent =
  "This is a kind of banking website template. You can check it out.";
const createdwithDolla = "Html5, Css3, StyleComponent,Js,React";
const sourceDolla =
  "https://611b8830b338d51ab759b990--quirky-albattani-f4a144.netlify.app/";

const Investment = "Investment";
const Investmentcontent =
  "This is a kind of investment website template. You can check it out.";
const createdwithInvestment = "React Hooks, RestAPI,Js,React";
const sourceInvestment =
  "https://611b889dabe679e81ac9508b--boring-borg-cc9aad.netlify.app/";

const breakingbad = "Breaking Bad Cast";
const breakingbadcontent =
  "I am a huge fan of Breaking Bad. So i decided to give life to my passion";
const createdwithbreakingbad = "React Hooks, Scss, RestAPI";
const sourcebreakingbad =
  "https://611b874c397f12eb93ae0b60--zealous-heisenberg-4d00fc.netlify.app/";

const Quiz = "Quiz Web Side";
const Quizcontent =
  "This project is based on measure your knowledge.It's a basic quiz app. You can join competition and measure your knowledge. You can use in every devices so it is full responsive.";
const createdwithQuiz = "React Hooks,Js,React";
const sourceQuiz =
  "https://611ba0141ecd29000749fc23--lucid-varahamihira-a842c3.netlify.app/";

const Projects = () => {
  return (
    <div className="wrapper">
      <h1>My Recent Projects</h1>
      <div className="projects">
        <ProjectItem
          header={movieapp}
          content={moviecontent}
          created={createdwithmovieapp}
          img="./img/movie-app.jpg"
          source={sourcenetmovie}
        />
        <ProjectItem
          header={breakingbad}
          content={breakingbadcontent}
          created={createdwithbreakingbad}
          img="./img/breaking-bad.jpg"
          source={sourcebreakingbad}
        />
        <ProjectItem
          header={Investment}
          content={Investmentcontent}
          created={createdwithInvestment}
          img="./img/investment.jpg"
          source={sourceInvestment}
        />
        <ProjectItem
          header={Dolla}
          content={Dollacontent}
          created={createdwithDolla}
          img="./img/ultra.jpg"
          source={sourceDolla}
        />
        <ProjectItem
          header={Pizza}
          content={Pizzacontent}
          created={createdwithPizza}
          img="./img/pizza-web.jpg"
          source={sourcePizza}
        />

        <ProjectItem
          header={Quiz}
          content={Quizcontent}
          created={createdwithQuiz}
          img="./img/quizz.jpg"
          source={sourceQuiz}
        />
      </div>
      <a className="projects__button" href="https://github.com/muharremgunal">
        More on Github
      </a>
    </div>
  );
};

export default Projects;
