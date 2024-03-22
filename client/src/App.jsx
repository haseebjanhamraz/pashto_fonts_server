import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/partials/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/partials/Footer";
import PashtoPhonetic from "./pages/PashtoPhonetic";
import HowToInstall from "./pages/HowToInstall";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/pashto-phonetic" element={<PashtoPhonetic />} />
          <Route exact path="/how-to-install" element={<HowToInstall />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
