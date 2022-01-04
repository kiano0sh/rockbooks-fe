import { loginUser, logoutUser, useUserDispatch } from "context";
import { useEffect, useState } from "react";
import { validateToken } from "utils/token";

const useValidateToken = (): boolean => {
  const dispatch = useUserDispatch();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const { isValid } = validateToken();
    if (isValid) {
      dispatch(loginUser({}));
    } else {
      dispatch(logoutUser());
    }
    setIsValidating(false);
  }, [dispatch]);
  return isValidating;
};
export default useValidateToken;
