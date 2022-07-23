import React, { useRef } from "react";

function SignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleFormSubmit = (e) => {
    e.prevenDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div className=" w-full  md:flex text-black   md:justify-center align-middle p-12 my-8 ">
      <form
        className="flex md:w-2/3 flex-col bg-white rounded-lg p-5 md:p-14 group space-y-7 font-bold "
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-center text-3xl">Welcome Back</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="p-3 rounded-md bg-gray-200"
          ref={emailRef}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="p-3 rounded-md bg-gray-200"
          ref={passwordRef}
        />

        <button
          type="submit"
          className="p-2 rounded-md bg-green-500   text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
