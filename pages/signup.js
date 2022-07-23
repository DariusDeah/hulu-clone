import Image from "next/image";
import { useState } from "react";
import BundleDisplay from "../components/BundleDisplay";
import HeaderItem from "../components/HeaderItem";
import LogoHeader from "../components/LogoHeader";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <div>
      <LogoHeader />
      <div className="flex  justify-center ">
        <div className="border-white rounded-md justify-center w-full   flex flex-col align-middle  ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
