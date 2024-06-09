import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import HeaderImg from "../assets/images/HeaderImage.gif";
import TypedText from "./TypedText";

const Home = () => {
  return (
    <Container
      fluid
      className="home-section text-center py-5 position-relative"
    >
      <Image
        src={HeaderImg}
        fluid
        className="header-image"
        style={{ opacity: 0.7 }}
      />
      <Row className="justify-content-center align-items-center position-absolute w-100 h-100 top-0 start-0">
        <Col xs={10} sm={8} md={6} lg={4} xl={3}>
          <div className="text-white">
            <h1 className="display-4 typed-text" style={{ color: "black" }}>
              <TypedText />
            </h1>
            <Button
              variant="primary"
              href="#projects"
              className="mt-3"
              style={{ fontSize: "1.25rem", padding: "0.5rem 2rem" }}
            >
              View My Projects
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
