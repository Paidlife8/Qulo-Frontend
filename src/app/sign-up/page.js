import LoginSignupWrapper from "@/components/loginSignupComps/LoginSignupWrapper";
import SignUpContents from "@/components/loginSignupComps/SignUpContents";
import React from "react";

const page = () => {
  return (
    <>
      <LoginSignupWrapper>
        <SignUpContents />
      </LoginSignupWrapper>
    </>
  );
};

export default page;
