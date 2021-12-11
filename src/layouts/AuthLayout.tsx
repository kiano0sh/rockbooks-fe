import { FC } from "react";
import { Outlet } from "react-router";
import Footer from "components/Footer";

const AuthLayout: FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src="/icons/logo.svg"
          alt="rockbooks-logo"
          className="w-52 mb-16"
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
