import "./index.css";

import { ApolloProvider } from "@apollo/client";

import MetaTags from "./components/atoms/MetaTags";
import { UserProvider } from "./context";
import client from "./graphql/ApolloProvider";
import Auth from "./providers/auth";
import AuthRoutes from "./routes/AuthRoutes";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <MetaTags />
      <ApolloProvider client={client}>
        <UserProvider>
          <Auth>
            <AuthRoutes />
            <MainRoutes />
          </Auth>
        </UserProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
