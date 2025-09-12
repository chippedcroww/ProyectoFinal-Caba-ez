import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          MiTienda
        </Link>

        {/* Bloque derecho: carrito + toggler */}
        <div className="d-flex align-items-center">
          {/* Botón hamburguesa primero */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Carrito después */}
          <CartWidget />
        </div>

        {/* Links colapsables */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa">
                Ropa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronica">
                Electrónica
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
