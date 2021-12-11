import "./index.css";

import { ApolloProvider } from "@apollo/client";

import MetaTags from "./components/MetaTags";
import client from "./graphql/ApolloProvider";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <>
      <MetaTags />
      <ApolloProvider client={client}>
        <AuthRoutes />
      </ApolloProvider>
    </>
  );
}

export default App;
