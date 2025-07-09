import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import ReceiveMoneyComp from "@/components/dashComps/ReceiveMoneyComp";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <ReceiveMoneyComp />
      </DashboardWrapper>
    </>
  );
};

export default page;
