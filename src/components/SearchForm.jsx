import { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-label">
        Enter a city:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g., New York"
          className="search-input"
        />
      </label>
      <button type="submit" className="search-button">
        Get Weather
      </button>
    </form>
  );
}

export default SearchForm;
