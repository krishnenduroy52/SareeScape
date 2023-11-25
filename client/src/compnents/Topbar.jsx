import React from "react";

const Topbar = () => {
  return (
    <div className="page-width">
      <div className="toolbar__content">
        <div className="toolbar__item menu">
          <ul className="toolbar__menu">
            <li>
              <a href="/pages/about-us">About Us</a>
            </li>
            <li>
              <a href="/pages/contact-bharatsthali">Contact Us</a>
            </li>
            <li>
              <a href="/collections/handloom-sarees">Handlooms</a>
            </li>
            <li>
              <a href="/collections/banarasi-saree">Banarasi</a>
            </li>
          </ul>
        </div>
        <div className="toolbar__item right-topbar">
          <ul className="inline-list toolbar__social">
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://instagram.com"
                title="BharatSthali on Instagram"
              >
                <img src="image/instagram.png" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com"
                title="BharatSthali on Facebook"
              >
                <img src="image/facebook.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="main-topbar">
    //   {/* Left tob bar */}
    //   <ul className="topbar topbar-left-nav">
    //     <li>About Us</li>
    //     <li>Contact Us</li>
    //     <li>Handlooms</li>
    //     <li>Banarasi</li>
    //   </ul>

    //   {/* Right Top bar */}
    //   <ul className="topbar topbar-right-nav">
    //     {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> */}
    //     <li>
    //       <a href="https://www.instagram.com/">
    //         <img
    //           src="/image/instagram.png"
    //           alt="instagram"
    //           className="top-icon"
    //         />
    //       </a>
    //     </li>
    //     <li>
    //       <a href="https://www.facebook.com">
    //         <img
    //           src="/image/facebook.png"
    //           alt="facebook"
    //           className="top-icon"
    //         />
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Topbar;
