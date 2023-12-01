

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
    return (
      
            <div className="main-content animated-content">
              <h1 className="title">Your Dream Destinations Await!</h1>
              <p className="subtitle">Create Your Travel Bucket List and Start Exploring</p>
              <p className="description">Discover amazing places, mark your favorites, and turn your travel dreams into reality.</p>
              
              {/* Example Link to the Bucket List Page */}
              <Link to="/bucket-list">
                <button className="explore-btn">Explore Bucket List</button>
              </Link>
            </div>
    );
};


export default Home;
