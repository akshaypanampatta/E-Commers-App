import HomePage from "./Pages/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Contact from "./Components/Contact/Contact";
import ErrorPage from "./Components/404-error/ErrorPage";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Product added to cart");
  };
   const removeFromCart = (itemToRemove) => {
     setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
     alert("Product Removed From Cart")
   };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:names" element={<Category />} />
        <Route
          path="/products/:id"
          element={<SingleProduct addToCart={addToCart} />}
        />
        <Route
          path="/categories/:names/:id"
          element={<SingleProduct addToCart={addToCart} />}
        />
        <Route
          path="/products/:names/:id"
          element={<SingleProduct addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
