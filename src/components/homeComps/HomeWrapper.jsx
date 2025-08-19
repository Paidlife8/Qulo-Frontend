import Script from "next/script";
import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const HomeWrapper = ({ children }) => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <title>Qulo - Your Trusted Banking Partner</title>

        {/* <!-- Fav Icon --> */}
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />

        {/* <!-- Google Fonts --> */}
        {/* <link href="../../fonts.googleapis.com/css2bc25.css?family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"> */}
        {/* <link href="../../fonts.googleapis.com/css2c948.css?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"> */}

        {/* <!-- Stylesheets --> */}
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/nice-select.css" rel="stylesheet" />
        <link href="/assets/css/elpath.css" rel="stylesheet" />
        <link
          href="/assets/css/color/theme-color.css"
          id="jssDefault"
          rel="stylesheet"
        />
        <link href="/assets/css/switcher-style.css" rel="stylesheet" />
        <link href="/assets/css/rtl.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/module-css/banner.css" rel="stylesheet" />
        <link href="/assets/css/module-css/feature.css" rel="stylesheet" />
        <link href="/assets/css/module-css/about.css" rel="stylesheet" />
        <link href="/assets/css/module-css/service.css" rel="stylesheet" />
        <link href="/assets/css/module-css/calculator.css" rel="stylesheet" />
        <link href="/assets/css/module-css/video.css" rel="stylesheet" />
        <link href="/assets/css/module-css/funfact.css" rel="stylesheet" />
        <link href="/assets/css/module-css/apps.css" rel="stylesheet" />
        <link href="/assets/css/module-css/testimonial.css" rel="stylesheet" />
        <link href="/assets/css/module-css/news.css" rel="stylesheet" />
        <link href="/assets/css/module-css/subscribe.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        <link href="/assets/css/module-css/page-title.css" rel="stylesheet" />
        <link href="/assets/css/module-css/contact.css" rel="stylesheet"></link>
      </head>
      <>
        <div className="boxed_wrapper ltr">
          <Navbar />
          <MobileNav />
          <>{children}</>
          <Footer />
        </div>
        <Script src="/assets/js/jquery.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/assets/js/owl.js"></Script>
        <Script src="/assets/js/wow.js"></Script>
        <Script src="/assets/js/validation.js"></Script>
        <Script src="/assets/js/jquery.fancybox.js"></Script>
        <Script src="/assets/js/appear.js"></Script>
        <Script src="/assets/js/isotope.js"></Script>
        <Script src="/assets/js/parallax-scroll.js"></Script>
        <Script src="/assets/js/jquery.nice-select.min.js"></Script>
        <Script src="/assets/js/jQuery.style.switcher.min.js"></Script>
        <Script src="/assets/js/emi-calculator.js"></Script>

        {/* <!-- main-js --> */}
        <Script src="/assets/js/script.js"></Script>
      </>
    </>
  );
};

export default HomeWrapper;
