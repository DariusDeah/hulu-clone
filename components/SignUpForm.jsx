import React, { useRef, useState } from "react";

function SignUpForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsValidName(validateIsValidName(nameRef.current.value));
    setIsValidEmail(validateIsValidEmail(emailRef.current.value));
    setIsValidPassword(validateIsValidPassword(passwordRef.current.value));
    setIsValidConfirmPassword(
      validateIsValidConfirmPassword(
        passwordRef,
        confirmPasswordRef.current.value
      )
    );

    const validateIsValidName = (name) => name < 2;
    const validateIsValidEmail = (email) => email.includes("@");
    const validateIsValidPassword = (password) => password.length >= 8;
    const validateIsValidConfirmPassword = (
      originalPassword,
      passwordConfirm
    ) => passwordConfirm === originalPassword;

    return (
      <div className=" w-full flex text-black  justify-center my-8">
        <form
          className="flex w-3/4 flex-col bg-white rounded-lg p-4 md:p-14 group space-y-7 font-bold"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="p-3 rounded-md bg-gray-200"
            ref={nameRef}
          />
          {!isValidName && <p className="text-red-500 ">Invalid Name</p>}

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="p-3 rounded-md bg-gray-200"
            ref={emailRef}
          />
          {!isValidEmail && (
            <p className="text-red-500 ">
              Invalid Email, email must conatain @
            </p>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-3 rounded-md bg-gray-200"
            ref={passwordRef}
          />
          {!isValidPassword && (
            <p className="text-red-500 ">
              Invalid password, password must match rules
            </p>
          )}

          <div>
            <ul className="list-disc list-inside">
              <p>password must:</p>
              <li>be 8 charaters long at minimum</li>
              <li>must include one special character "%#@!?"</li>
              <li>not use any personal information</li>
            </ul>
          </div>

          <label htmlFor="password-Confirm"> Confirm Password</label>
          <input
            type="password"
            name="password-Confirm"
            className="p-3 rounded-md bg-gray-200"
            ref={confirmPasswordRef}
          />
          {!isValidConfirmPassword && (
            <p className="text-red-500 ">passwords must match</p>
          )}

          <button
            type="submit"
            className="p-2 rounded-md bg-green-500  text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
}

export default SignUpForm;
