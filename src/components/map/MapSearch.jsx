import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

export const MapSearch = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryDetails, setCountryDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedCountries, setSuggestedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const fetchCountryDetails = async (countryCode) => {
    try {
      // Find the selected country in the countries array
      const selectedCountryData = countries.find(
        (country) => country.cca2 === countryCode
      );
      console.log(selectedCountryData)
      // Fetch additional details based on the selected country
      // For example, you can fetch more details from another API or use the existing data
      // For simplicity, I'm just using the existing data here
      setCountryDetails(selectedCountryData);
    } catch (error) {
      console.error('Error fetching country details:', error);
    }
  };


  const ACCESS_TOKEN = 'pk.eyJ1IjoibW92aTgiLCJhIjoiY2xwNnF2NjBtMmRudDJ2cWs2Z3Fydmh0cCJ9.q7q8e9YPRQAiWqJ8k8WQ-Q';

  // Check if countryDetails is not null before accessing latlng
  const mapUrl = countryDetails && countryDetails.latlng
    ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${countryDetails.latlng[1]},${countryDetails.latlng[0]}/400x300?access_token=${ACCESS_TOKEN}`
    : '';

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter countries based on the input term
    const filteredCountries = countries.filter(country => {
      return country.name.common.toLowerCase().startsWith(term.toLowerCase());
    });

    // Display suggestions
    setSuggestedCountries(filteredCountries);
  };

  const handleCountrySelect = async (selectedCountryCode) => {
    setSelectedCountry(selectedCountryCode);

    // Fetch additional details about the selected country
    await fetchCountryDetails(selectedCountryCode);



    // Clear the suggestions and search term
    setSuggestedCountries([]);
    setSearchTerm('');
  };
  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div className="suggestions">
          {suggestedCountries.map((country) => (
            <div
              key={country.cca2}
              onClick={() => handleCountrySelect(country.cca2)}
            >
              {country.name.common}
            </div>
          ))}
        </div>
      </div>

      {selectedCountry && countryDetails && (
        <div className="country-details">
          <div className="country-info">
            <h2>{countryDetails?.name.common}</h2>

            {countryDetails?.capital && countryDetails.capital.length > 0 ? (
              <p>Capital City: {countryDetails.capital[0]}</p>
            ) : (
              <p>Capital City: No Data</p>
            )}

            {countryDetails?.currencies && Object.keys(countryDetails.currencies).length > 0 ? (
              <p>
                Currencies:{" "}
                {Object.values(countryDetails.currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            ) : (
              <p>Currencies: No Data</p>
            )}

            {countryDetails?.languages && Object.keys(countryDetails.languages).length > 0 ? (
              <p>
                Languages:{" "}
                {Object.values(countryDetails.languages)
                  .map((l) => l)
                  .join(", ")}
              </p>
            ) : (
              <p>Languages: No Data</p>
            )}

            {countryDetails?.timezones && Object.keys(countryDetails.timezones).length > 0 ? (
              <p>
                Timezones: {countryDetails.timezones[0]}
              </p>
            ) : (
              <p>Timezones: No Data</p>
            )}
          </div>
          {countryDetails?.capital && Object.keys(countryDetails.capital).length > 0 ? (
          <MapComponent selectedCityName={countryDetails?.capital[0]} />
          ) : (
            <p>Capital: No Data</p>
          )}
        </div>
      )}
    </div>
  );
}
  