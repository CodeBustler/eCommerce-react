import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import items from "./components/Data";

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <NavBar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/eCommerce-react-app"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/eCommerce-react-app/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/eCommerce-react-app/search/:term"
            element={<SearchItem />}
          />
          <Route
            path="/eCommerce-react-app/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
