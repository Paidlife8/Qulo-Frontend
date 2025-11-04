"use client";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const NavComp = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("clicked now");
    localStorage.removeItem("elite-trust-finance-usertoken");
    localStorage.removeItem("elite-trust-finance-userid");
    deleteCookie("elite-trust-finance-usertoken");
    deleteCookie("elite-trust-finance-userid");
    router.push("/login");
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const reveal = document.querySelector(".meanmenu-reveal");
      if (reveal) {
        reveal.addEventListener("click", toggleMobileMenu);
        observer.disconnect(); // Stop observing once found
      }
    });

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev);
    };

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      const reveal = document.querySelector(".meanmenu-reveal");
      if (reveal) {
        reveal.removeEventListener("click", toggleMobileMenu);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="header-one">
      {/* End header top bar */}
      {/* Start header menu area */}
      <div id="sticker" className="header-area  hidden-xs">
        <div className="containe w-[90%] mx-auto ">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="row">
                {/* logo start */}
                <div className="col-md-2  col-sm-3">
                  <div className="logo">
                    {/* Brand */}
                    <a className="navbar-brand page-scroll" href="/">
                      <img
                        src="/img/logo/QULO_CREDIT-removebg-preview.png"
                        alt
                      />
                    </a>
                  </div>
                  {/* logo end */}
                </div>

                <div className="col-md-10  col-sm-9">
                  <div className="header-right-link">
                    {/* search option end */}
                    <a className="s-menu" onClick={handleLogout} href="#">
                      Logout
                    </a>
                  </div>
                  {/* mainmenu start */}
                  <nav className="navbar  navbar-default">
                    <div className="collaps navbar-collaps" id="navbar-example">
                      <div className="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                          <li class="active">
                            <a href="/dashboard">
                              <i class="ti-dashboard"></i> Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/international-bank-transfer">
                              <i class="ti-new-window"></i> Send Money
                            </a>
                            <ul class="sub-menu">
                              {/* <li>
                                <a href="/dashboard/interstate-bank-transfer">
                                  <i class="ti-new-window"></i> Interstate
                                  transfer
                                </a>
                              </li> */}
                              <li>
                                <a href="/dashboard/international-bank-transfer">
                                  <i class="ti-new-window"></i> International
                                  Transfer
                                </a>
                              </li>
                              <li>
                                <a href="/dashboard/local-bank-transfer">
                                  <i class="ti-new-window"></i> Local Transfer
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/dashboard/withdraw-money">
                              <i class="ti-import"></i> Recieve Money
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/transection-log">
                              <i class="ti-layout-list-thumb"></i> Transaction
                              Log
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/profile">
                              <i class="ti-settings"></i> profile
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/* mainmenu end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End header menu area */}
      {/* Start mobile menu area */}
      <div className="mobile-menu-area hidden-lg fixed w-[100%] hidden-md hidden-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile-menu">
                <div className="logo">
                  <a href="/">
                    <img src="/img/logo/QULO_CREDIT-removebg-preview.png" alt />
                  </a>
                </div>
                <nav id="dropdown">
                  <ul>
                    <li className="active">
                      <a href="/dashboard">
                        <i className="ti-dashboard"></i> Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/international-bank-transfer">
                        <i className="ti-new-window"></i> Send Money
                      </a>
                      <ul className="sub-menu">
                        {/* <li>
                          <a href="/dashboard/interstate-bank-transfer">
                            <i className="ti-new-window"></i> Interstate
                            transfer
                          </a>
                        </li> */}
                        <li>
                          <a href="/dashboard/international-bank-transfer">
                            <i className="ti-new-window"></i> International
                            Transfer
                          </a>
                        </li>
                        <li>
                          <a href="/dashboard/local-bank-transfer">
                            <i className="ti-new-window"></i> Local Transfer
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/dashboard/withdraw-money">
                        <i className="ti-import"></i> Recieve Money
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/transection-log">
                        <i className="ti-layout-list-thumb"></i> Transaction Log
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/profile">
                        <i className="ti-settings"></i> Profile
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* ✅ Show logout button only if menu is open */}
                {isMobileMenuOpen && (
                  <button
                    className="bg-[#eb292c] w-[100%] py-[5px] px-[15px] mt-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End mobile menu area */}
    </div>
  );
};

export default NavComp;
