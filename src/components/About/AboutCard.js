import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Khan </span>
            from <span className="purple"> Wardha, India.</span>
            <br />
            I am currently an engineering student at BIT,Wardha.
            <br />
            I have completed my Diploma in computer enginnering in 2023 from AST,Wardha.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Book Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You Can Become,What You Believe!"{" "}
          </p>
          <footer className="blockquote-footer">Aman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
