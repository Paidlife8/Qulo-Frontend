import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import TransferToSameBank from "@/components/dashComps/transferComps/TransferToSameBank";
import TransferBankForm from "@/components/dashComps/TransferBankForm";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <TransferToSameBank />
      </DashboardWrapper>
    </>
  );
};

export default page;
