"use client";

import { deleteCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const NavComp = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    console.log("clicked logout");
    localStorage.removeItem("elite-trust-finance-usertoken");
    localStorage.removeItem("elite-trust-finance-userid");
    deleteCookie("elite-trust-finance-usertoken");
    deleteCookie("elite-trust-finance-userid");
    router.push("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined" && window.$) {
        try {
          $("#dropdown").meanmenu(); // mobile nav re-initialization
        } catch (err) {
          console.warn("Meanmenu init failed:", err);
        }
      }
    }, 300);
  }, [pathname]);

  return (
    <div className="header-one">
      {/* Desktop Menu */}
      <div id="sticker" className="header-area hidden-xs">
        <div className="containe w-[90%] mx-auto ">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="row">
                <div className="col-md-2 col-sm-3">
                  <div className="logo">
                    <a className="navbar-brand page-scroll" href="/">
                      <img src="/assets/images/logo.png" alt="Logo" />
                    </a>
                  </div>
                </div>

                <div className="col-md-10 col-sm-9">
                  <div className="header-right-link">
                    <button onClick={handleLogout} className="s-menu">
                      Logout
                    </button>
                  </div>
                  <nav className="navbar navbar-default">
                    <div className="collaps navbar-collaps" id="navbar-example">
                      <div className="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                          <li className="active">
                            <a href="/dashboard">
                              <i className="ti-dashboard"></i> Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/interstate-bank-transfer">
                              <i className="ti-new-window"></i> Send Money
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="/dashboard/interstate-bank-transfer">
                                  Interstate Transfer
                                </a>
                              </li>
                              <li>
                                <a href="/dashboard/international-bank-transfer">
                                  International Transfer
                                </a>
                              </li>
                              <li>
                                <a href="/dashboard/local-bank-transfer">
                                  Local Transfer
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/dashboard/withdraw-money">
                              <i className="ti-import"></i> Receive Money
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/transection-log">
                              <i className="ti-layout-list-thumb"></i>{" "}
                              Transaction Log
                            </a>
                          </li>
                          <li>
                            <a href="/dashboard/profile">
                              <i className="ti-settings"></i> Profile
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu-area hidden-lg fixed w-full hidden-md hidden-sm">
        <div className="container w-[95%]">
          <div className="row bg-[#0A0F20]">
            <div className="col-md-12">
              <div className="mobile-menu">
                <div className="logo">
                  <a href="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </a>
                </div>
                <nav id="dropdown" className="bg-[#0A0F20]">
                  <ul className="bg-[#0A0F20]">
                    <li className="active">
                      <a href="/dashboard">
                        <i className="ti-dashboard"></i> Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/interstate-bank-transfer">
                        <i className="ti-new-window"></i> Send Money
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/dashboard/interstate-bank-transfer">
                            Interstate Transfer
                          </a>
                        </li>
                        <li>
                          <a href="/dashboard/international-bank-transfer">
                            International Transfer
                          </a>
                        </li>
                        <li>
                         
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/dashboard/withdraw-money">
                        <i className="ti-import"></i> Receive Money
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
                    {/* <li> */}
                    <button
                      onClick={handleLogout}
                      className="bg-[#EB292C] text-white mt-2 w-[80%] py-[5px] px-[15px] rounded"
                    >
                      Logout
                    </button>
                    {/* </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComp;
