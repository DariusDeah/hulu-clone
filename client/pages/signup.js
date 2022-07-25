import { useMutation } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import BundleDisplay from "../components/BundleDisplay";
import HeaderItem from "../components/HeaderItem";
import LogoHeader from "../components/LogoHeader";
import SignUpForm from "../components/SignUpForm";
import { createUser } from "../graphql/user";

function SignUp() {
  const router = useRouter();

  const [createUserMutation, { data, loading, error }] =
    useMutation(createUser);

  const handleSignUp = (userData) => {
    createUserMutation({
      variables: {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        photo: userData.photo,
      },
    });

    console.log(userData);
    console.log(data);
    // router.push("/");
  };

  return (
    <div>
      <LogoHeader />
      <div className="flex  justify-center ">
        <div className="border-white rounded-md justify-center w-full   flex flex-col align-middle  ">
          <SignUpForm onSubmit={handleSignUp} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
