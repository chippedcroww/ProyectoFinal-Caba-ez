import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid d-flex flex-column">
        {/* Fila superior: hamburguesa izquierda, logo centro, carrito derecha */}
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Botón hamburguesa (visible en mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Logo centrado */}
          <Link to="/" className="navbar-brand mx-auto fw-bold fs-3">
            Mi Tienda
          </Link>

          {/* Carrito a la derecha */}
          <div>
            <CartWidget />
          </div>
        </div>

        {/* Fila inferior: menú de categorías */}
        <div
          className="collapse navbar-collapse justify-content-center mt-2"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/ropa" className="nav-link">
                Ropa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/zapatos" className="nav-link">
                Zapatos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/accesorios" className="nav-link">
                Accesorios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
