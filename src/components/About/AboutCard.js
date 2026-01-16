import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { SiYoutubegaming, SiMyanimelist } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdellah Mouhamiti</span>
            from <span className="purple"> Laayoune, Morocco.</span>
            <br />
            I am currently working as a Freelance Full Stack Developer.
            <br />
            I have specialized in Full Stack Web Development (MERN Stack) as well as Machine Learning.
            <br />
            I leverage this combination to build smart, scalable solutions, focusing on E-commerce platforms and Management & Productivity tools that help businesses thrive.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games <SiYoutubegaming />
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime <SiMyanimelist />
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!" — Abdellah Mouhamiti{" "}
          </p>
          <footer className="blockquote-footer">Abdellah Mouhamiti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
