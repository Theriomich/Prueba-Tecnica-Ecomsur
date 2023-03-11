import "./ProductList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./ProductDisplayPage";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../auth-context";
import Cart from "../Carts";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [numProducts, setNumProducts] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product._id === productId);

    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === productId);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === productId) {
            return { ...item, index: item.index + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id: productId,
            name: productToAdd.name,
            price: productToAdd.price,
            index: 1,
          },
        ];
      }
    });

    setNumProducts((prevNum) => prevNum + productToAdd.index);
  };

  return (
    <div className="ProducTitle">
      <h1>Productos</h1>

      <div className="container-items">
        {products.map((product) => (
          <div className="item" key={product._id}>
            <figure>
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.name}
              />
            </figure>
            <button className="detailsButton">
              <Link to={`/details/${product._id}`}>Detalles</Link>
            </button>

            <div className="info-product">
              <h2>{product.name}</h2>
              <p className="price">${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product._id)}
              className="buttonCart"
              disabled={product.countInStock === 0}
            >
              {product.countInStock === 0 ? "Agotado" : "Add To Cart"}
            </button>
          </div>
        ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
}

export default Products;
