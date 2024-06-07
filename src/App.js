import React from "react";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
