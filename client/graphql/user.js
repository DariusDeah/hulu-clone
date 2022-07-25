import { gql } from "@apollo/client";

export const loginUser = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
