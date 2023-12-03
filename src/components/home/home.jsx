// home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "animate.css";
import './home.css';

export const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true); 
    }, 500);
  }, [])

  return (
    <div className="containers">
      <div
        className={`row-title animate__animated ${
          animate ? "animate__fadeInDown" : ""
        }`}
      >
        <h1 className="title-home-page">Your Dream Destinations Await!</h1>

        <p
          className={`subtitle animate__animated ${
            animate ? "animate__fadeInDown" : ""
          } animate__delay-1s`}
        >
          Create Your Travel Bucket List and Start Exploring
        </p>

        <p
          className={`description animate__animated ${
            animate ? "animate__fadeInDown" : ""
          } animate__delay-2s`}
        >
          Discover amazing places, mark your favorites, and turn your travel
          dreams into reality.
        </p>
        <Link
          to="/bucket-list"
          className={`explore-btn animate__animated ${
            animate ? "animate__fadeInDown" : ""
          } animate__delay-3s`}
        >
          Explore Bucket List
        </Link>
      </div>

      {/* Container 2: Car Image */}
      <div className="row-image">
        <div className="image-container">
          <img src="/images/car.png" alt="Car" />
        </div>
      </div>
     
        {/* Container 3: Meet the Team */}
        <div className="row-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            {/* Add your team member avatars with links to the about us page */}
            <Link to="/about-us">
              <img src="/images/movi-avatar.png" alt="Team Member 1" />
            </Link>
            {/* Repeat for other team members */}
          </div>
        </div>
      </div>
    
  );
};

export default Home;


