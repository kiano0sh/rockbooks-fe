import { loginUser, logoutUser, useUserDispatch } from "context";
import { useEffect, useState } from "react";
import { validateToken } from "utils/token";

const useValidateToken = (): boolean => {
  const dispatch = useUserDispatch();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const { isValid } = validateToken();
    console.log(isValid);
    if (isValid) {
      dispatch(loginUser({}));
    } else {
      console.log("logout");
      dispatch(logoutUser());
    }
    setIsValidating(false);
  }, [dispatch]);
  return isValidating;
};
export default useValidateToken;
