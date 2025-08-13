"use client";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  sendCot,
  sendOtp,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TransferDetails = ({ verifyDetails, handlePrev }) => {
  const [otp, setOtp] = useState("");
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = JSON.parse(transferDetails);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { sendingCot, sentCotSuccess, sendOtpError } =
    useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendOtp = () => {
    if (otp.length === 4) {
      if (otp == profile?.transactionPin) {
        // toast("otp correct");
        const data = { accountNo: profile?.accountNo };
        dispatch(sendCot(data));
      } else {
        toast("wrong pin");
      }
    } else {
      toast("transaction pin is required!!!");
    }
  };

  useEffect(() => {
    if (sentCotSuccess) {
      verifyDetails();
    }
  }, [sentCotSuccess]);
  return (
    <section className="dashboard-section dashboard-content body-collapse pay step step-2 step-3">
      <div className="overlay pt-50">
        <div className="container-fruid dashboard-content">
          <div className="main-content send-money-form ">
            <div className="head-area d-flex form-text align-items-center justify-content-between">
              <h4 className="form-top">Make a Payment</h4>
            </div>
            <div className="choose-recipient px-[30px] ">
              <div className="step-area my-[3rem] ">
                <span className="mdr  ">Step 2 of 4</span>
                {/* <h5>Confirm Your Transfer</h5> */}
              </div>
            </div>
            <div className="payment-details px-[50px]">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="flex flex-col gap-[2rem] ">
                    <li>
                      <b>Transaction Pin</b>
                      <br />
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputType="password"
                        inputStyle={{
                          border: "2px solid red",
                          // background: "purple",
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                        }}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Amount to Send:</span>
                      <b>${detailsData?.amount} USD</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Recipient gets:</span>
                      <b>${detailsData?.amount} USD</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Account no:</span>
                      <b>{detailsData?.accountNo}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Name of receiver:</span>
                      <b>{detailsData?.accountName}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Transaction Fee:</span>
                      <b>Free</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Purpose:</span>
                      <b>{detailsData?.remark}</b>
                    </li>

I, [7/12/2025 3:22 PM]
{/* <li>
                      <span>Transfer will be receive on </span>
                      <b>29 June at 10:0 PM </b>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <>
              <div className="checkbox px-[15px] ">
                {/* <input type="checkbox" id="confirm" /> */}
                <label htmlFor="confirm">
                  By clicking Proceed payment you confirm the payment details
                  above
                </label>
              </div>
              <div className=" px-[30px] flex flex-wrap gap-[1rem] my-[6rem] ">
                <a onClick={handlePrev} className="s-menu" href="#">
                  Previous Step
                </a>
                <a
                  href="#"
                  className="s-menu"
                  onClick={handleSendOtp}
                  //   data-bs-toggle="modal"
                  //   data-bs-target="#transferMod"
                >
                  {sendingCot ? "..." : "Proceed payment"}
                </a>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferDetails;