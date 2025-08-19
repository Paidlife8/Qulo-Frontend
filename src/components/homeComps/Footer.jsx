import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="widget-section">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
          />
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
          />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <a href="/">
                    <Image
                      src="/img/logo/QULO_CREDIT-removebg-preview.png"
                      width={150}
                      height={50}
                      alt="Picture of the author"
                    />
                  </a>
                </figure>
                <p>
                  Tincidunt neque pretium lectus donec risus. Mauris mi tempor
                  nunc orc leo consequat vitae erat gravida lobortis nec et
                  sagittis.
                </p>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_40">
                <div className="widget-title">
                  <h4>Explore</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/service">Services</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Usefull Links</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <a href="/service">Credit Card</a>
                    </li>
                    <li>
                      <a href="/service">Saving Account</a>
                    </li>
                    <li>
                      <a href="/service">Digital Gift Cards</a>
                    </li>
                    <li>
                      <a href="/service">Apply for Loans</a>
                    </li>
                    <li>
                      <a href="/service">Mobile Application</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h4>Find Our Branch &amp; ATM</h4>
                </div>
                <div className="form-inner">
                  <form method="post" action="#">
                    <div className="form-group">
                      <div className="select-box">
                        <select className="wide">
                          <option data-display="Branch">Branch</option>
                          <option value={1}>California</option>
                          <option value={2}>Man City</option>
                          <option value={3}>New York</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="theme-btn btn-one">
                        Find on Map
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom centred">
        <div className="auto-container">
          <div className="copyright">
            <p>
              Copyright 2025 by <a href="/">QuloCreditUnion</a>. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
