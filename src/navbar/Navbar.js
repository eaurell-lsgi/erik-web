import { Link } from 'react-router-dom';
import './Navbar.css'; // Si prefieres CSS tradicional

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Videojoc GTA V</h1>
        <ul className="navbar-links">
          <li><Link to="/">Página principal</Link></li>
          <li><Link to="/Pagina2">Personatjes</Link></li>
          <li><Link to="/Erik">Mapa</Link></li>
          <li><Link to="/Vehicles">Vehicles</Link></li>


        </ul>
      </div>
    </nav>
  );
};
