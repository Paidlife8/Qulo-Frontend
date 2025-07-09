"use client";
import React, { useState, useEffect } from "react";
// import TransferBankForm from "./TransferBankForm";
// import TransferDetails from "./TransferDetails";
// import VerifyOtp from "./VerifyOtp";
// import VerifyCot from "./VerifyCot";
// import CongratsModal from "./modals/CongratsModal";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  sendOtp,
  transactionSelector,
  createTransfer,
} from "@/redux/features/transaction/transaction-slice";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import TransferError from "../TransferError";
import TransferBankForm from "../TransferBankForm";
import TransferDetails from "../TransferDetails";
import VerifyOtp from "../VerifyOtp";
import VerifyCot from "../VerifyCot";
import TransferSuccess from "../TransferSuccess";
// import TransferSuccess from "./TransferSuccess";
// import TransferError from "./TransferError";

const TransferToSameBank = () => {
  const [currentStep, setCurrentStep] = useState("transfer-form");
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = transferDetails ? JSON.parse(transferDetails) : "";
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const {
    sendingOtp,
    sentOtpSuccess,
    sendOtpError,
    createTransferSuccess,
    createTransferError,
  } = useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendOtp = () => {
    const data = { accountNo: profile?.accountNo };
    dispatch(sendOtp(data));
  };

  const handleTransfer = () => {
    setCurrentStep("transfer-details");
  };
  const verifyDetails = () => {
    setCurrentStep("verify-otp");
  };

  const handleBackToForm = () => {
    setCurrentStep("transfer-form");
  };

  const otpCallback = () => {
    setCurrentStep("verify-cot");
  };

  const cotCallback = async () => {
    const requiredDetails = { ...detailsData };
    dispatch(createTransfer(requiredDetails));
  };

  useEffect(() => {
    if (createTransferSuccess === true) {
      setCurrentStep("transfer-successful");
    }
    // if (profile?.accountStatus === "hold") {
    //   setCurrentStep("error");
    // }
    // if (profile?.accountStatus === "blocked") {
    //   setCurrentStep("error");
    // }
  }, [profile]);
  return (
    <div>
      {currentStep === "error" && <TransferError />}
      {currentStep === "transfer-successful" && (
        <TransferSuccess accountName={"john"} amount={800} />
      )}
      {currentStep === "transfer-form" && (
        <TransferBankForm handleClick={handleTransfer} />
      )}
      {currentStep === "transfer-details" && (
        <TransferDetails
          handlePrev={handleBackToForm}
          verifyDetails={verifyDetails}
        />
      )}
      {currentStep === "verify-otp" && <VerifyOtp otpCallback={otpCallback} />}

      {currentStep === "verify-cot" && <VerifyCot cotCallback={cotCallback} />}
      {/* <CongratsModal /> */}
    </div>
  );
};

export default TransferToSameBank;
