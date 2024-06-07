// src/components/Projects.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <Row>
        <Col>
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="path_to_image_1.jpg" />
            <Card.Body>
              <Card.Title>Semester-Project-2 </Card.Title>
              <Card.Text>Description of project 1.</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/username/project1"
                target="_blank"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="path_to_image_2.jpg" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Description of project 2.</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/username/project2"
                target="_blank"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="path_to_image_3.jpg" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Description of project 3.</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/username/project3"
                target="_blank"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
