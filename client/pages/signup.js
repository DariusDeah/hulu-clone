import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
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

    if (data && !error) {
      router.push("/");
      console.log(data);
    }
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
