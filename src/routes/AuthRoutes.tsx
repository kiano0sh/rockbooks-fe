import { useNavigateToHome } from "hooks/useNavigateToHome";
import AuthLayout from "layouts/AuthLayout";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthRoutePaths, MainRoutePaths } from "./";

const LoginPage = lazy(() => import("components/pages/LoginPage"));
const RegisterPage = lazy(() => import("components/pages/RegisterPage"));

const AuthRoutes: FC = (): JSX.Element => {
  useNavigateToHome();

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={MainRoutePaths.root} element={<AuthLayout />}>
          <Route path={AuthRoutePaths.login} element={<LoginPage />} />
          <Route path={AuthRoutePaths.register} element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
