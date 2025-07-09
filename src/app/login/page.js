import LoginContents from "@/components/loginSignupComps/LoginContents";
import LoginSignupWrapper from "@/components/loginSignupComps/LoginSignupWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <LoginSignupWrapper>
        <LoginContents />
      </LoginSignupWrapper>
    </>
  );
};

export default page;
