import Image from "next/image";
import React from "react";

function BundleDisplay() {
  return (
    <>
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
          src="https://cdn-icons-png.flaticon.com/512/2852/2852639.png"
        />
      </div>
      <h2 className="text-2xl my-5 p-3 font-bold uppercase tracking-wider text-center">
        Bundle & <span className="text-green-500">save 30%</span>
      </h2>
    </>
  );
}

export default BundleDisplay;
