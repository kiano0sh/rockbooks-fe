import { FC } from "react";
import { Outlet } from "react-router";

const AuthLayout: FC = ({ children }): JSX.Element => {
  return (
    <div className="bg-gray-400">
      <div>
        <div className="mt-2">
          <img src="/icons/logo.svg" alt="rockbooks-logo" />
          {children}
        </div>

        <div>
          <div className="divide-x-2" />
          <p color="neutral.main">
            Rock all the books in the world with RockBooks
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
