import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aaditya R Krishnan </span>
            hailing from <span className="purple"> Alappuzha, India.</span>
            <br />I am an experienced Software Developer with a track record of 6+ years in developing robust web applications and ensuring cloud security. 
            <br />
            My skills span a wide range of technologies, including Python, Django, React, MySQL, PostgreSQL, Git, and AWS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Card
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn, err, create. Innovate through mistakes."{" "}
          </p>
          <footer className="blockquote-footer">Aaditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
