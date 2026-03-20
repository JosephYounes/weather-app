function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    cityName,
    country,
    temperature,
    windSpeed,
    windDirection,
    weatherDescription,
    time,
  } = weather;

  return (
    <section className="weather-card">
      <h2 className="weather-title">
        {cityName}, {country}
      </h2>
      <p className="weather-time">
        As of: <strong>{time}</strong>
      </p>
      <p className="weather-temp">
        Temperature: <strong>{temperature}°C</strong>
      </p>
      <p>
        Conditions: <strong>{weatherDescription}</strong>
      </p>
      <p>
        Wind: <strong>{windSpeed} m/s</strong> (direction: {windDirection}°)
      </p>
    </section>
  );
}

export default WeatherCard;
