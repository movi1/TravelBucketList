
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import AboutBanner from "./components/about/about-banner";
import { MeetTheTeam } from "./components/about/meet-the-team";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import MapSearch from "./components/map/MapSearch";

import PackList from './components/pack-list/pack-list';
import Login from "./components/login-signup/log-in";
import ContactUs from "./components/contact-us/contact-us";
import { Footer } from "./components/footer/footer";
import { Faq } from "./components/faq-page/faq";
import "animate.css/animate.min.css";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutBanner /><MeetTheTeam /><TestimonialCarousel /></>} />
        <Route path="/pack-list" element={<PackList />} />

        <Route path="/bucket-list" element={ <MapSearch  />
        } />


   
        <Route path="/signup-login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
