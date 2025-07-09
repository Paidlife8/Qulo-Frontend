import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import TransactionsLog from "@/components/dashComps/TransactionsLog";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <TransactionsLog />
      </DashboardWrapper>
    </>
  );
};

export default page;
