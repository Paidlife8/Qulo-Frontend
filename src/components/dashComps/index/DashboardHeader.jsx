"use client";
import { displayInitials } from "@/constants/displayInitials";
import { formatAmount } from "@/hooks/formatAmount";
import { uploadImage } from "@/hooks/imageUpload";
import { getProfile } from "@/redux/features/profile/profile-slice";
import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DashboardHeader = ({ profile }) => {
  const dispatch = useDispatch();
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
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="dashboard-head">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-dash-head">
                <div className="dashboard-profile">
                  <div className="amount-content">
                    <label
                      htmlFor="select-image"
                      className="edit-icon"
                      href="a-add-bank.html"
                    >
                      <i className="ti-pencil-alt" />
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
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-dash-head">
                <div className="dashboard-amount">
                  <div className="amount-content">
                    <i className="flaticon-028-money" />
                    <span className="pro-name">Account Balance</span>
                    <h6 className="pro-name">
                      $ {formatAmount(`${profile?.accountBalance}`)}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-dash-head">
                <div className="dashboard-amount">
                  <div className="amount-content">
                    <i className="flaticon-043-bank-2" />
                    <span className="pro-name">Account Number</span>
                    <h6 className="pro-name">{profile?.accountNo}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-dash-head">
                <div className="dashboard-amount">
                  <div className="amount-content">
                    <i className="flaticon-050-credit-card-2" />
                    <span className="pro-name">Routing Number</span>
                    <h6 className="pro-name">3278265925</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
