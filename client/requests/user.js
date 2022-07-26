import { gql, useMutation } from "@apollo/client";
import { client } from "../graphql/graphql.config";
import { createUser } from "../graphql/user";

export async function createUserRequest({
  firstName,
  lastName,
  email,
  password,
  photo,
}) {
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation createUser(
        $first_name: String!
        $last_name: String!
        $email: String!
        $photo: String!
        $password: String!
      ) {
        createUser(
          first_name: $first_name
          last_name: $last_name
          email: $email
          photo: $photo
          password: $password
        ) {
          id
          first_name
          last_name
          email
          password
          photo
        }
      }
    `,
    variables: {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      photo,
    },
  });

  return { data: data.createUser, errors };
}

export const signinUserRequest = async ({ email, password }) => {
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          id
          first_name
          last_name
          email
          photo
        }
      }
    `,
    variables: {
      email,
      password,
    },
  });
  return {
    data: data.login,
    errors,
  };
};
