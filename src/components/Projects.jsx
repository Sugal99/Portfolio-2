import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SemesterProjectImg from "../assets/images/SemesterProjectImg.png";
import JavaScriptCaImg from "../assets/images/JavaScriptCa-eCom.png";
import ProjectExam2Img from "../assets/images/ProjectExam2Img.png";

const Projects = () => {
  return (
    <Container id="projects" className="my-5 text-center">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Img
              variant="top"
              src={SemesterProjectImg}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>SemesterProject2-AuctionBid</Card.Title>
              <Card.Text className="flex-grow-1">
                This is an auction website where users can add items to be bid
                on and bid on items other users have put up for auction. As the
                title suggests, this was a project done at the end of our
                semester.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/Sugal99/Semester-Project-2"
                target="_blank"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Img
              variant="top"
              src={JavaScriptCaImg}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>JavaScriptCa-eCom</Card.Title>
              <Card.Text className="flex-grow-1">
                This is an eCom website where users can view and add all kinds
                of items to a cart for checkout, either by searching or
                navigating through them. As the title suggests, this project was
                for an assignment.
              </Card.Text>
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
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Img
              variant="top"
              src={ProjectExam2Img}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Project Exam 2-FinalExam</Card.Title>
              <Card.Text className="flex-grow-1">
                This is a booking site called Holidaze, where you can book all
                kinds of venues for a holiday. As the title suggests, this was
                my final exam.
              </Card.Text>
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
