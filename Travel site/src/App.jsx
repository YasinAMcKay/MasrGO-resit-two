import React from "react";
import Destinations from "./components/Destinations";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tours from "./components/Tours";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
      <dmore />
      <BrowserRouter>
        <Routes>
          <Route index element={<main />} />
          <Route path="/dmore" element={<dmore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
