import MetaTags from "components/MetaTags";
import RegisterBox from "features/RegisterBox";
import { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <>
      <MetaTags title={"ثبت نام"} />
      <RegisterBox />
    </>
  );
};

export default RegisterPage;
