import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "./auth-context";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((product) => (
          <div clasName="productsOnCart" key={product.id}>
            {product.name} - {product.price}$
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
