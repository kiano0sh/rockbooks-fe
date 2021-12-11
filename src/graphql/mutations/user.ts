import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation userLogin($input: LoginInput!) {
    login(input: $input)
  }
`;

export const USER_REGISTER = gql`
  mutation userRegister($input: RegisterInput!) {
    register(input: $input)
  }
`;
