import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import Cart from "../pages/Cart";

const Navbar = () => {

     const navigate=useNavigate();
   const pageNavigate=()=>{
       navigate("/Cart")
    }
  return (
    <div
      className="navbar"
      style={{ display: "flex", gap: "40px", alignItems: "center" }}
    >
      <h1>GROCERIES</h1>
      <input className="search" type="text" placeholder="Search" />

      <div className="btn">
        <button className="cartBtn">
          <div className="count1">0</div>
          <a href="#" className="navHeart">
            <i className="fa fa-heart"></i>
          </a>
          <div className="count">0</div>
          <a onClick={pageNavigate}>
            <i className="cart fa fa-shopping-cart"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
