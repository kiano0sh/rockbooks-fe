import localStorageKeys from "consts/localStorageKeys";

export function removeAuthorizationToken(): void {
  localStorage.setItem(localStorageKeys.token, "");
}
