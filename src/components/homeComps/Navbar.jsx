import React from "react";

const Navbar = () => {
  return (
    <header className="main-header">
      {/* header-top */}
      <div className="header-top">
        <div className="large-container">
          <div className="top-inner">
            <ul className="links-list clearfix">
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Faq</a>
              </li>
              <li>
                <a href="#">Rewards</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
            </ul>
            <ul className="info-list clearfix">
              <li>
                <i className="icon-1" />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="icon-2" />
                Find Nearest Branch
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* header-lower */}
      <div className="header-lower">
        <div className="large-container">
          <div className="outer-box">
            <div className="logo-box">
              <div className="shape" />
              <figure className="logo">
                <a href="index.html">
                  <img src="/assets/images/logo.png" alt />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div
                  className="collaps navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li className="">
                      <a href="/service">Services</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="menu-right-content ml_70">
                <a href="/login" className="theme-btn btn-two mr_20">
                  Login
                </a>
                <a href="/sign-up" className="theme-btn btn-one">
                  Open Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sticky Header*/}
      <div className="sticky-header ">
        <div className="large-container">
          <div className="outer-box">
            <div className="logo-box">
              <div className="shape" />
              <figure className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
              <div className="menu-right-content ml_70">
                <a href="/login" className="theme-btn btn-two mr_20">
                  Login
                </a>
                <a href="/sign-up" className="theme-btn btn-one">
                  Open Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
