import Image from "next/image";
import HeaderItem from "../components/HeaderItem";

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
      <div className="flex  justify-center">
        <div className="border-white rounded-md  w-fit flex flex-col  ">
          <h2 className="text-3xl md:text-5xl my-5 p-3 font-bold tracking-wider text-center">
            Thousands of shows and movies starting at $4.99/month
          </h2>
          <div className="grid grid-cols-3 my-20">
            <Image
              className="object-contain"
              width={80}
              height={60}
              src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
            />
            <Image
              className="object-contain"
              width={80}
              height={60}
              src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670209.png?token=exp=1658473923~hmac=539e78c94b6ca6356a18db39d8af5ce3"
            />
            <Image
              className="object-contain"
              width={80}
              height={60}
              src="https://cdn-icons-png.flaticon.com/512/831/831330.png"
            />
          </div>
          <h2 className="text-2xl my-5 p-3 font-semibold tracking-wider text-center">
            Bundle & <span className="text-green-500">save 30%</span>
          </h2>
          <div className="flex justify-center space-x-3 md:space-x-20">
            <button className="bg-white hover:bg-green-500  text-black p-3 pr-12 pl-12 font-bold w-fit rounded-xl  ">
              Signup & Get Bundle
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
