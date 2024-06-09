import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SemesterProjectImg from "../assets/images/SemesterProjectImg.png";
import JavaScriptCaImg from "../assets/images/JavaScriptCa-eCom.png";
import ProjectExam2Img from "../assets/images/ProjectExam2Img.png";

const Projects = () => {
  return (
    <Container id="projects" className="my-5 py-5 text-center">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100 ">
            <Card.Img
              variant="top"
              src={SemesterProjectImg}
              style={{ height: "167px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>SemesterProject2-AuctionBid</Card.Title>
              <Card.Text className="flex-grow-1 text-muted">
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
              <Button
                variant="outline-secondary"
                href="https://fluffy-lolly-cb9973.netlify.app/login.html"
                className="mt-2"
              >
                Live site
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Img
              variant="top"
              src={JavaScriptCaImg}
              style={{ height: "167px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>JavaScriptCa-eCom</Card.Title>
              <Card.Text className="flex-grow-1 text-muted">
                This is an eCom website where users can view and add all kinds
                of items to a cart for checkout, either by searching or
                navigating through them. As the title suggests, this project was
                for an assignment.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/Sugal99/react-ca-app-master"
                target="_blank"
              >
                View on GitHub
              </Button>
              <Button
                variant="outline-secondary"
                href="https://comforting-marshmallow-c6020c.netlify.app/"
                className="mt-2"
              >
                Live site
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Img
              variant="top"
              src={ProjectExam2Img}
              style={{ height: "167px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Project Exam 2-FinalExam</Card.Title>
              <Card.Text className="flex-grow-1 text-muted">
                This is a booking site called Holidaze, where you can book all
                kinds of venues for a holiday. As the title suggests, this was
                my final exam.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/Sugal99/Final-Exam"
                target="_blank"
              >
                View on GitHub
              </Button>

              <Button
                variant="outline-secondary"
                href="https://master--gregarious-lollipop-0b0df9.netlify.app/"
                className="mt-2"
              >
                Live site
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
