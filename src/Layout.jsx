import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.jsx';

function Layout() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>Simple Weather App · Powered by Open-Meteo</p>
      </footer>
    </div>
  );
}

export default Layout;
