import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="app-header">
      <div className="logo">React Weather</div>
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/weather"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Weather
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
