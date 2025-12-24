import React from "react";
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="w-[380px] bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-12 px-5 rounded-full bg-white/90 text-gray-700 placeholder-gray-500 outline-none text-base"
        />
        <button className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
          <img src={searchIcon} alt="search" className="w-5 h-5" />
        </button>
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <img src={clearIcon} alt="weather" className="w-32 h-32" />
      </div>

      {/* Temperature */}
      <div className="text-center mb-2">
        <h1 className="text-7xl font-light text-white">16°c</h1>
      </div>

      {/* City Name */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-normal text-white">London</h2>
      </div>

      {/* Weather Details */}
      <div className="flex justify-between px-4">
        {/* Humidity */}
        <div className="flex items-center gap-3">
          <img src={humidityIcon} alt="humidity" className="w-10 h-10" />
          <div className="text-white">
            <p className="text-xl font-medium">91%</p>
            <p className="text-sm opacity-80">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center gap-3">
          <img src={windIcon} alt="wind" className="w-10 h-10" />
          <div className="text-white">
            <p className="text-xl font-medium">3.6 Km/h</p>
            <p className="text-sm opacity-80">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
