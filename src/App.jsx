import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/partials/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/partials/Footer";
const App = () => {
  return (
    <>
      <Navbar className="sticky top-0" />
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
