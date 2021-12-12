import MetaTags from "components/atoms/MetaTags";
import RegisterBox from "components/organisms/RegisterBox";
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
