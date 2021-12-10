import { FC } from "react";
import { Outlet } from "react-router";

const AuthLayout: FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <img src="/icons/logo.svg" alt="rockbooks-logo" className="w-80" />
        <Outlet />
      </div>

      <div>
        <div className="mt-20" />
        <p>Rock all the books in the world with RockBooks</p>
      </div>
    </div>
  );
};

export default AuthLayout;
