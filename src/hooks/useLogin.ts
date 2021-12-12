import localStorageKeys from "consts/localStorageKeys";
import { useEffect } from "react";

export function useLogin(token?: string): void {
  // set the jwt token to localStorage in case of a successful login
  useEffect(() => {
    if (token) {
      localStorage.setItem(localStorageKeys.token, token);
    }
  }, [token]);
}
