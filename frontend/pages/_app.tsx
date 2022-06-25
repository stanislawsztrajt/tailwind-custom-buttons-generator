import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import client from "@api/apollo-client";

import { Header, Footer } from "@features/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
