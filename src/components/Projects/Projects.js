import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/gateau.png";
import moneystack from "../../Assets/Projects/MoneyStack.png";
import bankingsystem from "../../Assets/Projects/BankingSystem.png"
import gopuzzle from "../../Assets/Projects/GolangPuzzle.png"

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
              imgPath={chatify}
              isBlog={false}
              title="Gateau"
              description="Developed an ecommerce app for selling bake and pastry items online. Implemneted using react and django"
              ghLink="https://github.com/aadityarkrishnan/Gateu"
              // demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={moneystack}
              title="MoneyStack"
              description="MoneyStack is an app to track the expense between their friends & family"
              ghLink="https://github.com/aadityarkrishnan/MoneyStack"
              // demoLink="#"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankingsystem}
              isBlog={false}
              title="Banking System"
              description="Using Golang, implemented simple bank transaction application"
              ghLink="https://github.com/aadityarkrishnan/banking-app"
              // demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={gopuzzle}
              isBlog={false}
              title="Go Puzzle"
              description="A bunch of puzzle solved using go lang"
              ghLink="https://github.com/aadityarkrishnan/go_code"
              // demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
