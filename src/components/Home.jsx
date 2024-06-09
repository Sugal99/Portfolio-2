import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HeaderImg from "../assets/images/SemesterProjectImg.png"; // Replace with your header image path

const Home = () => {
  return (
    <Container fluid className="home-section text-center my-5">
      <Row>
        <Col>
          <Image src={HeaderImg} fluid className="mb-4" />
          <h1>Hello, my name is [Your Name]</h1>
          <p className="lead">Welcome to my portfolio!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
