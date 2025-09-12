import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckOut";

export default function App() {
  return (
    <>
      {/* Barra de navegación fija arriba */}
      <NavBar />

      {/* Rutas de la aplicación */}
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </>
  );
}
