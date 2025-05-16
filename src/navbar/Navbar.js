import { Link } from 'react-router-dom';
import './Navbar.css'; // Si prefieres CSS tradicional

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">La Meva Web</h1>
        <ul className="navbar-links">
          <li><Link to="/">Página principal</Link></li>
          <li><Link to="/Pagina2">Página 2</Link></li>
          <li><Link to="/Erik">Página 3</Link></li>

        </ul>
      </div>
    </nav>
  );
};
