import { FC } from "react";
import { Outlet, useNavigate } from "react-router";
import Footer from "components/atoms/Footer";
import { AuthRoutePaths, MainRoutePaths } from "routes";
import Button from "components/atoms/Button";
import TextInput from "../components/atoms/TextInput";

const MainLayout: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-100 overflow-auto">
      <div className="bg-white w-full flex justify-center h-16  mb-24 py-2">
        <nav className="flex flex-row justify-between w-full sm:w-1/2">
          <div className="w-80 flex flex-row">
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
