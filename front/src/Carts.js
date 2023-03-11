import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            {product.name} - {product.price}$
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
