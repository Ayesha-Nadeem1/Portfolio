import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayesha Nadeem </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently studying Computer Science at University of Engineering and Technology, Lahore.
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I'm fond of doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media Handling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do not wait for Tomorrow; begin now."{" "}
          </p>
          <footer className="blockquote-footer">Ayesha Nadeem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
