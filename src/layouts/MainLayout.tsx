import Button from "components/atoms/Button";
import Footer from "components/atoms/Footer";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthRoutePaths, MainRoutePaths } from "routes";

import TextInput from "../components/atoms/TextInput";
import { logoutUser, useUserDispatch, useUserState } from "../context";

const MainLayout: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserState();
  const userDispatch = useUserDispatch();

  return (
    <div className="h-screen bg-gray-100 overflow-auto flex flex-col min-h-screen">
      <div className="bg-white w-full flex justify-center h-16 mb-16 py-2">
        <nav className="flex flex-row justify-between w-full sm:w-1/2">
          <div className="w-80 flex flex-row">
            {isAuthenticated ? (
              <Button
                type="button"
                className="mr-4"
                name="خروج"
                onClick={() => {
                  userDispatch(logoutUser());
                  navigate(AuthRoutePaths.login);
                }}
                kind="ghost"
              />
            ) : (
              <>
                <Button
                  type="button"
                  className="mr-4"
                  name="ورود"
                  onClick={() => navigate(AuthRoutePaths.login)}
                  kind="ghost"
                />
                <Button
                  type="button"
                  className="mx-4"
                  name="ثبت نام"
                  onClick={() => navigate(AuthRoutePaths.register)}
                  kind="positive"
                />
              </>
            )}
          </div>
          <TextInput placeholder="جستوجو" type="text" className="w-96" />
          <img
            src="/icons/logo.svg"
            alt="rockbooks-logo"
            className="h-full mb-16 mx-4 cursor-pointer"
            onClick={() => {
              navigate(MainRoutePaths.home);
            }}
          />
        </nav>
      </div>
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
