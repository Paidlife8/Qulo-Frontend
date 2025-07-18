import Image from "next/image";
import React from "react";

const MobileNav = () => {
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <i className="fas fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <a href="/">
            <Image
              src="/img/logo/QULO_CREDIT-removebg-preview.png"
              width={150}
              height={50}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        </div>
        <br />
        <div className=" mt-[2rem] ml_70">
          <a href="/login" className="theme-btn btn-two mr_20">
            Login
          </a>
          <a href="/sign-up" className="theme-btn btn-one">
            Open Account
          </a>
        </div>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Chicago 12, Melborne City, USA</li>
            <li>
              <a href="tel:+8801682648101">+88 01682648101</a>
            </li>
            <li>
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <a href="/">
                <span className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
