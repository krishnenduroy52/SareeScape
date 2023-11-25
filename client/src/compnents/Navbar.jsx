import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("sareelocalstorage");
    console.log(token);
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log(isLogin);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("doctor_ai_userID");
    setIsLogin(false);
  };
  return (
    <div>
      <Topbar />
      <div className="page-width">
        <div className="navbar-stop">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/files/svglogobst.svg" />
          </a>
          <ul>
            <a href="/collection/silk">
              <li>SILK</li>
            </a>
            <a href="/collection/cotton">
              <li>COTTON</li>
            </a>
            <a href="/collection?q=linen">
              <li>LINEN</li>
            </a>
            <a href="/collection?q=regional">
              <li>REGIONAL</li>
            </a>
            <a href="/collection?q=banarasia">
              <li>BANARASIA</li>
            </a>
            <a href="/collection?q=designer">
              <li>DESIGNER SAREES</li>
            </a>
          </ul>
          <div className="site-nav__icons">
            {isLogin == false ? (
              <Link
                className="site-nav__link site-nav__link--icon small--hide"
                to="/account"
              >
                <img src="image/user-icon.png" style={{ width: "23px" }} />
                <span className="icon__fallback-text">Log in</span>
              </Link>
            ) : (
              <Link
                className="site-nav__link site-nav__link--icon small--hide"
                to="/profile"
              >
                <img src="image/user-icon.png" style={{ width: "23px" }} />
                <span className="icon__fallback-text">Log in</span>
              </Link>
            )}
            <a
              href="/search"
              className="site-nav__link site-nav__link--icon js-search-header"
            >
              <img src="/image/search.png" />
              <span className="icon__fallback-text">Search</span>
            </a>
            <a
              href="/cart"
              className="site-nav__link site-nav__link--icon js-drawer-open-cart"
              aria-controls="CartDrawer"
              data-icon="bag-minimal"
            >
              <span className="cart-link">
                <img src="/image/cart.png" />
                <span className="icon__fallback-text">Cart</span>
                <span id="CartBubble" className="cart-link__bubble"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
