
import "./Navbar.css"
import {BiLogIn} from "react-icons/bi"
import { BsPersonFillAdd } from "react-icons/bs";
import {HiShoppingCart} from "react-icons/hi"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react";
const Navbar = () => {
  const [state,setState]=useState(false);
  
 
  return (
    <div className={state === false ? "navbar" : "navbar1"}>
      <h1>
        <span className="s">S</span>tyle <span className="s">S</span>phere
      </h1>
      <span>
        <ul className={state === false ? "totallist" : "totallist1"}>
          <li className={state === false ? "list" : "list1"}>Home</li>
          <li className={state === false ? "list" : "list1"}>Products</li>
          <li className={state === false ? "list" : "list1"}>About</li>
          <li className={state === false ? "list" : "list1"}>Contact</li>
        </ul>
      </span>
      <span className={state === false ? "buttons" : "buttons1"}>
        <button className={state === false ? "button" : "button1"}>
          <BiLogIn />
          Login
        </button>
        <button className={state === false ? "button" : "button1"}>
          <BsPersonFillAdd />
          Register
        </button>
        <button className={state === false ? "button" : "button1"}>
          <HiShoppingCart />
          Cart(0)
        </button>
      </span>
      <span className="menubar" onClick={() => setState(!state)}>
        <GiHamburgerMenu />
      </span>
    </div>
  );
};

export default Navbar;
