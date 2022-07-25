import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoHeader from "../components/LogoHeader";
import SignUpForm from "../components/SignUpForm";
import { createUser } from "../graphql/user";
import userSlice, { createNewUser, userSelector } from "../redux/userSlice";
import { createUserRequest, useCreateUser } from "../requests/user";

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleSignUp = async (userData) => {
    const { data, errors } = await createUserRequest(userData);
    console.log(data);
    const { id, email, first_name, last_name, photo } = data;
    dispatch(
      createNewUser({
        id,
        email,
        firstName: first_name,
        lastName: last_name,
        photo,
      })
    );
    router.push("/");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
