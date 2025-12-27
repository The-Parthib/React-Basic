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
          description: apiData.weather[0].main,
        });
        // Set the icon URL
        setWbIcon(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
      }
    };
    fetchWeather();
  }, [searchClicked]);

  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search city..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCity(inputValue);
              setSearchClicked(!searchClicked);
            }
          }}
          className="flex-1 h-12 px-5 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 outline-none text-base border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
        />
        <button
          onClick={() => {
            setCity(inputValue);
            setSearchClicked(!searchClicked);
          }}
          className="w-12 h-12 rounded-full hover:bg-sky-100 flex items-center justify-center cursor-pointer hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          <img src={searchIcon} alt="search" className="w-5 h-5 invert" />
        </button>
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center mb-2">
        {wbIcon && (
          <div className="p-4 bg-linear-to-br from-sky-100 to-blue-100 rounded-full shadow-inner">
            <img
              src={wbIcon}
              alt="weather icon"
              className="w-24 h-24 drop-shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Weather description*/}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
          {weatherData.description}
        </span>
      </div>

      {/* Temperature */}
      <div className="text-center mb-1">
        <h1 className="text-7xl font-bold bg-linear-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
          {weatherData.temperature}°c
        </h1>
      </div>

      {/* City Name */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-700">
          {weatherData.location}
        </h2>
      </div>

      {/* Weather Details */}
      <div className="flex justify-between gap-4">
        {/* Humidity */}
        <div className="flex-1 flex items-center gap-3 bg-blue-500 rounded-2xl p-4 border border-sky-100">
          <div className="p-2 bg-sky-600 rounded-xl">
            <img src={humidityIcon} alt="humidity" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xl font-bold text-white">
              {weatherData.humidity}%
            </p>
            <p className="text-xs text-white font-medium">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex-1 flex items-center gap-3 bg-blue-500 rounded-2xl p-4 border border-sky-100">
          <div className="p-2 bg-sky-600 rounded-xl">
            <img src={windIcon} alt="wind" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xl font-bold text-white">
              {weatherData.wind} Km/h
            </p>
            <p className="text-xs text-white font-medium">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
