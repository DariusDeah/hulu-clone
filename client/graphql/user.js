import { gql } from "@apollo/client";

export const createUser = gql`
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
`;

export const loginUser = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
