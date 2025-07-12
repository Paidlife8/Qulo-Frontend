"use client";

import React, { useEffect, useState } from "react";
// import TransferBankForm from "./TransferBankForm";
// import TransferDetails from "./TransferDetails";
// import VerifyOtp from "./VerifyOtp";
// import VerifyCot from "./VerifyCot";
// import CongratsModal from "./modals/CongratsModal";
// import TransferLocalBankForm from "./TransferLocalBankForm";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { createTransfer } from "@/redux/features/transaction/transaction-slice";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import TransferDetails from "../TransferDetails";
import VerifyOtp from "../VerifyOtp";
import VerifyCot from "../VerifyCot";
import TransferError from "../TransferError";
import TransferLocalBankForm from "../TransferLocalBankForm";
// import TransferError from "./TransferError";

const TransferToLocalBank = () => {
  const [currentStep, setCurrentStep] = useState("transfer-form");
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = transferDetails ? JSON.parse(transferDetails) : "";
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);

  const handleTransfer = () => {
    setCurrentStep("transfer-details");
  };
  const verifyDetails = () => {
    setCurrentStep("verify-cot");
  };

  const otpCallback = () => {
    setCurrentStep("verify-cot");
  };

  const cotCallback = async () => {
    const requiredDetails = { ...detailsData };
    dispatch(createTransfer(requiredDetails));
  };

  // useEffect(() => {
  //   if (profile?.accountStatus === "hold") {
  //     setCurrentStep("error");
  //   }
  //   if (profile?.accountStatus === "blocked") {
  //     setCurrentStep("error");
  //   }
  // }, [profile]);
  return (
    <div>
      {currentStep === "error" && <TransferError />}
      {currentStep === "transfer-form" && (
        <TransferLocalBankForm handleClick={handleTransfer} />
      )}
      {currentStep === "transfer-details" && (
        <TransferDetails verifyDetails={verifyDetails} />
      )}
      {currentStep === "verify-otp" && <VerifyOtp otpCallback={otpCallback} />}

      {currentStep === "verify-cot" && <VerifyCot cotCallback={cotCallback} />}
      {/* <CongratsModal /> */}
    </div>
  );
};

export default TransferToLocalBank;
