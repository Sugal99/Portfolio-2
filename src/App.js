import React from "react";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Home />

      <NavBar />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
