import React from "react";
import Topbar from "./Topbar";
const Navbar = () => {
  return (
    <div>
      <Topbar />
      <div className="page-width">
        <div className="navbar-stop">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/files/svglogobst.svg" />
          </a>
          <ul>
            <a href="/collection?q=silk">
              <li>SILK</li>
            </a>
            <a href="/collection?q=cotton">
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
          <div class="site-nav__icons">
            <a
              class="site-nav__link site-nav__link--icon small--hide"
              href="/account"
            >
              <img src="image/user-icon.png" style={{ width: "23px" }} />
              <span class="icon__fallback-text">Log in</span>
            </a>
            <a
              href="/search"
              class="site-nav__link site-nav__link--icon js-search-header"
            >
              <img src="/image/search.png" />
              <span class="icon__fallback-text">Search</span>
            </a>
            <a
              href="/cart"
              class="site-nav__link site-nav__link--icon js-drawer-open-cart"
              aria-controls="CartDrawer"
              data-icon="bag-minimal"
            >
              <span class="cart-link">
                <img src="/image/cart.png" />
                <span class="icon__fallback-text">Cart</span>
                <span id="CartBubble" class="cart-link__bubble"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
