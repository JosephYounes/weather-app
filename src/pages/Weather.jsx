import { useState } from "react";
import SearchForm from "../components/SearchForm.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (cityName) => {
    setStatus("loading");
    setErrorMessage("");
    setWeather(null);

    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        cityName
      )}&count=1&language=en&format=json`;

      const geoRes = await fetch(geoUrl);
      if (!geoRes.ok) throw new Error("Failed to fetch location data");
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(`No results found for "${cityName}"`);
      }

      const location = geoData.results[0];
      const { latitude, longitude, name, country } = location;

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

      const weatherRes = await fetch(weatherUrl);
      if (!weatherRes.ok) throw new Error("Failed to fetch weather data");

      const weatherData = await weatherRes.json();
      if (!weatherData.current_weather) {
        throw new Error("No current weather data available");
      }

      const current = weatherData.current_weather;

      const formattedWeather = {
        cityName: name,
        country: country || "Unknown",
        temperature: current.temperature,
        windSpeed: current.windspeed,
        windDirection: current.winddirection,
        weatherDescription: `Code ${current.weathercode}`,
        time: current.time,
      };

      setWeather(formattedWeather);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <section className="page page-weather">
      <h1>Check the Weather</h1>
      <SearchForm onSearch={handleSearch} />

      {status === "loading" && <p className="status">Loading weather...</p>}

      {status === "error" && (
        <p className="status status-error">{errorMessage}</p>
      )}

      {status === "success" && <WeatherCard weather={weather} />}
    </section>
  );
}

export default Weather;
