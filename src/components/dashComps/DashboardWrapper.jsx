"use client";
import Script from "next/script";
import React, { useEffect, useLayoutEffect } from "react";
import NavComp from "./NavComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import {
  getTransfers,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { redirect, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const DashboardWrapper = ({ children }) => {
  const router = useRouter();
  const authenticated = getCookie("elite-trust-finance-usertoken");
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);

  useLayoutEffect(() => {
    const isAuth = authenticated;
    if (!isAuth) {
      redirect("/login");
    }
  }, []);
  return (
    <>
      {gettingTransactions && <div id="preloader"></div>}

      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Dashboard | Bultifore</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- favicon -->		 */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/img/logo/favicon.ico"
        />

        {/* <!-- all css here --> */}

        {/* <!-- bootstrap v3.3.6 css --> */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* <!-- owl.carousel css --> */}
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/owl.transitions.css" />
        {/* <!-- Animate css --> */}
        <link rel="stylesheet" href="/css/animate.css" />
        {/* <!-- Nice-select css --> */}
        <link rel="stylesheet" href="/css/nice-select.css" />
        {/* <!-- meanmenu css --> */}
        <link rel="stylesheet" href="/css/meanmenu.min.css" />
        {/* <!-- font-awesome css --> */}
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        {/* <!-- magnific css --> */}
        <link rel="stylesheet" href="/css/magnific.min.css" />
        {/* <!-- style css --> */}
        <link rel="stylesheet" href="/style.css" />
        {/* <!-- responsive css --> */}
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* <!-- modernizr css --> */}
        <Script src="/js/vendor/modernizr-2.8.3.min.js"></Script>
      </head>
      <>
        {/* <HeaderComp /> */}
        <NavComp />
        <div className="page-area">
          <div className="breadcumb-overlay"></div>
        </div>
        <div className="dsahboard-area bg-color area-padding">
          <div className="containe lg:w-[85%] w-[90%] mx-auto ">{children}</div>
        </div>
      </>

      {/* <!-- jquery latest version --> */}
      {/* <Script src="/js/vendor/jquery-1.12.4.min.js"></Script> */}
      <Script
        src="/js/vendor/jquery-1.12.4.min.js"
        strategy="beforeInteractive"
      />

      {/* <!-- bootstrap js --> */}
      <Script src="/js/bootstrap.min.js"></Script>
      {/* <!-- owl.carousel js --> */}
      <Script src="/js/owl.carousel.min.js"></Script>
      {/* <!-- stellar js --> */}
      <Script src="/js/jquery.stellar.min.js"></Script>
      {/* <!-- magnific js --> */}
      <Script src="/js/magnific.min.js"></Script>
      {/* <!-- Nice-select js --> */}
      <Script src="/js/jquery.nice-select.min.js"></Script>
      {/* <!-- wow js --> */}
      <Script src="/js/wow.min.js"></Script>
      {/* <!-- meanmenu js --> */}
      {/* <Script src="/js/jquery.meanmenu.js"></Script> */}
      <Script src="/js/jquery.meanmenu.js" strategy="afterInteractive" />

      {/* <!-- Form validator js --> */}
      <Script src="/js/form-validator.min.js"></Script>
      {/* <!-- plugins js --> */}
      <Script src="/js/plugins.js"></Script>
      {/* <!-- main js --> */}
      <Script src="/js/main.js"></Script>
    </>
  );
};

export default DashboardWrapper;
