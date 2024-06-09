import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />

      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
