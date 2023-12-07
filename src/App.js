import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import About from "./components/about/about";
import { AboutUs } from "./components/about-us/about-us";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import { BucketList } from "./components/bucket-list/bucket-list";
import PackList from './components/pack-list/pack-list';
import { Footer } from "./components/footer/footer";

import "animate.css/animate.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header /> {/* this will be on every page */}
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><About /><AboutUs /><TestimonialCarousel /></>} />
        <Route path="/pack-your-list" element={<PackList />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/signup-login" />
      </Routes>
      <Footer /> {/* this will be on every page */}
    </div>
  );
}

export default App;
