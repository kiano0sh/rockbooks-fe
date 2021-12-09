import MetaTags from "components/MetaTags";
import LoginBox from "features/LoginBox";
import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <>
      <MetaTags title={"ورود"} />
      <LoginBox />
    </>
  );
};

export default LoginPage;
