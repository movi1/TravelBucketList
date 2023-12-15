import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./WeatherCTA.css";

const WeatherCTA = () => {
  return (
      <div className="weather-cta">
        <p className="forecast-message">
          Travelling soon? ☀️ Get the forecast for the next 7 days at your
          destination.
        </p>
        <Link to="/weather-forecast">
          <Button>Go to Weather Forecast</Button>
        </Link>
      </div>
  );
};

export default WeatherCTA;
