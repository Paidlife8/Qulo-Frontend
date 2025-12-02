import React from "react";

const LoginError = () => {
  return (
    <div className=" flex justify-center items-center login-overlay">
      <div className="  ">
        <section className=" w-[100%] mx-auto login-form  ">
          <div className="">
            <div className="container-fruid">
              <div className="main-content">
                <div className="request-submitted pb-10 text-center">
                  <div className="top-area">
                    <div className="icon-area w-[100px] h-[100px] mb-[4rem] mx-auto">
                      <img
                        src="/img/icon/error-icon.png"
                        alt="icon"
                        className="w-[100%] rounded-2xl  "
                        // style={{ marginBottom: "2rem" }}
                      />
                    </div>
                    <h3>Account Blocked!</h3>
                    <p className="receive">
                      your account has been blocked, please contact our support
                    </p>
                    <a
                      style={{
                        // background: "#5a1f16",
                        padding: "10px",
                        // color: "#fff",
                        borderRadius: "8px",
                      }}
                      href="mailto:qulocreditunion@gmail.com"
                      className="mt-40 border-5 cmn-btn"
                    >
                      contact support
                    </a>
                    {/* <h5>Manage payment request | Request another Payment</h5> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginError;
