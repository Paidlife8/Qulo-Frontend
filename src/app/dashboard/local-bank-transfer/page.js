import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import TransferToLocalBank from "@/components/dashComps/transferComps/TransferToLocalBank";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <TransferToLocalBank />
      </DashboardWrapper>
    </>
  );
};

export default page;
