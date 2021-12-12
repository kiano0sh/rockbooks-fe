import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { MainRoutePaths } from "routes";

export function useNavigateToHome(): void {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === MainRoutePaths.root) {
      navigate(MainRoutePaths.home);
    }
  }, [location, navigate]);
}
