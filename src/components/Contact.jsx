// src/components/Contact.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <Row>
        <Col>
          <h2>Contact</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
