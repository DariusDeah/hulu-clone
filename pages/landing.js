import React from "react";
import BundleDisplay from "../components/BundleDisplay";
import LogoHeader from "../components/LogoHeader";

function landingPage() {
  return (
    <div>
      <LogoHeader />
      <BundleDisplay />
      <div className="flex justify-center space-x-3 md:space-x-20">
        <button className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  ">
          Signup & Bundle
        </button>
        <button className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  ">
          Signup
        </button>
      </div>
    </div>
  );
}

export default landingPage;
