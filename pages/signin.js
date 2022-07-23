import Image from "next/image";
import { useState } from "react";
import BundleDisplay from "../components/BundleDisplay";
import HeaderItem from "../components/HeaderItem";
import LogoHeader from "../components/LogoHeader";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function SignIn() {
  return (
    <div>
      <LogoHeader />
      <div className="flex  justify-center  ">
        <div className="border-white rounded-md justify-center w-full   flex flex-col align-middle  ">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
