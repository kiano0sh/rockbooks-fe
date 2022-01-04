import { useEffect } from "react";
import { useNavigate } from "react-router";
import { MainRoutePaths } from "routes";

import { loginUser, useUserDispatch } from "../context";

export function useLogin(token?: string): void {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(MainRoutePaths.home);
    }
  }, [token, navigate]);

  const userDispatch = useUserDispatch();
  userDispatch(loginUser({ accessToken: token }));
}
