import localStorageKeys from "consts/localStorageKeys";

interface Token {
  isValid: boolean;
}

const logout = (): Token => {
  return { isValid: false };
};

export const validateToken = (): Token => {
  const token = localStorage.getItem(localStorageKeys.token);
  try {
    // TODO validate it for real not just by checking token existence
    if (token) {
      return { isValid: true };
    }
    // removeToken()
    return logout();
  } catch (e) {
    console.error(e);
    // removeToken()
    return logout();
  }
};
