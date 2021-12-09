import AuthLayout from "layouts/AuthLayout";
import { FC, lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));

export enum AuthRoutePaths {
  root = "/",
  login = "login",
  register = "register",
}

const AuthRoutes: FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === AuthRoutePaths.root) {
      navigate(AuthRoutePaths.login);
    }
  }, [location, navigate]);

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={AuthRoutePaths.root} element={<AuthLayout />}>
          <Route path={AuthRoutePaths.login} element={<LoginPage />} />
          <Route path={AuthRoutePaths.register} element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
