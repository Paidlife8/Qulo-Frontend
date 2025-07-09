"use client";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  transactionSelector,
  verifyOtp,
  sendOtp,
  sendCot,
} from "@/redux/features/transaction/transaction-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "@/constants/urls";
import axios from "axios";

const VerifyOtp = ({ otpCallback }) => {
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { sendingOtp, sentOtpSuccess, sendOtpError } =
    useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendOtp = async (e) => {
    const data = { accountNo: profile?.accountNo };
    try {
      setSending(true);
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(`${baseUrl}/user/create-otp`, data, {
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
      });
      console.log(response, "from response update request");
      if (response.status === 200) {
        setSending(false);
        toast("otp sent successfully!!!");
      }
    } catch (err) {
      console.log("The error", err);
      setSending(false);
    }
  };

  useEffect(() => {
    if (sentOtpSuccess) {
      toast("otp sent successfully!!!");
    }
  }, [sentOtpSuccess]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const data = { otp: otp };
    const accountData = { accountNo: profile?.accountNo };
    setVerifying(true);
    try {
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(
        `${baseUrl}/user/verify/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userAuthToken}`,
          },
        }
      );
      console.log(response, "from response update request");
      if (response.status === 200) {
        setVerifying(false);
        dispatch(sendCot(accountData));
        otpCallback();
      }
    } catch (err) {
      console.log("The error", err);
      toast.error(err?.response?.data?.msg);
      setVerifying(false);
    }
    // dispatch(verifyOtp(data));
  };

  return (
    <section className="dashboard-section md:w-[60%] mx-auto body-collapse pay step step-2">
      <div className="overlay pt-50">
        <div className="container-fruid dashboard-content ">
          <div className="main-content send-money-form">
            <div className="head-area d-flex form-text align-items-center justify-content-between">
              <h4 className="form-top">Make a Payment: Verify OTP</h4>
            </div>
            <div className="choose-recipient px-[30px]">
              <div className="step-area">
                <span className="mdr">Step 3 of 4</span>
                <h5> verify otp to proceed with transaction</h5>
              </div>
            </div>
            <div className=" form-inner">
              <div className="send-banance form-container">
                <span className="mdr">OTP</span>

                <div className="input-area">
                  <input
                    onChange={(e) => setOtp(e.target.value)}
                    className="xxlr"
                    placeholder={900099}
                    type="text"
                  />
                </div>
              </div>
              <div className=" md:px-[30px] flex flex-wrap gap-[1rem] my-[6rem]">
                {/* <a href="#" className="s-menu">
                  Go back
                </a> */}
                <a href="#" className="s-menu" onClick={handleSendOtp}>
                  {sending ? "sending..." : "Request Otp"}
                </a>
                <a href="#" onClick={handleVerifyOtp} className="s-menu">
                  {verifying ? "verifying..." : "Verify OTP"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
