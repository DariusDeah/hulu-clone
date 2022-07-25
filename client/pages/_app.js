import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/graphql.config";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
