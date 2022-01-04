import { getEnvVariable } from "./env";

export function concatMediaServer(path: string): string {
  return (
    getEnvVariable("REACT_APP_MEDIA_FILE_SERVER", "http://localhost:8080/") +
    path
  );
}
