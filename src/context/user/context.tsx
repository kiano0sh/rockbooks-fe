import localStorageKeys from "consts/localStorageKeys";
import React, { FC } from "react";
import { removeAuthorizationToken } from "utils/user";

import { TUserActions } from "./actions";

// 1. Define types
type TDispatch = (action: TUserActions) => void;
type TState = {
  isAuthenticated: boolean;
  // currentUser: Partial<IUser> | null; // TODO: get complete user data after login
};
const initialState: TState = {
  isAuthenticated: false,
};
// 2. Define Contexts, Reducers and Provider
const UserStateContext = React.createContext<TState>(initialState);
const UserDispatchContext = React.createContext<TDispatch | undefined>(
  undefined
);

const UserReducer = (state: TState, action: TUserActions): TState => {
  switch (action.type) {
    case "LOGIN_USER": {
      // Set auth token in localstorage
      action.accessToken &&
        localStorage.setItem(localStorageKeys.token, action.accessToken);
      return { ...state, isAuthenticated: true };
    }
    case "LOGOUT_USER": {
      console.log("LOGOUT_USER");
      removeAuthorizationToken();
      return { ...state, isAuthenticated: false };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(UserReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = (): TState => {
  const context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }

  return context;
};

const useUserDispatch = (): TDispatch => {
  const context = React.useContext(UserDispatchContext);

  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }

  return context;
};

// 3. Export
const useUser = (): [TState, TDispatch] => {
  const state = useUserState();
  const dispatch = useUserDispatch();
  return [state, dispatch];
};

export { UserProvider, useUser, useUserState, useUserDispatch };
