import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import TransferToInternationalBank from "@/components/dashComps/transferComps/TransferToInternationalBank";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <TransferToInternationalBank />
      </DashboardWrapper>
    </>
  );
};

export default page;
