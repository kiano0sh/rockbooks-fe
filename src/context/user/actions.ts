export interface IUser {
  accessToken?: string
}

interface ILoginUser extends IUser {
  type: string
}

interface ILogoutUser extends ILoginUser {}

export const loginUser = ({ accessToken }: IUser): ILoginUser => {
  return {
    type: "LOGIN_USER",
    accessToken,
  } as const
}

export const logoutUser = (): ILogoutUser => {
  return {
    type: "LOGOUT_USER",
  } as const
}

export type TUserActions =
  | ReturnType<typeof loginUser>
  | ReturnType<typeof logoutUser>
