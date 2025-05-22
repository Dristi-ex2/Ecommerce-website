import "../Styling/navbar.css";
import cartlogo from "../assets/images/Cart.png";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main">
      <nav className="navbar">
        <div className="logo">
          <h1>TrendWave</h1>
        </div>

        <div className={isMenuOpen ? "list mobile-menu-active" : "list"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="signup-logout">
          <button className="signin">Signin</button>
          <button className="logout">Logout</button>
        </div>

        <div className="cart-logo">
          <img src={cartlogo} alt="cart" />
          <span>10</span>
        </div>

        <div
          className="mobile-navbar-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CgClose className="mobile-nav-icon close-outline" />
          ) : (
            <CgMenu className="mobile-nav-icon" />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
