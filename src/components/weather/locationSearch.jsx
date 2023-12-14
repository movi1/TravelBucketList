import "./locationSearch.css";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; /*wrapper for react select*/
import { location_api, locationApiOptions } from "./api";

const LocationSearch = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const dropDown =  (inputValue) => {
    return fetch(
      `${location_api}${inputValue}`,
      locationApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="search-container">
      <AsyncPaginate
        placeholder="Where do you want to travel to?"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={dropDown}
      />
    </div>
  );
};

export default LocationSearch;
