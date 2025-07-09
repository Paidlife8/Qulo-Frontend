"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoginError from "./LoginError";

const LoginContents = () => {
  const router = useRouter();
  const [blocked, setBlocked] = useState(false);
  const [errors, setErrors] = useState({});
  const [registering, setRegistering] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [password, setPassword] = useState("");

  const accountNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    const newValue = value.replace(/\D/g, "").slice(0, 10);
    setAccountNumber(newValue);
  };

  const transactionPinChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    const newValue = value.replace(/\D/g, "").slice(0, 4);
    setTransactionPin(newValue);
  };

  const passwordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("clicked");
      const formData = {
        accountNo: accountNumber,
        password: password,
        transactionPin: transactionPin,
      };
      // Submission logic here
      setRegistering(true);
      console.log("Form Data:", formData);
      const response = await axios.post(
        "https://qulo-server.onrender.com/user/login",
        formData
      );
      console.log(response, "response");
      setRegistering(false);
      if (response.status === 200) {
        if (response?.data?.userStatus === "blocked") {
          setBlocked(true);
        } else {
          localStorage.setItem(
            "elite-trust-finance-userid",
            response?.data?.userId
          );
          localStorage.setItem(
            "elite-trust-finance-usertoken",
            response?.data?.token
          );
          setCookie("elite-trust-finance-userid", response?.data?.userId);
          setCookie("elite-trust-finance-usertoken", response?.data?.token);
          toast(response?.data?.msg);

          router.push("/dashboard").then(() => {
            window.location.reload(); // Refresh after successful navigation
          });
        }
      }
    } catch (e) {
      console.log(e, "error");
      console.log(e?.response?.data?.msg);
      toast.error(e?.response?.data?.msg);
      setRegistering(false);
    }
  };
  return (
    <div className="login-area area-padding h-[100vh]  fix">
      {!blocked && <div className="login-overlay" />}

      <div className="table">
        <div className="table-cell">
          <div className="containe">
            <div className="row">
              {blocked && <LoginError />}
              {!blocked && (
                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-12">
                  <div className="login-form">
                    <h4 className="login-title text-center">LOGIN</h4>
                    <div className="row">
                      <div className="log-form">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <input
                            className="form-control"
                            type="text"
                            onChange={accountNumberChange}
                            value={accountNumber}
                            placeholder="Enter Your Account No"
                            required
                            data-error="Please enter your name"
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="password"
                            onChange={passwordChange}
                            value={password}
                            placeholder="Enter Your Password"
                            className="form-control"
                            required
                            data-error="Please enter your message subject"
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="password"
                            placeholder="Enter Your Pin"
                            value={transactionPin}
                            onChange={transactionPinChange}
                            className="form-control"
                            required
                            data-error="Please enter your message subject"
                          />
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                          <button
                            onClick={handleLogin}
                            className="slide-btn login-btn"
                          >
                            {registering ? "loging...." : "Login"}
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          />
                          <div className="clearfix" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                          <div className="sign-icon">
                            <div className="acc-not">
                              Don't have an account?
                              <a href="/sign-up">Sign up</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContents;
