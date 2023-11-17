import React, { useState, useEffect } from 'react';

function App() {
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

  const fetchCountryDetails = (countryCode) => {
    // Find the selected country in the countries array
    const selectedCountryData = countries.find(
      (country) => country.cca2 === countryCode
    );

    // Fetch additional details based on the selected country
    // For example, you can fetch more details from another API or use the existing data
    // For simplicity, I'm just using the existing data here
    setCountryDetails(selectedCountryData);
  };

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter countries based on the input term
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );

    // Display suggestions
    setSuggestedCountries(filteredCountries);
  };

  const handleCountrySelect = (selectedCountryCode) => {
    setSelectedCountry(selectedCountryCode);

    // Fetch additional details about the selected country
    fetchCountryDetails(selectedCountryCode);

    // Clear the suggestions and search term
    setSuggestedCountries([]);
    setSearchTerm('');
  };
  console.log('countryDetails:', countryDetails);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div>
        {suggestedCountries.map((country) => (
          <div
            key={country.cca2}
            onClick={() => handleCountrySelect(country.cca2)}
            style={{ cursor: 'pointer', padding: '5px' }}
          >
            {country.name.common}
          </div>
        ))}
      </div>
      {selectedCountry && (
        <div>
          <h2>{countryDetails?.name.common}</h2>
          <p>Capital City: {countryDetails?.capital[0]}</p>
          <p>Currency: {countryDetails?.currencies.name}</p>
          <p>Languages: {countryDetails?.languages[0]}</p>
          <p>Maps: {countryDetails?.currencies?.[0]}</p>
          <p>TimeZone: {countryDetails?.currencies?.[0]}</p>
        </div>
      )}
    </div>
  );
}

export default App;
