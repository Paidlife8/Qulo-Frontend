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

const ProfileDetailsComp = () => {
  //   const ProfileDetailsComp = getCookie("elite-trust-finance-transfer-details");
  const detailsData = {};
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
      <div className="overlay pt-50">
        <div className="container-fruid dashboard-content">
          <div className="main-content send-money-form ">
            <div className="head-area d-flex form-text align-items-center justify-content-between">
              <h4 className="form-top">Profile Details</h4>
            </div>
            <div className="choose-recipient px-[30px] ">
              <div className="step-area my-[3rem] ">
                <span className="mdr  ">Your account information</span>
                {/* <h5>Confirm Your Transfer</h5> */}
              </div>
            </div>
            <div className="single-dash-head">
              <div className="dashboard-profile">
                <div className="amount-conten relative">
                  <label
                    htmlFor="select-image"
                    className="edit-ico absolute top-[0.001rem] bg-[#1ba8c6] py-[3px] px-[7px] rounded-[50%]  right-[8.5rem] lg:right-[28.5rem]  "
                    href="a-add-bank.html"
                  >
                    <i className="ti-pencil-alt text-[20px] font-black  " />
                  </label>
                  <input
                    type="file"
                    hidden={true}
                    onChange={handleFileChange}
                    id="select-image"
                  />
                  {updatingImage ? (
                    <>
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    </>
                  ) : (
                    <div
                      className={
                        !profile?.image
                          ? "profile-img my-[2rem]  "
                          : "profile-img my-[0.5rem]  "
                      }
                    >
                      {!profile?.image ? (
                        <div className="userProfileImageText2 w-[50px] bg-[red] ">
                          <h2 className="text-[14px] px-[10px] rounded-2xl  py-[10px] bg-[blue]">
                            {userInitials}
                          </h2>
                        </div>
                      ) : (
                        <div className=" bg-[pink] p-[5px] border-2 rounded-[50%] border-[#1ba8c6] w-[80px] mx-auto max-h-[150px] flex justify-center ">
                          <img
                            className=" w-[100%] rounded-[50%]  "
                            src={`${profile?.image}`}
                            alt="image"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* <img src="img/about/profile.png" alt /> */}
                  <span className="pro-name">
                    {`${profile?.firstName} ${profile?.lastName}`}
                  </span>
                  <h6 className="pro-name">
                    Account Status:
                    <span className=" badge"> {profile?.accountStatus}</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="payment-details px-[50px]">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="flex flex-col gap-[2rem] ">
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
                      <span>Gender:</span>
                      <b className="capitalize">{profile?.gender}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Occupation:</span>
                      <b>{profile?.occupation}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Address:</span>
                      <b>{profile?.address}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Account Balance:</span>
                      <b>$ {formatAmount(`${profile?.accountBalance}`)}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Account Number:</span>
                      <b>{profile?.accountNo}</b>
                    </li>
                    <li className="flex gap-[3rem] ">
                      <span>Account Status:</span>
                      <b className="capitalize">{profile?.accountStatus}</b>
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

export default ProfileDetailsComp;
