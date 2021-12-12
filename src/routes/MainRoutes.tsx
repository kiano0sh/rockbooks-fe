import { useNavigateToHome } from "hooks/useNavigateToHome";
import MainLayout from "layouts/MainLayout";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { MainRoutePaths } from "./";

const HomePage = lazy(() => import("components/pages/HomePage"));

const MainRoutes: FC = (): JSX.Element => {
  useNavigateToHome();

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={MainRoutePaths.root} element={<MainLayout />}>
          <Route path={MainRoutePaths.home} element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
