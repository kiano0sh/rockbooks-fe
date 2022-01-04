import { useEffect } from "react";
import { useNavigate } from "react-router";
import { MainRoutePaths } from "routes";

import { loginUser, useUserDispatch } from "../context";

export function useLogin(token?: string): void {
  const navigate = useNavigate();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    if (token) {
      navigate(MainRoutePaths.home);
      userDispatch(loginUser({ accessToken: token }));
    }
  }, [token, navigate, userDispatch]);
}
