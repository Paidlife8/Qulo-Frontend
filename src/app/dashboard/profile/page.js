import DashboardWrapper from "@/components/dashComps/DashboardWrapper";
import ProfileDetailsComp from "@/components/dashComps/ProfileDetailsComp";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardWrapper>
        <ProfileDetailsComp />
      </DashboardWrapper>
    </>
  );
};

export default page;
