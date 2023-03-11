import React, { useState } from "react";
import carritoicono from "./img/carritoicono.png";
import "./Header.css";
import Cart from "../src/Carts";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="header">
      <div className="carrito">
        <h1 className="title">Prueba técnica front Ecomsur</h1>
        <img
          src={carritoicono}
          alt="Carrito de compras"
          onClick={() => setShowCart(!showCart)}
        />
        <div className="num-productos">{cart.length}</div>
      </div>
      {showCart && <Cart cart={cart} handleClearCart={handleClearCart} />}
    </div>
  );
}

export default Header;
