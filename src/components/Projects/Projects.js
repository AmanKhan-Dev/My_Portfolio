import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import QuizApp from "../../Assets/Projects/Screenshot (142).png";
import BCM from "../../Assets/Projects/Screenshot (96).png";

import MicrosoftClone from "../../Assets/Projects/Screenshot (74).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCM}
              isBlog={false}
              title="BIT Code Master"
              description="BIT Code Master is an interactive coding platform designed for practicing and solving coding
challenges. Built using React.js, Spring Boot, MySQL, HTML, and CSS, it features a real-time GCC console for
executing C code with runtime input/output. The platform includes a responsive question management system,
dynamic result dashboards, and seamless RESTful API integration."
              ghLink="https://github.com/AmanKhan-Dev/BIT_Code_Master_Frontend"
              demoLink="https://bitcodemaster.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MicrosoftClone}
              isBlog={false}
              title="Responsive Microsoft Website Clone"
              description="The Microsoft Website Clone is a dynamic and responsive replica of
the Microsoft homepage, developed using PHP, HTML, CSS, JavaScript, and MySQL."
              ghLink="https://github.com/AmanKhan-Dev/MyMicrosoftClone"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Quiz Application"
              description="This is an interactive quiz application with gamification features using the React Vite project. This application fetches quiz data from an API and presents it with an engaging user interface. Taking inspiration from Testline App, it allows seamless attempts at quizzes and displays their scores."
              ghLink="https://github.com/AmanKhan-Dev/Quiz_Application_Insp"
              demoLink="https://github.com/AmanKhan-Dev/Quiz_Application_Insp"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
