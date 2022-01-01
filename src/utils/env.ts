export const isDev = process.env.REACT_APP_MODE === "development";

type IEnv = "REACT_APP_GRAPHQL_SERVER" | "REACT_APP_MEDIA_FILE_SERVER";

export const getEnvVariable = (key: IEnv, fallback?: string): string =>
  (process.env[key] || fallback) as string;
