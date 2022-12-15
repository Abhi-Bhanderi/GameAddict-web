import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar d-flex">
        <div className="navbar_logo left_side">
          <h1 className="logo text-white">JoGeek</h1>
        </div>
        <div
          className="navbar_links right_side d-flex"
          style={{ alignItems: "center" }}
        >
          <BiMenuAltRight className="menu-icon" />
          <ul className="navbar_links_list d-flex">
            <li className="nav_item">
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/about">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
