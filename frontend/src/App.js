
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import AboutBanner from "./components/about/about-banner";
import { MeetTheTeam } from "./components/about/meet-the-team";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import MapSearch from "./components/map/MapSearch";
import PackList from './components/pack-list/pack-list';
import WeatherCTA from './components/weather-cta/weather-cta';
import Login from "./components/login/log-in";
import SignUp from "./components/login/sign-up";
import ContactUs from "./components/contact-us/contact-us";
import { Footer } from "./components/footer/footer";
import { Faq } from "./components/faq-page/faq";
import AuthPage from './components/login/authContext';
import { AuthProvider } from './components/login/authContext';
import Weather from "./components/weather/weather";
import "animate.css/animate.min.css";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/about" element={<><AboutBanner /><MeetTheTeam /><TestimonialCarousel /></>} />
          <Route path="/pack-list" element={<><PackList /><WeatherCTA /></>} />
          <Route path="/bucket-list" element={<MapSearch />} />
          <Route path="/weather-forecast" element={<Weather />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AuthProvider>

      <Footer />
    </div>
  );
}

export default App;
