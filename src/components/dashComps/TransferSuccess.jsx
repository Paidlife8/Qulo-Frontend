import React from "react";

const TransferSuccess = ({ amount, accountName }) => {
  return (
    <section className="dashboard-section body-collapse pay step step-2 step-3 receive-3">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content dashboard-content">
            <div className="request-submitted pb-120 text-center">
              <div className="top-area form-text">
                <div className="icon-area w-[60px] h-[60px] mb-[4rem] mx-auto">
                  <img
                    src="/img/icon/submitted-icon.png"
                    className="w-[100%]   "
                    alt="icon"
                  />
                </div>
                <h3>Transfer Successful</h3>
                <p className="receive">
                  You have successfully transferred ${amount} to {accountName}
                </p>
                <a
                  style={{
                    background: "#165A1D",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                  href="/dashboard"
                  className="mt-40 border-5 active"
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

export default TransferSuccess;
