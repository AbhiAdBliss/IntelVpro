import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Hero";
import Register from "./Components/Register";
import IntelVpro from "./IntelVpro/IntelVpro";
import Lenovo from "./Lenovo/Lenovo";
import About from "./About/About"
import Services from "./Services/Services";

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/microsites/intelvpro" element={<IntelVpro />} />
        <Route path="/microsites/lenovo" element={<Lenovo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
