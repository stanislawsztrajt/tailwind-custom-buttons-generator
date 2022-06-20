import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";

import Navigation from "components/Navigation";
import { ApolloProvider } from "@apollo/client";
import client from "@api/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
