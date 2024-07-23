import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar flex items-center justify-around p-4 shadow-sm hover:shadow-xl transition duration-300">
      <div className="nav-logo flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 sm:h-16 sm:w-16 cursor-pointer rounded-full object-cover"
        />
        <p className="text-2xl font-semibold text-gray-900">SNEAKERS VAULT</p>
      </div>
      <IoIosArrowDropdown
        className="nav-dropdown h-[40px] w-[40px]"
        onClick={dropdown_toggle}
      />
      <ul
        ref={menuRef}
        className="Nav-menu flex items-center list-none gap-12 text-gray-700 text-lg font-medium"
      >
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("nike")}
        >
          <Link to="/nike">Nike</Link>
          {menu === "nike" ? <hr /> : null}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("adidas")}
        >
          <Link to="/adidas">Adidas</Link>
          {menu === "adidas" ? <hr /> : null}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("jordan")}
        >
          <Link to="/jordan">Jordan</Link>
          {menu === "jordan" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11">
        <Link to="/login">
          <button className="w-[157px] h-[58px] outline-none border-gray-400 border-2 border-solid rounded-[75px] text-gray-700 text-[20px] font-medium bg-white cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <FaCartPlus className="h-6 w-6" />
        </Link>
        <div className="nav-cart-count h-[20px] w-[20px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-xl text-[14px] bg-red-500 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
