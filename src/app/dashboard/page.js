import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import DashIndex from "@/components/dashComps/index/DashIndex";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <DashIndex />
      </DashboardWrapper>
    </>
  );
};

export default page;
