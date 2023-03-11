import { useState, useEffect } from "react";

function Details() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/")
      .then((response) => response.json())
      .then((data) => setProduct(data[0]))
      .catch((error) => console.log(error));
  }, []);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-details">
      <p>Descripción: {product.description}</p>
      <p>Stock: {product.countInStock}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}

export default Details;
