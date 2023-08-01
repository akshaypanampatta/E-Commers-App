
import "./Navbar.css"
import {BiLogIn} from "react-icons/bi"
import { BsPersonFillAdd } from "react-icons/bs";
import {HiShoppingCart} from "react-icons/hi"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state,setState]=useState(false);

  return (
    <div className={state === false ? "navbar" : "navbar1"}>
      <h1 className="logo">
        <span className="s">S</span>tyle <span className="s">S</span>phere
      </h1>
      <span>
        <ul className={state === false ? "totallist" : "totallist1"}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <li className={state === false ? "list" : "list1"}>Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"./products"}>
            <li className={state === false ? "list" : "list1"}>Products</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"./about"}>
            <li className={state === false ? "list" : "list1"}>About</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"./Contact"}>
            <li className={state === false ? "list" : "list1"}>Contact</li>
          </Link>
        </ul>
      </span>

      <span className={state === false ? "buttons" : "buttons1"}>
        <Link style={{ textDecoration: "none" }} to={"./login"}>
          <button className={state === false ? "button1" : "button2"}>
            <BiLogIn />
            Login
          </button>
        </Link>
        <Link to={"./register"} style={{textDecoration:"none"}}>
          <button className={state === false ? "button1" : "button2"}>
            <BsPersonFillAdd />
            Register
          </button>
        </Link>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <button className={state === false ? "button1" : "button2"}>
            <HiShoppingCart />
            Cart
          </button>
        </Link>
      </span>
      <span className="menubar" onClick={() => setState(!state)}>
        <GiHamburgerMenu />
      </span>
    </div>
  );
};

export default Navbar;
