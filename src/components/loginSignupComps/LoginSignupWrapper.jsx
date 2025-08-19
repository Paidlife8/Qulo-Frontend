import Script from "next/script";
import React from "react";

const LoginSignupWrapper = ({ children }) => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Login - QuloCreditunion</title>
        <meta name="deScription" content="" />
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
        {/* <!-- font-icon css --> */}
        <link rel="stylesheet" href="/css/themify-icons.css" />
        {/* <!-- style css --> */}
        <link rel="stylesheet" href="/style.css" />
        {/* <!-- responsive css --> */}
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* <!-- modernizr css --> */}
        <Script src="/js/vendor/modernizr-2.8.3.min.js"></Script>
      </head>

      <>{children}</>

      {/* <!-- jquery latest version --> */}
      <Script src="/js/vendor/jquery-1.12.4.min.js"></Script>
      {/* <!-- bootstrap js --> */}
      <Script src="/js/bootstrap.min.js"></Script>
      {/* <!-- Form validator js --> */}
      <Script src="/js/form-validator.min.js"></Script>
      {/* <!-- plugins js --> */}
      <Script src="/js/plugins.js"></Script>
    </>
  );
};

export default LoginSignupWrapper;
