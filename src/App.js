import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import TestimonialsCarousel from './components/testimonials/testimonials';
import { AboutUs } from './components/about-us/about-us';
import { Footer } from './components/footer/footer';
import { MapSearch } from './components/map/MapSearch';
import { Home } from './components/home/home';
import { BucketList } from './components/bucket-list/bucket-list';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header /> {/* this will be on every page */}

      {/* UNCOMMENT THE ROUTES BELOW AS WE START BUILDING EACH PAGE */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <TestimonialsCarousel />
          </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pack-your-list" />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/signup-login" />
      </Routes>

      <Footer /> {/* this will be on every page */}

    </div>
  );

}

export default App;
