"use client";
import { displayInitials } from "@/constants/displayInitials";
import { formatAmount } from "@/hooks/formatAmount";
import { uploadImage } from "@/hooks/imageUpload";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import {
  sendOtp,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ReceiveMoneyComp = () => {
  const dispatch = useDispatch();
  const { profile, gettingProfile } = useSelector(profileSelector);
  const [updatingImage, setUpdatingImage] = useState(false);
  const userInitials = displayInitials(
    `${profile?.firstName} ${profile?.lastName}`
  );

  const handleFileChange = async (event) => {
    setUpdatingImage(true);
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      // setImage(selectedFile);

      try {
        const result = await uploadImage(selectedFile, profile._id);
        toast("Image uploaded successfully");
        console.log("Image uploaded successfully:", result);
        setUpdatingImage(false);
        dispatch(getProfile());
      } catch (error) {
        console.error("Failed to upload image:", error);
        setUpdatingImage(false);
      }
    }
  };

  console.log(profile, "profile");

  return (
    <section className="dashboard-section lg:w-[60%] mx-auto dashboard-content body-collapse pay step step-2 step-3">
      <div className="overlay pt-50 pb-[12rem] ">
        <div className="container-fruid dashboard-content">
          <div className="main-content send-money-form ">
            <div className="head-area d-flex form-text align-items-center justify-content-between">
              <h4 className="form-top">Receive Money</h4>
            </div>

            <div className="payment-details my-[5rem] px-[50px]">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="flex flex-col gap-[2rem] ">
                    <li className="flex gap-[3rem] ">
                      <span>Bitcoin Wallet Address:</span>
                      <b>{profile?.firstName}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>First Name:</span>
                      <b>{profile?.firstName}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Last Name:</span>
                      <b className="capitalize">{profile?.lastName}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Email:</span>
                      <b>{profile?.email}</b>
                    </li>

                    <li className="flex gap-[3rem] ">
                      <span>Account Number:</span>
                      <b>{profile?.accountNo}</b>
                    </li>

                    {/* <li>
                      <span>Transfer will be receive on </span>
                      <b>29 June at 10:0 PM </b>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-[4rem]">
              <div className="checkbox px-[15px] "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveMoneyComp;
