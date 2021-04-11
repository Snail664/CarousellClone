import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { categories } from "./categoriesObj";

function Header() {
  return (
    <nav className="header">
      <div className="header__topNavContainer">
        <div className="header__topNav">
          <div className="logo__container">
            <img
              className="logoWhite"
              src={process.env.PUBLIC_URL + "/images/carousell-logo-white.PNG"}
            />
            <p className="line">|</p>
          </div>
          <div className="categories">
            <Link className="link" to="/">
              <div id="Cars & Property" className="category__item">
                Cars & Property
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Fashion" className="category__item">
                Fashion
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Home & Living" className="category__item">
                Home & Living
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Mobiles & Electronics" className="category__item">
                Mobiles & Electronics
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Hobbies & Games" className="category__item">
                Hobbies & Games
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Jobs & Services" className="category__item">
                Jobs & Services
              </div>
            </Link>
            <Link className="link" to="/">
              <div id="Others" className="category__item">
                Others
              </div>
            </Link>
          </div>
          <div className="topNav__right">
            <p className="right__item">Register</p>
            <p className="right__item">Login</p>
          </div>
        </div>
      </div>
      <div id="dropdown" className="dropdown"></div>
      <div className="header__bottomNavContainer">
        <div className="header__bottomNav">
          <img
            className="logoRed"
            src={process.env.PUBLIC_URL + "/images/carousell-logo-red.PNG"}
          />
          <Searchbar />
          <button type="submit" className="sellButton">
            Sell
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
