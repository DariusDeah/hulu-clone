import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BundleDisplay from "../components/BundleDisplay";
import LogoHeader from "../components/LogoHeader";

function landingPage() {
  const router = useRouter();

  return (
    <div>
      <LogoHeader />
      {/* <div className="object-fill w-full flex justify-center">
        <Image
          layout="intrinsic"
          width={1900}
          height={400}
          src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
        />
      </div> */}
      <BundleDisplay />
      <div className="flex justify-center space-x-2 my-20 md:space-x-20">
        <button
          className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  "
          onClick={() => router.push("signup?bundle=1")}
        >
          Signup & Bundle
        </button>
        <button
          className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  "
          onClick={() => router.push("signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default landingPage;
