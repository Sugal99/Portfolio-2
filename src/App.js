import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
