import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import WeatherGraph from "./WeatherGraph";
import SearchBar from "./SearchBar";
import ForecastCard from "./ForecastCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const defaultCities = ["New York", "London", "Paris", "Tokyo", "Mumbai"];
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert(`Unable to fetch data for ${city}.`);
      return null;
    }
  };

  useEffect(() => {
   
    const initializeDefaultCities = async () => {
      const dataPromises = defaultCities.map((city) => fetchWeatherData(city));
      const results = await Promise.all(dataPromises);
      setCities(results.filter((data) => data !== null)); 
    };
    initializeDefaultCities();
  }, []);

  const addCity = async (city) => {
    if (cities.find((c) => c.city === city)) {
      alert("City already added.");
      return;
    }
    const data = await fetchWeatherData(city);
    if (data) setCities([...cities, data]);
  };

  const removeCity = (city) => {
    setCities(cities.filter((c) => c.city !== city));
    if (selectedCity?.city === city) setSelectedCity(null); // Deselect city if removed
  };

  return (
    <div className="backgroung-img">
    <div className="app-container">
      <h1 className="text-center my-5 bg-body-tertiary p-3 border border-3 border-warning rounded-3">
        Weather Forecast Dashboard
      </h1>
      <SearchBar onSearch={addCity} />
      <div className="weather-cards row">
        {cities.map((cityData) => (
          <WeatherCard
            key={cityData.city}
            data={cityData}
            onRemove={removeCity}
            onSelect={() => setSelectedCity(cityData)}
          />
        ))}
      </div>
      {selectedCity && (
        <div className="selected-city">
          <h2 className="text-center mt-4">Detailed Forecast</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <ForecastCard data={selectedCity} />
            </div>
            <div className="col-lg-6 col-md-12 ">
              <WeatherGraph data={selectedCity} />
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default App;
