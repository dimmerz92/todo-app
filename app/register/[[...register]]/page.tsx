import { SignUp } from "@clerk/nextjs";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default RegisterPage;
