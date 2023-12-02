// home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div className="main-content animated-content">
      {/* Container 1: Title, Subtitle, and Button */}
      <div className="containers">
      <div className="container">
        <h1 className="title-home-page">Your Dream Destinations Await!</h1>
        <p className="subtitle">Create Your Travel Bucket List and Start Exploring</p>
        <p className="description">Discover amazing places, mark your favorites, and turn your travel dreams into reality.</p>
        {/* Example Link to the Bucket List Page */}
        <Link to="/bucket-list">
          <button className="explore-btn">Explore Bucket List</button>
        </Link>
      </div>

      {/* Container 2: Car Image */}
      <div className="container">
        <div className="image-container">
          <img src="/images/car.png" alt="Car" />
        </div>
      </div>
     
        {/* Container 3: Meet the Team */}
        <div className="container">
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
    </div>
  );
};

export default Home;


