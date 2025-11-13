import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Hero";
import Register from "./Components/Register";
import About from "./About/About";
import Services from "./Services/Services";
import Microsites from "./Microsites/Microsites";

import VivoX50 from "./richmedia/VivoX50";

// Wrapper component to control header visibility
function AppContent() {
  const location = useLocation();

  // Hide Header only on this route
  const hideHeader = location.pathname === "/richmedia/VivoX50";

  return (
    <>
      {/* Show header on all pages except richmedia */}
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microsites" element={<Microsites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Fullscreen video page (no header) */}
        <Route
          path="/richmedia/VivoX50"
          element={<VivoX50 />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
