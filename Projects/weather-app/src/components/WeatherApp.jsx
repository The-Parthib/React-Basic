import React from "react";
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import { useState, useEffect } from "react";
import { searchCity } from "../lib/api.js";

const WeatherApp = () => {
  const [inputValue, setInputValue] = useState("Howrah");
  const [city, setCity] = useState("Howrah");
  const [weatherData, setWeatherData] = useState({});
  const [wbIcon, setWbIcon] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  // Debouncer for input - delays state update
  useEffect(() => {
    const timer = setTimeout(() => {
      // Debounce logic: could auto-search after delay if needed
      // For now, we'll only search on button click
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  // API call triggered by search button click
  useEffect(() => {
    const fetchWeather = async () => {
      const apiData = await searchCity(city);
      if (apiData && apiData.main) {
        const iconCode = apiData.weather[0].icon;
        setWeatherData({
          humidity: apiData.main.humidity,
          temperature: Math.floor(apiData.main.temp),
          location: apiData.name,
          wind: apiData.wind.speed,
          icon: iconCode,
        });
        // Set the icon URL
        setWbIcon(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
      }
    };
    fetchWeather();
  }, [searchClicked]);

  return (
    <div className="w-xl bg-linear-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(inputValue);
              setSearchClicked(!searchClicked);
            }
          }}
          className="flex-1 h-12 px-5 rounded-full bg-white/90 text-gray-700 placeholder-gray-500 outline-none text-base"
        />
        <button
          onClick={() => {
            setCity(inputValue);
            setSearchClicked(!searchClicked);
          }}
          className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
        >
          <img src={searchIcon} alt="search" className="w-5 h-5" />
        </button>
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        {wbIcon && (
          <img src={wbIcon} alt="weather icon" className="w-32 h-32" />
        )}
      </div>

      {/* Temperature */}
      <div className="text-center mb-2">
        <h1 className="text-7xl font-light text-white">
          {weatherData.temperature}°c
        </h1>
      </div>

      {/* City Name */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-normal text-white">
          {weatherData.location}
        </h2>
      </div>

      {/* Weather Details */}
      <div className="flex justify-between px-4">
        {/* Humidity */}
        <div className="flex items-center gap-3">
          <img src={humidityIcon} alt="humidity" className="w-10 h-10" />
          <div className="text-white">
            <p className="text-xl font-medium">{weatherData.humidity}%</p>
            <p className="text-sm opacity-80">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center gap-3">
          <img src={windIcon} alt="wind" className="w-10 h-10" />
          <div className="text-white">
            <p className="text-xl font-medium">{weatherData.wind} Km/h</p>
            <p className="text-sm opacity-80">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
