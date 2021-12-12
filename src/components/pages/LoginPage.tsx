import MetaTags from "components/atoms/MetaTags";
import LoginBox from "components/organisms/LoginBox";
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
