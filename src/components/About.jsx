// src/components/About.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="path_to_your_image.jpg"
            rounded
            fluid
            className="about-image"
          />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
            Introduce yourself here. Highlight your skills, experience, and what
            makes you unique.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
