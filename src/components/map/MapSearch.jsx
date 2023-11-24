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
        const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase())
        );

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
            <p>
                Currencies:{" "}
                {Object.values(countryDetails?.currencies)
                .map(c => c.name)
                .join(", ")}
            </p>

            <p>
                Languages:{" "}
                {Object.values(countryDetails?.languages)
                .map(l => l)
                .join(", ")}
            </p>


            {/* Render the MapComponent with the selectedCityName eg London or Japan  <MapComponent selectedCityName={"london"} /> */}
            <MapComponent selectedCityName={countryDetails?.capital[0]} />


            <p>
                Timezones:{" "}
                {countryDetails?.timezones.map(tz => tz).join(", ")}
            </p>
            </div>
        )}
        </div>
    );
};
