"use client";
import React from "react";
import TransactionTable from "./TransactionTable";
import { useSelector } from "react-redux";
import { transactionSelector } from "@/redux/features/transaction/transaction-slice";
import { profileSelector } from "@/redux/features/profile/profile-slice";

const TransactionsLog = () => {
  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);
  return (
    <div className=" mt-[20rem] mb-[22rem]">
      <TransactionTable transactions={transactions} profile={profile} />
    </div>
  );
};

export default TransactionsLog;
