import useValidateToken from "hooks/useValidateToken";
import { FC } from "react";

const Auth: FC = ({ children }) => {
  const isValidating = useValidateToken();

  return <>{isValidating ? <p>Loading</p> : children}</>;
};

export default Auth;
