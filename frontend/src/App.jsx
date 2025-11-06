import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Hero";
import Register from "./Components/Register";
import About from "./About/About"
import Services from "./Services/Services";
import Microsites from "./Microsites/Microsites";

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/microsites" element={<Microsites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
