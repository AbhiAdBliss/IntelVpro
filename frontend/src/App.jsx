import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Hero";
import Register from "./Components/Register";
import About from "./About/About";
import Services from "./Services/Services";
import Microsites from "./Microsites/Microsites";

import VivoX50 from "./richmedia/VivoX50";
import Canon from "./richmedia/Canon";
import Bajajfinance from "./richmedia/Bajajfinance";
import Icici from "./richmedia/Icici";
import Myntra from "./richmedia/Myntra";
import WhatsApp from "./richmedia/WhatsApp";
import Triumph from "./richmedia/Triumph";
import Tvs from "./richmedia/Tvs";
// import Vpro from "./Intel/Vpro";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy.jsx";
import LenovoXFifa from "./richmedia/LenovoXFifa.jsx";

// Wrapper component to control header visibility
function AppContent() {
  const location = useLocation();

  // ✅ BEST FIX: hide header for all richmedia pages automatically
  const hideHeader =
    location.pathname.startsWith("/richmedia") ||
    location.pathname.startsWith("/Intel") ||
    location.pathname === "/privacy-policy";

  return (
    <>
      {/* ✅ Show header only if not inside richmedia/intel/privacy pages */}
      {!hideHeader && <Header />}

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/microsites" element={<Microsites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Richmedia full-screen pages (no header) */}
        <Route path="/richmedia/VivoX50" element={<VivoX50 />} />
        <Route path="/richmedia/Canon" element={<Canon />} />
        <Route path="/richmedia/Bajajfinance" element={<Bajajfinance />} />
        <Route path="/richmedia/Icici" element={<Icici />} />
        <Route path="/richmedia/Myntra" element={<Myntra />} />
        <Route path="/richmedia/WhatsApp" element={<WhatsApp />} />
        <Route path="/richmedia/Triumph" element={<Triumph />} />
        <Route path="/richmedia/Tvs" element={<Tvs />} />
        <Route path="/richmedia/lenovoxfifa" element={<LenovoXFifa />} />

        {/* Intel Vpro */}
        {/* <Route path="/Intel/Vpro" element={<Vpro />} /> */}

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
