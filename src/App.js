import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import AboutBanner from "./components/about/about-banner";
import { MeetTheTeam } from "./components/about/meet-the-team";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import { BucketList } from "./components/bucket-list/bucket-list";
import PackList from './components/pack-list/pack-list';
import Login from "./components/login-signup/log-in";
import { Footer } from "./components/footer/footer";

import "animate.css/animate.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header /> {/* this will be on every page */}
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutBanner /><MeetTheTeam /><TestimonialCarousel /></>} />
        <Route path="/pack-list" element={<PackList />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/signup-login" element={<Login />} />
      </Routes>
      <Footer /> {/* this will be on every page */}
    </div>
  );
}

export default App;
