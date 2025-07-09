import React from "react";

const TransferError = ({ amount, accountName }) => {
  return (
    <section className="dashboard-section body-collapse pay step step-2 step-3 receive-3">
      <div className="overlay pt-50">
        <div className="container-fruid">
          <div className="main-content dashboard-content">
            <div className="request-submitted send-money-form py-60 mb-9 text-center">
              <div className="top-area form-text">
                <div className="icon-area w-[60px] h-[60px] mb-[4rem] mx-auto">
                  <img
                    src="/img/icon/error-icon.png"
                    className="w-[100%] rounded-2xl  "
                    alt="icon"
                  />
                </div>
                <h3 className="my-0">Transfer Restricted!</h3>
                <p className="receive">
                  Check account status or contact support
                </p>
                <a
                  style={{
                    background: "#17aac9",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "8px",
                    marginTop: "4rem",
                  }}
                  href="/dashboard"
                  className="mt-40  active"
                >
                  Back to Dashboard
                </a>
                {/* <h5>Manage payment request | Request another Payment</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferError;
