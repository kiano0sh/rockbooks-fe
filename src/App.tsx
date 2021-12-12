import "./index.css";

import { ApolloProvider } from "@apollo/client";

import MetaTags from "./components/atoms/MetaTags";
import client from "./graphql/ApolloProvider";
import AuthRoutes from "./routes/AuthRoutes";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <MetaTags />
      <ApolloProvider client={client}>
        <AuthRoutes />
        <MainRoutes />
      </ApolloProvider>
    </>
  );
}

export default App;
