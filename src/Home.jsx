import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page page-home">
      <h1>Welcome to React Weather</h1>
      <p>
        This simple app uses a public weather API (Open-Meteo) to show current
        weather for a city you search.
      </p>
      <p>
        It demonstrates:
      </p>
      <ul>
        <li>React components and props</li>
        <li>React Router navigation</li>
        <li>Asynchronous data fetching from an external API</li>
        <li>State management and controlled inputs</li>
      </ul>
      <Link to="/weather" className="primary-link">
        Try the Weather Search
      </Link>
    </section>
  );
}

export default Home;
