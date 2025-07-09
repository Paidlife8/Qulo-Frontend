"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import TransactionTable from "../TransactionTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import {
  getTransfers,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { formatAmount } from "@/hooks/formatAmount";

const DashIndex = () => {
  const [showDrop, setShowDrop] = useState(false);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);

  console.log(profile, "transactions");
  return (
    <>
      <div className=" flex gap-[4rem] ">
        <h6 onClick={() => setShowDrop(!showDrop)} className="relative">
          <a href="#" className="text-[#DC143C]">
            <i class="ti-new-window"></i> Send Money
          </a>
          <ul
            style={{ padding: 10 }}
            className={
              showDrop
                ? "sub-menu absolute z-40 bg-[#fff] rounded-2xl w-[250px] p-[2rem] "
                : "sub-menu absolute z-40 bg-[#fff] hidden rounded-2xl w-[250px] p-[2rem] "
            }
          >
            <li>
              <a href="/dashboard/interstate-bank-transfer">
                <i class="ti-new-window"></i> Interstate transfer
              </a>
            </li>
            <li>
              <a href="/dashboard/international-bank-transfer">
                <i class="ti-new-window"></i> International Transfer
              </a>
            </li>
            <li>
              <a href="/dashboard/local-bank-transfer">
                <i class="ti-new-window"></i> Local Transfer
              </a>
            </li>
          </ul>
        </h6>
        <h6>
          <a href="/dashboard/withdraw-money">
            <i class="ti-import"></i> Recieve Money
          </a>
        </h6>
      </div>
      <br />
      <DashboardHeader profile={profile} />
      <>
        {/* {transactions?.map((item) => (
          <p>klld</p>
        ))} */}
      </>
      <TransactionTable transactions={transactions} profile={profile} />
    </>
  );
};

export default DashIndex;
