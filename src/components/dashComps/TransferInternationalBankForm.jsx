"use client";
import { formatAmount, parseFormattedAmount } from "@/hooks/formatAmount";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import { setCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransferError from "./TransferError";

const TransferInternationalBankForm = ({ handleClick }) => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [isOnHold, setIsOnHold] = useState(false);
  const [amount, setAmount] = useState("");
  const [transferData, setTransferData] = useState({
    accountName: "",
    remark: "",
    bankName: "",
    routingNumber: "",
    country: "",
    ibanNumber: "",
    swiftCode: "",
  });
  const [errors, setErrors] = useState({});

  const accountNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    // const newValue = value.replace(/\D/g, "").slice(0, 10);
    setAccountNumber(value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // setAmount(value);
    const numericValue = parseFloat(value.replace(/,/g, ""));

    if (!isNaN(numericValue) && numericValue <= 100000) {
      setAmount(value);
    } else if (value === "") {
      setAmount("");
      // onAmountChange("");
    }
  };

  const handleBlur = () => {
    const numericValue = parseFloat(amount.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      const formattedValue = formatAmount(numericValue);
      setAmount(formattedValue);
      handleAmountChange(numericValue > 1000000 ? 1000000 : numericValue);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setTransferData({
      ...transferData,
      [name]: value,
    });
  };

  const { profile, gettingProfile } = useSelector(profileSelector);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!transferData.accountName)
      newErrors.accountName = "Account name is required";
    if (!transferData.bankName) newErrors.bankName = "Bank name is required";
    if (!transferData.routingNumber)
      newErrors.routingNumber = "Routing number is required";
    if (!transferData.country) newErrors.country = "Country is required";
    if (!transferData.swiftCode) newErrors.swiftCode = "switf code is required";
    if (!accountNumber) newErrors.accountNumber = "Account number is required";
    if (!amount) newErrors.amount = "Amount is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const normalAmount = parseFormattedAmount(amount);

  console.log(normalAmount, "amount");
  const handleNext = () => {
    if (validate()) {
      if (profile?.accountStatus === "hold") {
        setIsOnHold(true);
      } else {
        const transferDetails = {
          accountNo: Number(accountNumber),
          amount: normalAmount,
          remark: transferData.remark,
          accountName: transferData.accountName,
          bankName: "Elite Trust Finance",
        };

        console.log(transferDetails, "transfer details");
        localStorage.setItem(
          "elite-trust-finance-transfer-details",
          JSON.stringify(transferDetails)
        );

        setCookie(
          "elite-trust-finance-transfer-details",
          JSON.stringify(transferDetails)
        );

        handleClick();
      }
    }
  };
  return (
    <>
      {isOnHold ? (
        <TransferError />
      ) : (
        <section className="dashboard-content">
          <div className="overlay pt-50">
            <div className="dashboard-content">
              <div className="send-money-form">
                <div className="form-text">
                  <h4 className="form-top">International transfer</h4>
                  <div className="form-inner">
                    <div className="form-container">
                      <div className="row  ">
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">Reciever's bank</label>
                          <input
                            type="text"
                            placeholder={"bank name"}
                            name="bankName"
                            value={transferData.bankName}
                            onChange={handleChange}
                            style={{ marginBottom: 0 }}
                          />
                          {errors.accountNumber && (
                            <label className="text-danger ">
                              {errors.accountNumber}
                            </label>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">
                            Reciever's Account Number
                          </label>
                          <input
                            type="text"
                            placeholder={"9099900999"}
                            value={accountNumber}
                            onChange={accountNumberChange}
                            style={{ marginBottom: 0 }}
                          />
                          {errors.accountNumber && (
                            <label className="text-danger ">
                              {errors.accountNumber}
                            </label>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">
                            Reciever's Account Name
                          </label>
                          <input
                            name="accountName"
                            value={transferData.accountName}
                            onChange={handleChange}
                            placeholder={"Account name"}
                            type="text"
                            style={{ marginBottom: 0 }}
                          />
                          {errors.accountName && (
                            <p className="text-danger  ">
                              {errors.accountName}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">Swift code</label>
                          <input
                            placeholder={9099}
                            value={transferData.swiftCode}
                            name="swiftCode"
                            onChange={handleChange}
                            type="text"
                            style={{ marginBottom: 0 }}
                          />
                          {errors.swiftCode && (
                            <p className="text-danger  ">{errors.swiftCode}</p>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">Routing Number</label>
                          <input
                            placeholder={9099}
                            value={transferData.routingNumber}
                            name="routingNumber"
                            onChange={handleChange}
                            type="text"
                            style={{ marginBottom: 0 }}
                          />
                          {errors.routingNumber && (
                            <p className="text-danger  ">
                              {errors.routingNumber}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">
                            Amount (max-limit is $100,000)
                          </label>
                          <input
                            value={amount}
                            onChange={handleAmountChange}
                            onBlur={handleBlur}
                            className="xxlr"
                            placeholder={400.0}
                            type="text"
                            style={{ marginBottom: 0 }}
                          />
                          {errors.amount && (
                            <p className="text-danger">{errors.amount}</p>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">Country</label>
                          <input
                            onChange={handleChange}
                            value={transferData.country}
                            name="country"
                            className="xxlr"
                            placeholder={"Country"}
                            type="text"
                            style={{ marginBottom: 0 }}
                          />
                          {errors.country && (
                            <p className="text-danger">{errors.country}</p>
                          )}
                        </div>
                        <div className="col-md-6 mb-[3rem] col-sm-6 col-xs-12">
                          <label htmlFor="m-send">Your Available Balance</label>
                          <input
                            type="text"
                            // defaultValue={}
                            value={`${formatAmount(
                              `${profile?.accountBalance}`
                            )}`}
                            id="m-send"
                            style={{ marginBottom: 0 }}
                          />
                        </div>
                        <div className="col-md-12 mb-[3rem] col-sm-12 col-xs-12">
                          <label htmlFor="textmsde">Description</label>
                          <textarea
                            name="remark"
                            onChange={handleChange}
                            value={transferData.remark}
                            placeholder={"Description"}
                            rows={4}
                          />
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <button onClick={handleNext}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TransferInternationalBankForm;
