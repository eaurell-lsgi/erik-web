import { Link } from 'react-router-dom';
import './Navbar.css'; // Si prefieres CSS tradicional

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Grand Theft Auto V</h1>
        <ul className="navbar-links">
          <li><Link to="/">Principal</Link></li>
          <li><Link to="/Pagina2">Personajes</Link></li>
          <li><Link to="/Erik">Mapa</Link></li>
          <li><Link to="/Vehicles">Vehiculos</Link></li>


        </ul>
      </div>
    </nav>
  );
};
