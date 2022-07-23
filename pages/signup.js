import Image from "next/image";
import BundleDisplay from "../components/BundleDisplay";
import HeaderItem from "../components/HeaderItem";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="">
      <div className=" border-white border-b-2 p-2">
        {/* <Image
          className="object-contain"
          src="https://cdn-icons-png.flaticon.com/512/6422/6422877.png"
          width={80}
          height={60}
        /> */}
        <h2 className=" text-green-500  text-3xl font-bold  w-fit p-2 rounded-md">
          HubTv.
        </h2>
      </div>
      <div className="flex  justify-center ">
        <div className="border-white rounded-md justify-center   flex flex-col align-middle  ">
          <BundleDisplay />
          <SignUpForm />
          <div className="flex justify-center space-x-3 md:space-x-20">
            <button className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  ">
              Signup & Bundle
            </button>
            <button className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  ">
              Signup
            </button>
          </div>
        </div>
        {/* <Image
        layout="responsive"
        width={1}
        height={3}
        src="https://cdn-icons-png.flaticon.com/512/220/220766.png"
      /> */}
      </div>
    </div>
  );
}
