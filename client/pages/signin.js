import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BundleDisplay from "../components/BundleDisplay";
import HeaderItem from "../components/HeaderItem";
import LogoHeader from "../components/LogoHeader";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { login } from "../redux/userSlice";
import { signinUserRequest } from "../requests/user";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignIn = async ({ email, password }) => {
    const { data, erors } = await signinUserRequest({ email, password });
    dispatch(
      login({
        id: data.id,
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.photo,
      })
    );
    router.push("/");
  };
  return (
    <div>
      <LogoHeader />
      <div className="flex  justify-center  ">
        <div className="border-white rounded-md justify-center w-full   flex flex-col align-middle  ">
          <SignInForm onSubmit={handleSignIn} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
