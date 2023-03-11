import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/ProductListPage";
import Details from "./routes/ProductDisplayPage";
import Header from "./Header";
import { ShoppingCartProvider } from "./auth-context";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [numProducts, setNumProducts] = useState(0);

  function countMore() {
    setNumProducts(numProducts + 1);
  }

  const handleAddProduct = (product) => {
    setAllProducts([...allProducts, product]);
    setNumProducts(numProducts + 1);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Products
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          handleAddProduct={handleAddProduct}
          countMore={countMore}
        />
      ),
    },
    { path: "/details/:_id", element: <Details /> },
  ]);

  return (
    <>
      <ShoppingCartProvider>
        <Header
          countProductss={numProducts}
          setCountProducts={setNumProducts}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
        />

        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
