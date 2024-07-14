import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import nike_banner from "./assets/nike_banner.jpg";
import adidas_banner from "./assets/adidas_banner.png"; 
import jordan_banner from "./assets/jordan_banner.jpg";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/nike" element={<ShopCategory banner={nike_banner} category="nike" />} />
        <Route path="/adidas" element={<ShopCategory banner={adidas_banner} category="adidas" />} />
        <Route path="/jordan" element={<ShopCategory banner={jordan_banner} category="jordan" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
