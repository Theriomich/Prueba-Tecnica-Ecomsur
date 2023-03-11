import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [product, setProduct] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${_id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [_id]);

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
