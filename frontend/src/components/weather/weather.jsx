import React, { useState } from 'react';
import './weather.css'; 
import WeatherForecast from './weather-forecast.jsx';
import CurrentWeather from './current-weather.jsx';
import LocationSearch from './location-search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setWeatherForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(weatherForecast)
  
  return (
    <div className="weather-container">
      <LocationSearch onSearchChange={handleOnSearchChange} />
      <div>
        {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
        {weatherForecast && <WeatherForecast weatherForecastData={weatherForecast} />}
      </div>
    </div>
  );
}

export default Weather;
