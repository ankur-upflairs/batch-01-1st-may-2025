import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import Error404 from "./pages/Error404";
import SingleProduct from "./pages/SingleProduct";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/products"}>Products</Link>
        <br />
        <Link to={"/cart"}>Cart</Link> */}
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <NavLink to={"/"}>Home</NavLink>
          <br />
          <NavLink to={"/products"}>Products</NavLink>
          <br />
          <NavLink to={"/cart"}>Cart</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
